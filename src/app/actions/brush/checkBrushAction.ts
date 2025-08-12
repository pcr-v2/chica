"use server";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import z from "zod";

import { checkBrushSchema } from "@/app/actions/brush/brushSchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(utc);
dayjs.extend(timezone);

export type CheckBrushRequest = z.infer<typeof checkBrushSchema>;

export type CheckBrushResponse = {
  code: "VALIDATION_ERROR" | "SUCCESS" | "FAIL" | "ALREADY" | "NOTTODAY";
  message: string;
  data?: {
    studentId: string;
  };
};

export async function checkBrush(
  request: CheckBrushRequest,
): Promise<CheckBrushResponse> {
  const validated = checkBrushSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR",
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId, studentGrade, studentClass, studentNumber } =
    validated.data;

  const today = dayjs();
  const startOfDay = today.startOf("day").toDate();
  const endOfDay = today.endOf("day").toDate();

  try {
    const result = await mysqlPrisma.$transaction(async (trx) => {
      const student = await trx.student.findFirst({
        where: {
          schoolId,
          studentGrade,
          studentClass,
          studentNumber,
          studentStatus: true,
        },
      });

      if (!student) {
        return {
          code: "FAIL" as const,
          message: "학생을 찾을 수 없습니다.",
        };
      }

      const { studentId } = student;

      // 이미 오늘 양치 완료했는지 확인
      const already = await trx.brushed.findFirst({
        where: {
          studentId,
          brushedStatus: "Ok",
          brushedAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      if (already) {
        return {
          code: "ALREADY" as const,
          message: "오늘은 양치 체크를 완료했습니다.",
          data: { studentId },
        };
      }

      // 아직 체크 안 한 상태가 있는지 확인
      const toUpdate = await trx.brushed.findFirst({
        where: {
          studentId,
          brushedStatus: "No",
          brushedAt: {
            gte: startOfDay,
            lte: endOfDay,
          },
        },
      });

      // console.log("toUpdate", toUpdate);

      if (!toUpdate) {
        return {
          code: "NOTTODAY" as const,
          message: "오늘은 양치 체크하는 날이 아닙니다.",
          data: { studentId },
        };
      }

      await trx.brushed.update({
        where: { id: toUpdate.id },
        data: {
          brushedStatus: "Ok",
          // brushedAt: dayjs().toDate(),
        },
      });

      return {
        code: "SUCCESS" as const,
        message: "양치 실천을 완료했습니다.",
        data: { studentId },
      };
    });

    return result;
  } catch (err) {
    console.error("양치 처리 중 오류:", err);
    return {
      code: "FAIL" as const,
      message: "양치 기록 업데이트 중 문제가 발생했습니다.",
    };
  }
}
