import "dotenv/config";

import { mysqlPrisma } from "../src/libs/prisma";

async function main() {
  const todayDate = new Date();
  const today = todayDate.toISOString().split("T")[0];
  const dayOfWeek = todayDate.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    await mysqlPrisma.logs.create({
      data: {
        content: `[Batch] 오늘은 주말(${today})로 insert하지 않습니다.`,
        schoolId: null,
        logsStatus: "No",
      },
    });
    return;
  }

  try {
    // 휴일 체크
    const isHoliday = await mysqlPrisma.holiday.findFirst({
      where: { holidayStatus: true, holidayAt: new Date(today) },
    });

    if (isHoliday) {
      await mysqlPrisma.logs.create({
        data: {
          content: `[Batch] 오늘은 공휴일(${today})로 insert하지 않습니다.`,
          schoolId: null,
          logsStatus: "No",
        },
      });
      return;
    }

    // 오늘 유효한 스케줄 조회
    const schedules = await mysqlPrisma.schedules.findMany({
      where: { scheduleStatus: true, scheduleAt: new Date(today) },
      select: { scheduleTarget: true, schoolId: true, scheduleName: true },
    });

    // exclude 조건 준비
    type ExcludeMap = Map<
      string,
      { excludeGrades: number[] | "all"; reason: string }
    >;
    const excludeMap: ExcludeMap = new Map();

    for (const s of schedules) {
      const reason = s.scheduleName;
      if (s.scheduleTarget === "all") {
        excludeMap.set(s.schoolId, { excludeGrades: "all", reason });
      } else {
        const targets = s.scheduleTarget
          .split(/[\s,]+/)
          .map(Number)
          .filter((x) => !isNaN(x));
        const prev = excludeMap.get(s.schoolId);
        if (prev?.excludeGrades === "all") continue;
        const newGrades = prev ? [...prev.excludeGrades, ...targets] : targets;
        excludeMap.set(s.schoolId, { excludeGrades: newGrades, reason });
      }
    }

    // 학생 조회
    const students = await mysqlPrisma.student.findMany({
      where: {
        studentStatus: true,
        OR: [
          { schoolId: { notIn: Array.from(excludeMap.keys()) } },
          ...Array.from(excludeMap.entries()).map(
            ([schoolId, { excludeGrades }]) => {
              if (excludeGrades === "all")
                return { schoolId, studentId: { equals: "__no_such_id__" } };
              return { schoolId, NOT: { studentGrade: { in: excludeGrades } } };
            },
          ),
        ],
      },
    });

    // Brushed insert
    const insertData = students.map((s) => ({
      studentId: s.studentId,
      brushedStatus: "No" as const,
      brushedAt: new Date(),
      updatedAt: new Date(),
    }));
    // await mysqlPrisma.brushed.createMany({ data: insertData });

    // 학교별 학년별 집계
    const schoolGradeMap = new Map<string, Map<number, number>>(); // schoolId -> grade -> count
    for (const s of students) {
      if (!schoolGradeMap.has(s.schoolId))
        schoolGradeMap.set(s.schoolId, new Map());
      const gradeMap = schoolGradeMap.get(s.schoolId)!;
      gradeMap.set(s.studentGrade, (gradeMap.get(s.studentGrade) || 0) + 1);
    }

    // Logs 기록 - 생성된 경우
    for (const [schoolId, gradeMap] of schoolGradeMap.entries()) {
      for (const [grade, count] of gradeMap.entries()) {
        const school = await mysqlPrisma.school.findUnique({
          where: { schoolId },
        });
        await mysqlPrisma.logs.create({
          data: {
            content: `오늘 ${school?.schoolName} ${grade}학년 ${count}개의 rows가 생성되었습니다.`,
            schoolId: school?.schoolId,
            logsStatus: "Ok",
          },
        });
      }
    }

    // Logs 기록 - 생성되지 않은 학년
    for (const [schoolId, { excludeGrades, reason }] of excludeMap.entries()) {
      if (excludeGrades === "all") {
        const school = await mysqlPrisma.school.findUnique({
          where: { schoolId },
        });
        await mysqlPrisma.logs.create({
          data: {
            content: `오늘 ${school?.schoolName} 전체 학년은 '${reason}' 일정으로 인해 생성되지 않았습니다.`,
            schoolId: school?.schoolId,
            logsStatus: "No",
          },
        });
      } else {
        const school = await mysqlPrisma.school.findUnique({
          where: { schoolId },
        });
        await mysqlPrisma.logs.create({
          data: {
            content: `오늘 ${school?.schoolName} ${excludeGrades.join(",")}학년은 '${reason}' 일정으로 인해 생성되지 않았습니다.`,
            schoolId: school?.schoolId,
            logsStatus: "No",
          },
        });
      }
    }

    console.log(`[Batch] ${insertData.length} rows inserted at ${today}`);
  } catch (err) {
    await mysqlPrisma.logs.create({
      data: {
        schoolId: null,
        logsStatus: "No",
        content: `[Batch Error] ${err}`,
      },
    });
    console.error(err);
  }
}
main();
