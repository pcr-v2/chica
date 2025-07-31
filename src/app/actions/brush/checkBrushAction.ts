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

export type CheckBrushResponse = {
  code: "VALIDATION_ERROR" | "SUCCESS" | "FAIL";
  message: string;
  data?: {
    studentId: string;
  };
};

export async function checkBrush(
  request: CheckBrushRequest,
): Promise<CheckBrushResponse> {
  const validated = checkBrushSchema.safeParse(request);
  console.log("validated", validated);
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

  try {
    const checkBrush = mysqlPrisma.$transaction(async (trx) => {
      const findStudent = await trx.student.findFirst({
        where: {
          schoolId,
          studentGrade,
          studentClass,
          studentNumber,
          studentStatus: true,
        },
      });

      // console.log("findStudent", findStudent);

      if (findStudent == null) {
        throw {
          code: "FAIL" as const,
          message: "학생을 찾을 수 없습니다.",
        };
      }

      const findBrushToday = await mysqlPrisma.brushed.findFirst({
        where: {
          studentId: findStudent.studentId,
          brushedStatus: "No",
          brushedAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      // console.log("findBrushToday", findBrushToday);

      if (findBrushToday == null) {
        throw {
          code: "FAIL" as const,
          message: "양치 데이터를 찾을 수 없습니다.",
        };
      }

      const updateBurshedToday = await mysqlPrisma.brushed.update({
        where: {
          id: findBrushToday.id,
          brushedStatus: "No",
          brushedAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
        data: {
          brushedStatus: "Ok",
          brushedAt: customDayjs().toDate(),
        },
      });

      if (updateBurshedToday == null) {
        throw {
          code: "FAIL" as const,
          message: "양치 업데이트 중 문제가 발생했습니다.",
        };
      }

      return {
        data: {
          studentId: findStudent.studentId,
        },
      };
    });

    if (checkBrush == null) {
      throw {
        code: "FAIL" as const,
        message: "양치 업데이트 중 문제가 발생했습니다.",
      };
    }

    return {
      code: "SUCCESS" as const,
      message: "양치 실천을 완료했습니다.",
      data: {
        studentId: (await checkBrush).data.studentId,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      code: "FAIL",
      message: "양치 기록 업데이트 중 문제가 발생했습니다.",
    };
  }
}
