"use server";

import { v4 as uuidv4 } from "uuid";
import { z } from "zod";

import { addStudentSchema } from "@/app/actions/student/studentSchema";
import { mysqlPrisma } from "@/libs/prisma";

export type AddStudentRequest = z.infer<typeof addStudentSchema>;

export async function addStudent(request: AddStudentRequest) {
  const validated = addStudentSchema.safeParse(request);

  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId, students } = validated.data;

  if (schoolId == null) {
    return {
      code: "FAIL" as const,
      message: "학교 아이디가 존재하지 않습니다.",
    };
  }

  try {
    mysqlPrisma.$transaction(async (trx) => {
      await trx.student.createMany({
        data: students.map((student) => ({
          schoolId: schoolId,
          studentId: uuidv4(),
          studentName: student.studentName,
          studentGrade: student.studentGrade,
          studentClass: student.studentClass,
          studentGender: student.studentGender,
          studentNumber: student.studentNumber,
          studentStatus: student.studentStatus,
        })),
      });
    });

    return {
      code: "SUCCESS" as const,
      message: "학생이 등록되었습니다.",
    };
  } catch (error) {
    return {
      code: "STUDENT_REGIST_ERROR" as const,
      message: "학생 등록 중 오류가 발생했습니다.",
    };
  }
}
