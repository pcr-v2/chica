import z from "zod";

export const getUnCheckedSchema = z.object({
  studentId: z.string({ required_error: "학생 아이디가 없습니다." }),
});
