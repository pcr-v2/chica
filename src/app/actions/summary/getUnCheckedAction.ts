"use server";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import z from "zod";

import { getUnCheckedSchema } from "@/app/actions/summary/summarySchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

export type getUnCheckedResponse = Awaited<ReturnType<typeof getUnChecked>>;

export type GetUnCheckedRequest = z.infer<typeof getUnCheckedSchema>;

export async function getUnChecked(request: GetUnCheckedRequest) {
  const validated = getUnCheckedSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  // KST 기준 오늘
  const today = dayjs();

  // 이번 주 월요일 00:00
  const startOfWeek = today.weekday(1).startOf("day");

  // 이번 주 금요일 23:59:59
  const endOfWeek = today.weekday(5).endOf("day");

  // console.log("startOfWeek:", startOfWeek.format()); // 예: 2025-07-28T00:00:00+09:00
  // console.log("일주일전:", today.subtract(7, "day").format()); // 예: 2025-08-01T23:59:59+09:00

  const unCheckedList = await mysqlPrisma.brushed.findMany({
    where: {
      studentId: validated.data.studentId,
      brushedAt: {
        gte: today.subtract(7, "day").startOf("day").toDate(),
        lte: today.endOf("day").toDate(),
      },
      brushedStatus: { not: "Ok" },
    },
  });

  // console.log("unCheckedSevenDaysAgo", unCheckedList);

  if (unCheckedList.length <= 0) {
    return {
      code: "FAIL",
      message: "양치를 모두 실천하셨습니다.",
    };
  }

  return {
    code: "SUCCESS",
    data: unCheckedList,
  };
}
