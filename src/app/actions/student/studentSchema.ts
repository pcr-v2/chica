import z from "zod";

export const getStudentInfoSchema = z.object({
  studentId: z.string({ required_error: "학생 아이디가 없습니다." }),
});

export const getStudentLatestSummarySchema = z.object({
  schoolId: z.string({ required_error: "학교 아이디가 없습니다." }),
  studentGrade: z.number({ required_error: "학생 학년이 없습니다." }),
  studentClass: z.string({ required_error: "학생 반이 없습니다." }),
  studentNumber: z.number({ required_error: "학생 번호가 없습니다." }),
});
