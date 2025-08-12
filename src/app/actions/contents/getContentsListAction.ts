"use server";

import { z } from "zod";

import { getContentsListSchema } from "@/app/actions/contents/contentsSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type GetContentsListResponse = Awaited<
  ReturnType<typeof getContentsList>
>;

export type GetContentsListRequest = z.infer<typeof getContentsListSchema>;

export async function getContentsList(request: GetContentsListRequest) {
  const validated = getContentsListSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId } = validated.data;

  const res = await mysqlPrisma.contents.findMany({
    where: {
      schoolId,
      contentsStatus: true,
    },
    orderBy: {
      seq: "asc",
    },
  });

  if (!res) {
    return {
      code: "FAIL" as const,
      message: "컨텐츠를 가져오는 중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "컨텐츠를 가져 왔습니다.",
    result: res,
  };
}
