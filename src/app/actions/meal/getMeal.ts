import { GetSchoolResponse } from "@/app/actions/school/getSchoolAction";

// lib/testMealFetch.ts
export const getMeal = async (request: GetSchoolResponse["result"]) => {
  const key = process.env.NEIS_API_KEY; // .env.local에 저장된 인증키
  const baseUrl = "https://open.neis.go.kr/hub/mealServiceDietInfo";

  const params = new URLSearchParams({
    KEY: key ?? "",
    Type: "json",
    ATPT_OFCDC_SC_CODE: request?.officeCode as string, // 경기도교육청 예시
    SD_SCHUL_CODE: request?.schoolCode as string, // 학교 코드
    MLSV_FROM_YMD: "20250701", // 시작일
    MLSV_TO_YMD: "20250701", // 종료일
    MMEAL_SC_CODE: "2", // 중식
  });

  const res = await fetch(`${baseUrl}?${params.toString()}`);
  const data = await res.json();
  return data.mealServiceDietInfo?.[1].row?.[0].DDISH_NM;
};
