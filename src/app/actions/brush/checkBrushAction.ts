"use server";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import z from "zod";

import { checkBrushSchema } from "@/app/actions/brush/brushSchema";
import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Asia/Seoul");

export type CheckBrushRequest = z.infer<typeof checkBrushSchema>;

export type CheckBrushResponse = Awaited<ReturnType<typeof checkBrush>>;

export async function checkBrush(request: CheckBrushRequest) {
  const validated = checkBrushSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const today = customDayjs();
  const startOfDay = today.startOf("day").toDate();
  const endOfDay = today.endOf("day").toDate();

  const { schoolId, studentGrade, studentClass, studentNumber } =
    validated.data;
  //   console.log(validated.data);
  const res = await mysqlPrisma.student.findFirst({
    where: {
      schoolId,
      studentGrade,
      studentClass,
      studentNumber,
      studentStatus: true,
    },
  });

  //   console.log("res", res);

  if (res == null) {
    return {
      code: "FAIL",
      message: "학생을 찾을 수 없습니다.",
    };
  }
  const nowSeoul = dayjs().tz("Asia/Seoul");

  const findBrushToday = await mysqlPrisma.brushed.findFirst({
    where: {
      studentId: res.studentId,
      brushedStatus: "No",
      brushedAt: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
  });

  console.log("findBrushToday", findBrushToday);

  return {
    code: "SUCCESS",
    data: {
      //   type: admin.schoolType,
      //   loginId: admin.loginId,
      //   schoolId: admin.schoolId,
      //   schoolLevel: admin.schoolLevel,
      //   name: admin.teacherName,
    },
  };
}
