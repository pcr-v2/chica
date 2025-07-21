"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { writeCsSchema } from "@/app/actions/cs/csSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type WriteCsRequest = z.infer<typeof writeCsSchema>;

export async function writeCs(request: WriteCsRequest) {
  const validated = writeCsSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId, content, title } = validated.data;

  if (schoolId == null) {
    return {
      code: "FAIL" as const,
      message: "학교 아이디가 존재하지 않습니다.",
    };
  }

  const writeResult = await mysqlPrisma.board.create({
    data: {
      schoolId,
      title,
      content,
    },
  });

  if (writeResult == null) {
    return {
      code: "FAIL" as const,
      message: "작성중에 문제가 발생했습니다.",
    };
  }

  revalidatePath("/cs/list");

  return {
    code: "SUCCESS" as const,
    message: "작성이 완료되었습니다.",
  };
}
