"use server";

import { mysqlPrisma } from "@/libs/prisma";

export default async function testAction() {
  const todayDate = new Date();
  const today = new Date().toISOString().split("T")[0]; // "2025-08-12"
  const dayOfWeek = todayDate.getDay();
  // 토요일(6) 또는 일요일(0) 이면 종료
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    console.log(`[Batch] Today is weekend (${today}). No inserts.`);
    return;
  }
  try {
    // 1. 휴일 체크
    const isHoliday = await mysqlPrisma.holiday.findFirst({
      where: {
        holidayStatus: true,
        holidayAt: new Date(today),
      },
    });
    if (isHoliday) {
      console.log(`[Batch] Today is a holiday (${today}). No inserts.`);
      return; // 종료
    }

    console.log("isHoliday", isHoliday);

    // 2. 오늘 유효한 스케줄 조회 (복수일 수 있음)
    // 1. schedules 조회 시 schoolId도 포함해서 받기
    const schedules = await mysqlPrisma.schedules.findMany({
      where: {
        scheduleStatus: true,
        scheduleAt: new Date(today),
      },
      select: {
        scheduleTarget: true,
        schoolId: true, // 스케줄에 연동된 학교 아이디
      },
    });

    console.log("schedules", schedules);

    // 2. exclude 조건을 학교별로 저장
    type ExcludeMap = Map<string, number[] | "all">;
    const excludeMap: ExcludeMap = new Map();

    for (const schedule of schedules) {
      if (schedule.scheduleTarget === "all") {
        excludeMap.set(schedule.schoolId, "all"); // 전체 학년 제외
      } else {
        const targets = schedule.scheduleTarget
          .split(/[\s,]+/)
          .map((x) => Number(x.trim()))
          .filter((x) => !isNaN(x));
        const prev = excludeMap.get(schedule.schoolId);

        if (prev === "all") {
          // 이미 전체 제외 상태니까 변경하지 않아도 됨
          excludeMap.set(schedule.schoolId, "all");
        } else {
          // prev가 없거나 number[]인 경우
          const newTargets = prev ? [...prev, ...targets] : targets;
          excludeMap.set(schedule.schoolId, newTargets);
        }
      }
    }

    console.log("excludeMap", excludeMap);

    // 3. 학생 조회 조건 만들기 (exclusion 로직 포함)
    const students = await mysqlPrisma.student.findMany({
      where: {
        studentStatus: true,
        OR: [
          // 제외 조건에 해당하지 않는 학교 학생들
          { schoolId: { notIn: Array.from(excludeMap.keys()) } },
          // 제외 조건에 따라 필터링 된 학교 학생들
          ...Array.from(excludeMap.entries()).map(
            ([schoolId, excludeGrades]) => {
              if (excludeGrades === "all") {
                // 이 학교 전체 제외 → 조건을 주지 않으면 됨 (학생 안 뽑음)
                return { schoolId, studentId: { equals: "__no_such_id__" } }; // 무조건 제외용 거짓 조건
              } else {
                // 제외 학년 제외 (학년이 excludeGrades에 포함되지 않은 학생만)
                return {
                  schoolId,
                  NOT: {
                    studentGrade: { in: excludeGrades },
                  },
                };
              }
            },
          ),
        ],
      },
    });

    console.log("students", students.length);

    if (students.length === 0) {
      console.log(
        `[Batch] No students to insert after applying schedule filters.`,
      );
      return;
    }
    // 5. brushed insert
    const insertData = students.map((student) => ({
      studentId: student.studentId,
      brushedStatus: "No" as
        | "No"
        | "Ok"
        | "EarlyLeave"
        | "Travel"
        | "Workshop"
        | "Absence",
      brushedAt: new Date().toISOString(),
    }));
    await mysqlPrisma.brushed.createMany({
      data: insertData,
      //   skipDuplicates: true,
    });
    console.log(`[Batch] ${insertData.length} rows inserted at ${today}`);
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
}
