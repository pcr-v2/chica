"use server";

import dayjs from "dayjs";

import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export async function getTest() {
  const test = await mysqlPrisma.brushed.count();
  const test2 = await mysqlPrisma.brushed.count({
    where: {
      studentId: "86dda7d4-fafc-42ff-868a-59da0f1947cf",
    },
  });

  const test3 = await mysqlPrisma.brushed.findMany({
    where: {
      studentId: "86dda7d4-fafc-42ff-868a-59da0f1947cf",
    },
  });

  console.log(dayjs(test3[0].brushedAt).format("YYYY-MM-DD-ddd"));

  return {
    code: "SUCCESS",
    data: {
      count: test,
      count2: test2,
      test3,
    },
  };
}
