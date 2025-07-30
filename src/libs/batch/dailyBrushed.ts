// dailyBrushed.ts
import { mysqlPrisma } from "../../../src/libs/prisma";

async function main() {
  const today = new Date().toISOString().split("T")[0];
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

    console.log(`[Batch] ${insertData.length} rows inserted at ${today}`);
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
}

main();
