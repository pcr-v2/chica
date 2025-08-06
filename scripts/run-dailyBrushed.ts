// dailyBrushed.ts
import dayjs from "dayjs";
import "dotenv/config";

import { mysqlPrisma } from "../src/libs/prisma";

async function main() {
  const today = new Date().toISOString().split("T")[0];
  try {
    const students = await mysqlPrisma.student.findMany({
      where: {
        studentStatus: true,
      },
    });

    const insertData = students.map((student) => ({
      studentId: student.studentId,
      brushedStatus: "No",
      brushedAt: new Date().toISOString(),
    }));

    await mysqlPrisma.brushed.createMany({
      data: insertData.map((el) => ({
        brushedAt: el.brushedAt,
        brushedStatus: el.brushedStatus as
          | "No"
          | "Ok"
          | "EarlyLeave"
          | "Travel"
          | "Workshop"
          | "Absence",
        studentId: el.studentId,
      })),
      skipDuplicates: true,
    });

    console.log(`[Batch] ${insertData.length} rows inserted at ${today}`);
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
}

main();
