import dayjs from "dayjs";
import z from "zod";

import { calculateBrushSchema } from "@/app/actions/brush/brushSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type CalculateBrushResponse = Awaited<ReturnType<typeof calculateBrush>>;

export type CalculateBrushRequest = z.infer<typeof calculateBrushSchema>;

export async function calculateBrush(request: CalculateBrushRequest) {
  const validated = calculateBrushSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const today = dayjs();

  const totalNo = await mysqlPrisma.brushed.count({
    where: {
      studentId: validated.data.studentId,
      brushedStatus: "No",
      brushedAt: {
        lte: today.toDate(),
      },
    },
  });

  // console.log("totalNo", totalNo);
}
