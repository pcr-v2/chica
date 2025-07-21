"use server";

// getSchoolCode.ts
export type SchoolCodeOption = {
  code: string;
  officeCode: string;
  schoolAnniversary: string;
  name: string;
};

export const getSchoolCode = async (schoolName: string) => {
  if (!schoolName) return [];

  const key = process.env.NEIS_API_KEY;
  const encodedName = encodeURIComponent(schoolName);

  const url = `https://open.neis.go.kr/hub/schoolInfo?KEY=${key}&Type=json&SCHUL_NM=${encodedName}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("학교 정보 요청 실패");

  const data = await res.json();
  const rows = data.schoolInfo?.[1]?.row ?? [];
  // console.log("rows", rows);
  return rows.map((school: any) => ({
    code: school.SD_SCHUL_CODE,
    officeCode: school.ATPT_OFCDC_SC_CODE,
    schoolAnniversary: school.FOAS_MEMRD,
    name: `${school.SCHUL_NM}(${school.ORG_RDNMA})`,
  }));
};
