import z from "zod";

export const getStudentSchema = z.object({
  studentId: z.string({ required_error: "학생 아이디가 없습니다." }),
});
