"use server";

import { cookies } from "next/headers";
import { z } from "zod";

import { getSchoolSchema } from "@/app/actions/school/schoolSchema";
import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export type GetSchoolRequest = z.infer<typeof getSchoolSchema>;
export type GetSchoolResponse = Awaited<ReturnType<typeof getSchool>>;

export async function getSchool(request: GetSchoolRequest) {
  const validated = getSchoolSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const cookieStore = await cookies();

  const accessToken = cookieStore.get("CHICA_ADMIN_ACCESS_TOKEN")?.value;

  if (accessToken == null) {
    return {
      code: "UNAUTHORIZED",
      message: "인증이 필요합니다.",
    };
  }

  const result = await mysqlPrisma.school.findFirst({
    where: {
      schoolId: validated.data.schoolId,
      schoolStatus: { not: false },
      startAt: { lte: customDayjs().toISOString() },
      endAt: { gte: customDayjs().toISOString() },
    },
  });

  if (!result) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "학교 정보를 가져오는중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "학교 정보를 가져왔습니다.",
    result,
  };
}
