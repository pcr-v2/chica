// lib/batch/dailyBrushed.ts
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import cron from "node-cron";

import { mysqlPrisma } from "@/libs/prisma";

const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET);

// 매일 오전 6시 (서버 시간 기준) 실행
cron.schedule("0 5 * * *", async () => {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD 기준
  //   const brushedAt = new Date(`${today}T06:00:00+09:00`);

  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("CHICA_USER_ACCESS_TOKEN")?.value;

    if (accessToken == null) {
      return {
        code: "UNAUTHORIZED",
        message: "인증이 필요합니다.",
      };
    }

    const verified = await jwtVerify(accessToken, secretKey);

    const admin = await mysqlPrisma.school.findFirst({
      where: {
        loginId: verified.payload.id!,
      },
    });

    if (admin == null) {
      return {
        code: "NOT_FOUND",
        message: "존재하지 않는 유저입니다.",
      };
    }

    const students = await mysqlPrisma.student.findMany({
      where: {
        schoolId: admin.schoolId,
      },
    });

    const insertData = students.map((student) => ({
      studentId: student.studentId,
      brushedStatus: "No",
    }));

    await mysqlPrisma.brushed.createMany({
      data: insertData as any[],
      skipDuplicates: true,
    });

    console.log(
      `[Batch] ${insertData.length} brushed rows inserted at ${new Date()}`,
    );
  } catch (err) {
    console.error("[Batch Error] brushed insert failed:", err);
  }
});
