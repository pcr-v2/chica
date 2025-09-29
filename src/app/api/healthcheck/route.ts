import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ status: "ok" });

  response.headers.set("Access-Control-Allow-Origin", "*"); // 모든 도메인 허용
  response.headers.set("Access-Control-Allow-Methods", "GET");
  response.headers.set("Access-Control-Allow-Headers", "*");

  return response;
}
