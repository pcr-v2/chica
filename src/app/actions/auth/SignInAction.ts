"use server";

import bcrypt from "bcryptjs";
import { createSecretKey } from "crypto";
import { SignJWT } from "jose";
import { cookies } from "next/headers";
import { z } from "zod";

import { signInSchema } from "@/app/actions/auth/SignInSchema";
import { mysqlPrisma } from "@/libs/prisma";

const secretKey = createSecretKey(process.env.TOKEN_SECRET!, "utf-8");

export type SignInRequest = z.infer<typeof signInSchema>;

export async function signIn(request: SignInRequest) {
  const validated = signInSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const admin = await mysqlPrisma.school.findFirst({
    where: {
      loginId: validated.data.id,
    },
  });

  if (!admin) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "아이디/비밀번호를 확인해 주세요.",
    };
  }

  const valid = await bcrypt.compare(validated.data.pw, admin.loginPw.trim());

  if (!valid) {
    return {
      code: "INVALID_CREDENTIAL" as const,
      message: "아이디/비밀번호를 확인해 주세요.",
    };
  }

  const accessToken = await new SignJWT({
    id: validated.data.id,
    type: admin.schoolType,
  })
    .setSubject(validated.data.id)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("100000d")
    .sign(secretKey);

  const refreshToken = await new SignJWT({
    id: validated.data.id,
    type: admin.schoolType,
  })
    .setSubject(validated.data.id)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("100000d")
    .sign(secretKey);

  const cookieStore = await cookies();

  cookieStore.set("CHICA_USER_ACCESS_TOKEN", accessToken);
  cookieStore.set("CHICA_USER_REFRESH_TOKEN", refreshToken);

  return {
    code: "SUCCESS" as const,
    message: "로그인 되었습니다.",
    type: admin.schoolType,
  };
}
