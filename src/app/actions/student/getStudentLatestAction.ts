"use server";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import z from "zod";

import { getStudentLatestSummarySchema } from "@/app/actions/student/studentSchema";
// import { getStudentSchema } from "@/app/actions/student/studentSchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

export type GetStudentLatestSummaryResponse = Awaited<
  ReturnType<typeof getStudentLatestSummary>
>;

export type GetStudentLatestSummaryRequest = z.infer<
  typeof getStudentLatestSummarySchema
>;

export async function getStudentLatestSummary(
  request: GetStudentLatestSummaryRequest,
) {
  const validated = getStudentLatestSummarySchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId, studentGrade, studentClass, studentNumber } =
    validated.data;

  const student = await mysqlPrisma.student.findFirst({
    where: {
      schoolId,
      studentGrade,
      studentClass,
      studentNumber,
    },
  });

  if (student == null) {
    return {
      code: "NOT_FOUND" as const,
      message: "존재하지 않는 학생입니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    data: student,
  };
}
