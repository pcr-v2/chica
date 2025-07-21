"use server";

import { jwtVerify } from "jose";
import { cookies } from "next/headers";

import { mysqlPrisma } from "@/libs/prisma";

const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET);

export type GetMeResponse = Awaited<ReturnType<typeof getMe>>;

export async function getMe() {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("CHICA_ADMIN_ACCESS_TOKEN")?.value;

  if (accessToken == null) {
    return {
      code: "UNAUTHORIZED",
      message: "인증이 필요합니다.",
    };
  }

  const verified = await jwtVerify(accessToken, secretKey);

  const admin = await mysqlPrisma.school.findFirst({
    where: {
      loginId: verified.payload.id!,
    },
  });

  if (admin == null) {
    return {
      code: "NOT_FOUND",
      message: "존재하지 않는 유저입니다.",
    };
  }

  return {
    code: "SUCCESS",
    data: {
      type: admin.schoolType,
      loginId: admin.loginId,
      schoolId: admin.schoolId,
      schoolLevel: admin.schoolLevel,
      name: admin.teacherName,
    },
  };
}
