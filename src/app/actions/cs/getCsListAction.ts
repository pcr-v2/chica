"use server";

import { z } from "zod";

import { getCsListSchema } from "@/app/actions/cs/csSchema";
import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export type GetCsListResponse = Awaited<ReturnType<typeof getCsList>>;

export type GetCsListRequest = z.infer<typeof getCsListSchema>;

export async function getCsList(request: GetCsListRequest) {
  const validated = getCsListSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { type, schoolId } = validated.data;

  if (type === "master") {
    const masterResult = await mysqlPrisma.board.findMany({
      where: {
        status: {
          not: "DELETED",
        },
      },
    });

    if (masterResult == null) {
      return {
        code: "FAIL" as const,
        message: "문의글을 가져오는중 문제가 발생했습니다.",
      };
    }

    return {
      code: "SUCCESS" as const,
      result: masterResult,
      message: "문의글을 가져 왔습니다.",
    };
  }

  const teacherResult = await mysqlPrisma.board.findMany({
    where: {
      schoolId: schoolId,
      status: {
        not: "DELETED",
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  if (!teacherResult) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "문의글을 가져오는중 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "문의글을 가져 왔습니다.",
    result: teacherResult,
  };
}
