"use server";

import { z } from "zod";

import { writeCommentSchema } from "@/app/actions/cs/csSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type WriteCsRequest = z.infer<typeof writeCommentSchema>;

export async function writeComment(request: WriteCsRequest) {
  const validated = writeCommentSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { boardId, schoolId, comment } = validated.data;

  if (schoolId == null) {
    return {
      code: "FAIL" as const,
      message: "학교 아이디가 존재하지 않습니다.",
    };
  }

  const writeCommentResult = await mysqlPrisma.board.update({
    where: {
      id: boardId,
      schoolId,
    },
    data: {
      comment,
    },
  });

  if (writeCommentResult == null) {
    return {
      code: "FAIL" as const,
      message: "답변 작성중에 문제가 발생했습니다.",
    };
  }

  return {
    code: "SUCCESS" as const,
    message: "작성이 완료되었습니다.",
  };
}
