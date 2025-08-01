import z from "zod";

export const getUnCheckedSchema = z.object({
  studentId: z.string({ required_error: "학생 아이디가 없습니다." }),
});

export const updateUnCheckedSchema = z.object({
  studentId: z.string({ required_error: "학생 아이디가 없습니다." }),
  updateData: z.array(
    z.object({
      id: z.number({ required_error: "브러시 아이디가 없습니다." }),
      newStatus: z.enum([
        "No",
        "Ok",
        "EarlyLeave",
        "Travel",
        "Workshop",
        "Absence",
      ]),
    }),
  ),
});
