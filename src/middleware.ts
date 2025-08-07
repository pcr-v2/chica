import { SignJWT, jwtVerify } from "jose";
import { JWTExpired } from "jose/errors";
import { NextRequest, NextResponse } from "next/server";

const secretKey = new TextEncoder().encode(process.env.TOKEN_SECRET);

const PUBLIC_PATHS = ["/signin"];
const MASTER_PATHS = ["/school", "/member", "/master-cs", "/master-video"];

async function refresh(req: NextRequest) {
  const refreshToken = req.cookies.get("CHICA_USER_REFRESH_TOKEN");

  if (refreshToken?.value == null) {
    return NextResponse.redirect(
      process.env.NEXT_PUBLIC_DOMAIN_URL! + "/signin",
    );
  }

  try {
    const verified = await jwtVerify(refreshToken.value, secretKey);
    const { id, type } = verified.payload;
    // 리프레시 토큰
    const newAccessToken = await new SignJWT({ id, type })
      .setSubject(verified.payload.sub!)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("100000d")
      .sign(secretKey);

    const newRefreshToken = await new SignJWT({ id, type })
      .setSubject(verified.payload.sub!)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("100000d")
      .sign(secretKey);

    // Request rewrite
    req.cookies.set("CHICA_USER_ACCESS_TOKEN", newAccessToken);
    req.cookies.set("CHICA_USER_REFRESH_TOKEN", newRefreshToken);

    // Response rewrite
    const res = NextResponse.next({
      request: req,
    });

    res.cookies.set("CHICA_USER_ACCESS_TOKEN", newAccessToken, {
      maxAge: 99999999999,
    });
    res.cookies.set("CHICA_USER_REFRESH_TOKEN", newRefreshToken, {
      maxAge: 99999999999,
    });
    return res;
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(
      process.env.NEXT_PUBLIC_DOMAIN_URL! + "/signin",
    );
  }
}

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const accessToken = req.cookies.get("CHICA_USER_ACCESS_TOKEN");
  const refreshToken = req.cookies.get("CHICA_USER_REFRESH_TOKEN");

  // ✅ 이미 로그인된 유저는 /signin 접근 차단
  if (pathname.startsWith("/signin") && accessToken) {
    return NextResponse.redirect(new URL("/", req.url)); // 홈으로 보내거나 다른 적절한 경로
  }

  if (pathname === "/alive") return NextResponse.next();

  // 공개 경로는 그냥 통과
  if (PUBLIC_PATHS.some((path) => pathname.startsWith(path))) {
    return NextResponse.next();
  }

  if (!accessToken) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  try {
    // const { payload } = await jwtVerify(accessToken.value, secretKey);

    return NextResponse.next();
  } catch (error) {
    console.log(error);

    if (error instanceof JWTExpired && refreshToken != null) {
      return refresh(req);
    }

    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

export const config = {
  matcher: [
    "/((?!api/|_next/static|_next/image|favicon.ico|site.webmanifest|favicon/).*)",
  ],
};
