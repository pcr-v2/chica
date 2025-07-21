import { z } from "zod";

export const getSchoolSchema = z.object({
  schoolId: z.string({ required_error: "학교 아이디가 없습니다." }),
});

export const addSchoolSchema = z.object({
  schoolName: z.string({ required_error: "학교 이름을 입력해 주세요." }),
  loginId: z.string({ required_error: "아이디를 입력해 주세요." }),
  loginPw: z.string({ required_error: "비밀번호를 입력해 주세요." }),
  teacherName: z.string({ required_error: "매니저 이름을 입력해 주세요." }),
  teacherEmail: z.string({ required_error: "매니저 이메일을 입력해 주세요." }),
  teacherPhone: z.string({
    required_error: "매니저 전화번호를 입력해 주세요.",
  }),
  endAt: z.string({ required_error: "종료일을 입력해 주세요." }),
  schoolStatus: z.boolean({ required_error: "학교상태를 입력해 주세요." }),
  schoolLevel: z.enum(["elementary", "middle", "high"], {
    required_error: "학교 레벨을 선택해주세요.",
  }),
  schoolCode: z.string({ required_error: "학교 코드를 입력해주세요." }),
  officeCode: z.string({ required_error: "교육청 코드를 입력해주세요." }),
  schoolAnniversary: z.string({ required_error: "개교기념이을 입력해주세요" }),
  address: z.string({ required_error: "학교 주소를 입력해주세요." }),
});
