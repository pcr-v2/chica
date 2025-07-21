import { z } from "zod";

export const csvStudentsBlukRegistSchema = z.array(
  z.object({
    studentName: z.string(),
    studentGrade: z.string(),
    studentClass: z.string(),
    studentNumber: z.string(),
    studentGender: z.string(),
  }),
);

export const addStudentSchema = z.object({
  schoolId: z.string(),
  students: z.array(
    z.object({
      studentName: z.string(),
      studentGrade: z.number(),
      studentClass: z.string(),
      studentNumber: z.number(),
      studentGender: z.enum(["male", "female"]),
      studentStatus: z.boolean(),
    }),
  ),
});

export const getStudentListSchema = z.object({
  schoolType: z.enum(["master", "teacher"], {
    required_error: "학교 타입이 없습니다.",
  }),
  schoolId: z.string({ required_error: "학교 아이디가 없습니다." }),
});
