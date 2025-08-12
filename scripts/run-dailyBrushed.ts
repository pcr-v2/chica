import "dotenv/config";

import { mysqlPrisma } from "../src/libs/prisma";

async function main() {
  const today = new Date().toISOString().split("T")[0];

  try {
    // 1. 휴일 체크
    const isHoliday = await mysqlPrisma.holiday.findFirst({
      where: {
        holidayStatus: true,
        holidayAt: today,
      },
    });

    if (isHoliday) {
      console.log(`[Batch] Today is a holiday (${today}). No inserts.`);
      return; // 종료
    }

    // 2. 오늘 유효한 스케줄 조회 (복수일 수 있음)
    const schedules = await mysqlPrisma.schedules.findMany({
      where: {
        scheduleStatus: true,
        scheduleAt: today,
      },
    });

    // 3. 스케줄 로직 체크
    let excludeGrades: number[] = [];
    for (const schedule of schedules) {
      if (schedule.scheduleTarget === "all") {
        console.log(`[Batch] Schedule target is all for today. No inserts.`);
        return; // 전 학년 제외 → 종료
      }

      // schedule_target에 학년들이 콤마 혹은 공백 구분으로 저장되어 있다고 가정
      // 예: "1,2,3" or "1 2 3"
      const targets = schedule.scheduleTarget
        .split(/[\s,]+/)
        .map((x) => Number(x.trim()))
        .filter((x) => !isNaN(x));

      excludeGrades = [...excludeGrades, ...targets];
    }

    // 4. 학생 조회시 제외 학년 필터 적용
    const students = await mysqlPrisma.student.findMany({
      where: {
        studentStatus: true,
        // 학년이 excludeGrades에 없도록 필터링
        NOT:
          excludeGrades.length > 0
            ? { studentGrade: { in: excludeGrades } }
            : undefined,
      },
    });

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
      skipDuplicates: true,
    });

    console.log(`[Batch] ${insertData.length} rows inserted at ${today}`);
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
}

main();
