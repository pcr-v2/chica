// lib/batch/dailyBrushed.ts
import cron from "node-cron";

import { mysqlPrisma } from "../../../src/libs/prisma";

// 매일 오전 6시 (서버 시간 기준) 실행
cron.schedule("45 6 * * *", async () => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD 기준
  //   const brushedAt = new Date(`${today}T06:00:00+09:00`);

  try {
    const students = await mysqlPrisma.student.findMany({});

    const insertData = students.map((student) => ({
      studentId: student.studentId,
      brushedStatus: "No",
    }));

    await mysqlPrisma.brushed.createMany({
      data: insertData as any[],
      skipDuplicates: true,
    });

    console.log(
      `[Batch] ${insertData.length} brushed rows inserted at ${today}`,
    );
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
});
