import { z } from "zod";

export const signInSchema = z.object({
  id: z.string({ required_error: "아이디를 입력해 주세요." }),
  pw: z.string({ required_error: "비밀번호를 입력해 주세요." }),
});
