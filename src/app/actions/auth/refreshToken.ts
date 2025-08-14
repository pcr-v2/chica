"use server";

import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function refreshToken() {
  const cookieStore = await cookies();

  const refreshToken = cookieStore.get("CHICA_USER_REFRESH_TOKEN")?.value;

  if (!refreshToken) {
    throw new Error("리프레시 토큰 없음");
  }

  try {
    const { payload } = await jwtVerify(refreshToken, secretKey);
    const { id, type } = payload;

    const newAccessToken = await new SignJWT({ id, type })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("100000d") // 액세스 토큰 1일 유효
      .sign(secretKey);

    const newRefreshToken = await new SignJWT({ id, type })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("100000d") // 리프레시 토큰 400일 유효
      .sign(secretKey);

    // 쿠키 재설정
    cookieStore.set("CHICA_USER_ACCESS_TOKEN", newAccessToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 399, // 7일
      path: "/",
    });
    cookieStore.set("CHICA_USER_REFRESH_TOKEN", newRefreshToken, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * 399, // 400일
      path: "/",
    });

    return;
  } catch (error) {
    throw new Error("유효하지 않은 리프레시 토큰");
  }
}
