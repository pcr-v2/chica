"use server";

import { z } from "zod";

import { getStudentListSchema } from "@/app/actions/student/studentSchema";
import { mysqlPrisma } from "@/libs/prisma";
import { Prisma } from "@/prisma/generated";

export type GetStudentListRequest = z.infer<typeof getStudentListSchema>;
export type GetStudentListResponse = Awaited<ReturnType<typeof getStudentList>>;

export async function getStudentList(request: GetStudentListRequest) {
  const validated = getStudentListSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const isMaster = validated.data.schoolType === "master";

  const where: Prisma.StudentWhereInput[] = [];

  if (!isMaster) {
    where.push({
      schoolId: validated.data.schoolId,
    });
  }

  where.push({ studentStatus: true });

  const result = await mysqlPrisma.student.findMany({
    where: { AND: where },
    orderBy: { createdAt: "desc" },
  });

  if (!result) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "학생 리스트를 가져오는중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "학생리스트를 가져왔습니다.",
    result,
  };
}
