import z from "zod";

export const getContentsListSchema = z.object({
  schoolId: z.string({ required_error: "학교 아이디가 없습니다." }),
});
