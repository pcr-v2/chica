"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { addSchoolSchema } from "@/app/actions/school/schoolSchema";
import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export type AddSchoolRequest = z.infer<typeof addSchoolSchema>;

export async function addSchool(request: AddSchoolRequest): Promise<{
  code: "SUCCESS" | "VALIDATION_ERROR" | "INVALID_CREDENTIAL";
  message: string;
}> {
  const validated = addSchoolSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR",
      message: validated.error.issues[0].message,
    };
  }

  const {
    schoolName,
    loginId,
    loginPw,
    teacherName,
    teacherEmail,
    teacherPhone,
    schoolLevel,
    schoolCode,
    officeCode,
    address,
    endAt,
    schoolAnniversary,
    schoolStatus,
  } = validated.data;

  const hashedPw = await bcrypt.hash(loginPw, 12);

  try {
    const result = await mysqlPrisma.$transaction(async (trx) => {
      const addedSchool = await trx.school.create({
        data: {
          schoolId: uuidv4(),
          schoolName,
          loginId,
          loginPw: hashedPw,
          teacherEmail,
          teacherName,
          teacherPhone: teacherPhone.replaceAll("-", ""),
          schoolCode,
          officeCode,
          address,
          schoolLevel,
          endAt: customDayjs(endAt).toISOString(),
          startAt: new Date(),
          schoolStatus,
        },
      });

      if (!addedSchool) {
        throw new Error("학교 생성 실패");
      }

      const addedSchedule = await trx.schedules.create({
        data: {
          schoolId: addedSchool.schoolId,
          scheduleName: "개교기념일",
          scheduleStatus: true,
          scheduleTarget: "all",
          scheduleAt: customDayjs(schoolAnniversary).toDate(),
        },
      });

      if (!addedSchedule) {
        throw new Error("스케줄 생성 실패");
      }

      return {
        code: "SUCCESS" as const,
        message: "학교생성이 완료되었습니다.",
      };
    });

    revalidatePath("/school/list");

    return result;
  } catch (e) {
    console.error(e);
    return {
      code: "INVALID_CREDENTIAL",
      message:
        e instanceof Error
          ? e.message
          : "학교 생성 중 알 수 없는 오류가 발생했습니다.",
    };
  }
}
