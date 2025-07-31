"use server";

import { mysqlPrisma } from "@/libs/prisma";

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

  return {
    code: "SUCCESS",
    data: {
      count: test,
      count2: test2,
      test3,
    },
  };
}
