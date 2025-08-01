"use server";

import { revalidatePath } from "next/cache";
import z from "zod";

import { updateUnCheckedSchema } from "@/app/actions/summary/summarySchema";
import { mysqlPrisma } from "@/libs/prisma";

export type updateUnCheckedResponse = Awaited<
  ReturnType<typeof updateUnChecked>
>;

export type UpdateUnCheckedRequest = z.infer<typeof updateUnCheckedSchema>;

export async function updateUnChecked(request: UpdateUnCheckedRequest) {
  const validated = updateUnCheckedSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { studentId, updateData } = validated.data;

  const res = await mysqlPrisma.$transaction(async (trx) => {
    const updatePromise = updateData.map((data) =>
      trx.brushed.update({
        where: {
          id: data.id,
          studentId: studentId,
        },
        data: {
          brushedStatus: data.newStatus,
        },
      }),
    );

    return await Promise.all(updatePromise);
  });

  revalidatePath("/summary");

  return {
    code: "SUCCESS",
    data: res,
  };
}
