import { z } from "zod";

export const writeCsSchema = z.object({
  schoolId: z.string({ required_error: "학교 아이디가 없습니다." }),
  title: z.string({ required_error: "문의글 제목을 입력해주세요." }),
  content: z.string({ required_error: "문의글 내용을 입력해주세요." }),
});

export const writeCommentSchema = z.object({
  boardId: z.number({ required_error: "게시글 id가 없습니다." }),
  schoolId: z.string({ required_error: "학교 id가 없습니다." }),
  comment: z.string({ required_error: "답변을 입력해주세요." }),
});

export const getCsListSchema = z.object({
  type: z.enum(["master", "teacher"]),
  schoolId: z.string({ required_error: "학교 id가 없습니다." }),
});
