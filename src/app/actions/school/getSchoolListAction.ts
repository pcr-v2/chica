"use server";

import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export type GetSchoolListResponse = Awaited<ReturnType<typeof getSchoolList>>;

export async function getSchoolList() {
  const result = await mysqlPrisma.school.findMany({
    where: {
      schoolStatus: { not: false },
      startAt: { lte: customDayjs().toISOString() },
      endAt: { gte: customDayjs().toISOString() },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (!result) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "학교 리스트를 가져오는중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "학교리스트를 가져왔습니다.",
    result,
  };
}
