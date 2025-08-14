"use server";

import z from "zod";

import { getMealSchema } from "@/app/actions/meal/mealSchema";
import { mysqlPrisma } from "@/libs/prisma";
import customDayjs from "@/utils/customDayjs";

export type GetMealRequest = z.infer<typeof getMealSchema>;

export interface Meal {
  name: string;
  allergyNum: number[];
}

export const getMeal = async (request: GetMealRequest) => {
  const validated = getMealSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const result = await mysqlPrisma.school.findFirst({
    where: {
      schoolId: validated.data.schoolId,
      schoolStatus: { not: false },
      startAt: { lte: customDayjs().toISOString() },
      endAt: { gte: customDayjs().toISOString() },
    },
  });

  if (result == null) {
    return {
      code: "FAIL" as const,
      message: "학교를 찾을 수 없습니다.",
    };
  }

  const key = process.env.NEXT_PUBLIC_NEIS_API_KEY; // .env.local에 저장된 인증키
  const baseUrl = "https://open.neis.go.kr/hub/mealServiceDietInfo";

  const params = new URLSearchParams({
    KEY: key ?? "",
    Type: "json",
    ATPT_OFCDC_SC_CODE: result?.officeCode, // 경기도교육청 예시
    SD_SCHUL_CODE: result?.schoolCode, // 학교 코드
    MLSV_FROM_YMD: customDayjs().format("YYYYMMDD"), // 시작일
    MLSV_TO_YMD: customDayjs().format("YYYYMMDD"), // 종료일
    MMEAL_SC_CODE: "2", // 중식
  });

  const testParams = new URLSearchParams({
    KEY: key ?? "",
    Type: "json",
    ATPT_OFCDC_SC_CODE: "J10", // 경기도교육청 예시
    SD_SCHUL_CODE: "7781173", // 학교 코드
    MLSV_FROM_YMD: customDayjs("2025-08-14").format("YYYYMMDD"), // 시작일
    MLSV_TO_YMD: customDayjs("2025-08-14").format("YYYYMMDD"), // 종료일
    MMEAL_SC_CODE: "2", // 중식
  });

  // console.log("params", params);

  const res = await fetch(`${baseUrl}?${testParams.toString()}`);
  const data = await res.json();

  // console.log("오늘", customDayjs().add(1, "day").format("YYYYMMDD"));
  // console.log("오늘", customDayjs().add(1, "days").format("YYYYMMDD"));
  // console.log("data", data);

  if (data.mealServiceDietInfo?.[1].row?.[0] == null) {
    return {
      code: "FAIL" as const,
      message: "오늘은 급식이 없는날 입니다.",
    };
  }
  // if (data.RESULT.CODE === "") {

  // }

  function parseDDISH_NM(ddish: string): Meal[] {
    // <br/> 태그를 기준으로 각 메뉴 항목 분리
    const lines = ddish
      .split(/<br\s*\/?>/)
      .map((line) => line.trim())
      .filter((line) => line !== "");

    const dishes: Meal[] = [];

    // 각 항목에 대해 메뉴명과 알레르기 번호 추출
    lines.forEach((line) => {
      // 예: "감자수제비 (5.6.18)" -> 메뉴명 "감자수제비", 알레르기 번호 "5.6.18"
      const regex = /(.*?)\s*\(([\d\.]+)\)/;
      const match = line.match(regex);

      if (match) {
        const name = match[1].trim();
        const allergyNumStr = match[2];
        // '.'을 기준으로 나누고 숫자로 변환
        const allergyNum = allergyNumStr
          .split(".")
          .map((numStr) => parseInt(numStr, 10))
          .filter((num) => !isNaN(num));

        dishes.push({ name, allergyNum });
      } else {
        // 알레르기 번호가 없는 경우 그대로 메뉴명만 저장
        dishes.push({ name: line, allergyNum: [] });
      }
    });

    return dishes;
  }

  return {
    code: "SUCCESS" as const,
    message: "급식정보를 가져왔습니다.",
    result: parseDDISH_NM(data.mealServiceDietInfo?.[1].row?.[0].DDISH_NM),
  };
};
