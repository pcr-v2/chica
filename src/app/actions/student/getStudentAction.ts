"use server";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import z from "zod";

import { getStudentSchema } from "@/app/actions/student/studentSchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

export type GetStudentResponse = Awaited<ReturnType<typeof getStudentSummary>>;

export type GetStudentRequest = z.infer<typeof getStudentSchema>;

export async function getStudentSummary(request: GetStudentRequest) {
  const validated = getStudentSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  try {
    const studentSummary = mysqlPrisma.$transaction(async (trx) => {
      const studentDefaultInfo = await trx.student.findFirst({
        where: {
          studentId: validated.data.studentId,
          studentStatus: true,
        },

        select: {
          studentClass: true,
          studentName: true,
          studentGrade: true,
          school: {
            select: {
              schoolId: true,
            },
          },
        },
      });

      if (studentDefaultInfo == null) {
        throw {
          code: "FAIL",
          message: "학생 기본 정보를 찾을 수 없습니다.",
        };
      }

      // KST 기준 오늘
      const today = dayjs();

      // 이번 주 월요일 00:00
      const startOfWeek = today.weekday(1).startOf("day");

      // 이번 주 금요일 23:59:59
      const endOfWeek = today.weekday(5).endOf("day");

      // console.log("startOfWeek:", startOfWeek.format()); // 예: 2025-07-28T00:00:00+09:00
      console.log("일주일전:", today.subtract(7, "day").format()); // 예: 2025-08-01T23:59:59+09:00

      const unCheckedSevenDaysAgo = await trx.brushed.findMany({
        where: {
          studentId: validated.data.studentId,
          brushedAt: {
            gte: today.subtract(7, "day").startOf("day").toDate(),
            lte: today.endOf("day").toDate(),
          },
          brushedStatus: { not: "Ok" },
        },
      });

      console.log("unCheckedSevenDaysAgo", unCheckedSevenDaysAgo);

      const totalClassCount = await trx.student.count({
        where: {
          studentClass: studentDefaultInfo.studentClass,
        },
      });

      const totalGradeCount = await trx.student.count({
        where: {
          studentGrade: studentDefaultInfo.studentGrade,
        },
      });

      const totalSchoolCount = await trx.student.count({
        where: {
          schoolId: studentDefaultInfo.school.schoolId,
        },
      });
    });
  } catch (error) {}

  const student = await mysqlPrisma.student.findFirst({
    where: {
      studentId: validated.data.studentId,
    },
  });

  if (student == null) {
    return {
      code: "NOT_FOUND",
      message: "존재하지 않는 학생입니다.",
    };
  }

  return {
    code: "SUCCESS",
    data: {},
  };
}
