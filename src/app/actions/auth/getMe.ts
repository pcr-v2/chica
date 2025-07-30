"use server";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";

import { mysqlPrisma } from "@/libs/prisma";

const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET);

export type GetMeResponse = Awaited<ReturnType<typeof getMe>>;

export async function getMe() {
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

  const list = await mysqlPrisma.$queryRawUnsafe<
    {
      studentGrade: number;
      studentClass: string;
    }[]
  >(
    `
      SELECT
        student_grade,
        GROUP_CONCAT(DISTINCT student_class ORDER BY student_class) AS class_list
      FROM Student
      WHERE school_id = ? AND student_status = 1
      GROUP BY student_grade
      ORDER BY student_grade;
    `,
    admin.schoolId,
  );

  const classList = list.map(({ student_grade, class_list }: any) => ({
    grade: student_grade.toString(),
    class: class_list.split(","),
  }));

  return {
    code: "SUCCESS",
    data: {
      type: admin.schoolType,
      loginId: admin.loginId,
      schoolId: admin.schoolId,
      schoolLevel: admin.schoolLevel,
      name: admin.teacherName,
      classList,
    },
  };
}
