"use server";

import z from "zod";

import { getStudentInfoSchema } from "@/app/actions/student/studentSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type GetStudentInfoResponse = Awaited<ReturnType<typeof getStudentInfo>>;

export type GetStudentInfoRequest = z.infer<typeof getStudentInfoSchema>;

export async function getStudentInfo(request: GetStudentInfoRequest) {
  const validated = getStudentInfoSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const student = await mysqlPrisma.student.findFirst({
    where: {
      studentId: validated.data.studentId,
    },
  });

  if (student == null) {
    return {
      code: "NOT_FOUND",
      message: "존재하지 않는 학생입니다.",
    };
  }

  return {
    code: "SUCCESS",
    data: student,
  };
}
