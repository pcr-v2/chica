"use server";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import z from "zod";

import { getStatisticSchema } from "@/app/actions/statistic/statisticSchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(utc);
dayjs.extend(weekday);

export type GetDetailedStatisticRequest = z.infer<typeof getStatisticSchema>;

export type GetStatisticResponse = Awaited<ReturnType<typeof getStatistic>>;

export async function getStatistic(request: GetDetailedStatisticRequest) {
  // 1. 요청 검증
  const validated = getStatisticSchema.safeParse(request);
  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { studentId, type } = validated.data;

  // 2. 날짜 범위 계산
  const today = dayjs.utc().startOf("day");

  async function getFirstWorkingDay(startDate: dayjs.Dayjs) {
    const firstDay = await mysqlPrisma.brushed.findFirst({
      where: {
        studentId,
        brushedStatus: { in: ["Ok", "No"] },
        brushedAt: {
          gte: startDate.toDate(),
          lte: today.endOf("day").toDate(),
        },
      },
      orderBy: { brushedAt: "asc" },
      select: { brushedAt: true },
    });
    return firstDay ? dayjs.utc(firstDay.brushedAt).startOf("day") : startDate;
  }

  let periodStart: dayjs.Dayjs;
  if (type === "week") {
    periodStart = today.weekday(1);
  } else if (type === "month") {
    const firstDayOfMonth = today.startOf("month");
    periodStart = await getFirstWorkingDay(firstDayOfMonth);
  } else if (type === "term") {
    const month = today.month() + 1;
    let termStart: dayjs.Dayjs;
    if (month >= 1 && month <= 7) {
      termStart = dayjs.utc(new Date(today.year(), 0, 1));
    } else {
      termStart = dayjs.utc(
        new Date(month >= 8 ? today.year() : today.year() - 1, 7, 1),
      );
    }
    periodStart = await getFirstWorkingDay(termStart);
  } else {
    return {
      code: "INVALID_TYPE" as const,
      message: `지원하지 않는 통계 타입입니다: ${type}`,
    };
  }

  const gteDate = periodStart.toDate();
  const lteDate = today.endOf("day").toDate();

  // 3. 학생 정보 (학년, 반, 학교) 조회
  const studentInfo = await mysqlPrisma.student.findUnique({
    where: { studentId },
    select: {
      schoolId: true,
      studentGrade: true,
      studentClass: true,
    },
  });

  if (!studentInfo) {
    return {
      code: "NOT_FOUND" as const,
      message: "해당 학생 정보를 찾을 수 없습니다.",
    };
  }

  const { schoolId, studentGrade, studentClass } = studentInfo;

  // 4. 개인별 양치율 + 랭킹 조회
  const rawResultRank = await mysqlPrisma.$queryRawUnsafe<
    {
      percentage: number;
      class_rank: bigint;
      grade_rank: bigint;
      school_rank: bigint;
    }[]
  >(
    `
  WITH StudentStats AS (
    SELECT 
      s.student_id,
      s.school_id,
      s.student_grade,
      s.student_class,
      SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) AS numerator,
      COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) AS denominator,
      CASE 
        WHEN COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) = 0 THEN 0
        ELSE ROUND(SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) / COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) * 100, 1)
      END AS percentage
    FROM Student s
    LEFT JOIN Brushed b ON s.student_id = b.student_id
      AND b.brushed_at BETWEEN ? AND ?
    GROUP BY s.student_id, s.school_id, s.student_grade, s.student_class
  ),

  RankedStats AS (
    SELECT
      student_id,
      percentage,
      RANK() OVER (PARTITION BY school_id, student_grade, student_class ORDER BY percentage DESC) AS class_rank,
      RANK() OVER (PARTITION BY school_id, student_grade ORDER BY percentage DESC) AS grade_rank,
      RANK() OVER (PARTITION BY school_id ORDER BY percentage DESC) AS school_rank
    FROM StudentStats
  )

  SELECT
    ss.percentage,
    rs.class_rank,
    rs.grade_rank,
    rs.school_rank
  FROM RankedStats rs
  JOIN StudentStats ss ON rs.student_id = ss.student_id
  WHERE rs.student_id = ?;
  `,
    gteDate,
    lteDate,
    studentId,
  );

  if (!rawResultRank.length) {
    return {
      code: "NOT_FOUND" as const,
      message: "학생 통계 데이터를 찾을 수 없습니다.",
    };
  }

  const result = rawResultRank[0];
  const percentage = Number(result.percentage ?? 0);
  const personalClassRank = Number(result.class_rank ?? 0);
  const personalGradeRank = Number(result.grade_rank ?? 0);
  const personalSchoolRank = Number(result.school_rank ?? 0);

  // 5. 반별 양치율 + 랭킹 조회
  const rawClassRank = await mysqlPrisma.$queryRawUnsafe<
    {
      class_percentage: number;
      grade_rank: bigint;
      school_rank: bigint;
    }[]
  >(
    `
  WITH SchoolInfo AS (
    SELECT school_id, school_level
    FROM School
    WHERE school_id = ?
  ),
  ClassStats AS (
    SELECT
      s.student_grade,
      s.student_class,
      si.school_level,
      SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) AS numerator,
      COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) AS denominator,
      CASE 
        WHEN COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) = 0 THEN 0
        ELSE ROUND(SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) / COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) * 100, 1)
      END AS percentage
    FROM Student s
    JOIN SchoolInfo si ON s.school_id = si.school_id
    LEFT JOIN Brushed b ON s.student_id = b.student_id
      AND b.brushed_at BETWEEN ? AND ?
    GROUP BY s.student_grade, s.student_class, si.school_level
  ),
  FilteredClasses AS (
    SELECT
      student_grade,
      student_class,
      percentage
    FROM ClassStats
    WHERE
      (
        (school_level = 'elementary' AND student_grade BETWEEN 1 AND 6)
        OR
        (school_level != 'elementary' AND student_grade BETWEEN 1 AND 3)
      )
  ),
  TargetClass AS (
    SELECT
      student_grade,
      student_class,
      percentage
    FROM FilteredClasses
    WHERE student_grade = ?
      AND student_class = ?
  ),
  GradeRank AS (
    SELECT
      student_grade,
      student_class,
      percentage,
      RANK() OVER (PARTITION BY student_grade ORDER BY percentage DESC) AS grade_rank
    FROM FilteredClasses
  ),
  SchoolRank AS (
    SELECT
      student_grade,
      student_class,
      percentage,
      RANK() OVER (ORDER BY percentage DESC) AS school_rank
    FROM FilteredClasses
  )
  SELECT
    tc.percentage AS class_percentage,
    gr.grade_rank,
    sr.school_rank
  FROM TargetClass tc
  JOIN GradeRank gr ON tc.student_grade = gr.student_grade AND tc.student_class = gr.student_class
  JOIN SchoolRank sr ON tc.student_grade = sr.student_grade AND tc.student_class = sr.student_class;
  `,
    schoolId,
    gteDate,
    lteDate,
    studentGrade,
    studentClass,
  );

  if (!rawClassRank.length) {
    return {
      code: "NOT_FOUND" as const,
      message: "반 랭킹 데이터를 찾을 수 없습니다.",
    };
  }

  const classResult = rawClassRank[0];

  // 5-1. 내가 속한 학년 모든 반의 양치율 배열 조회
  const rawGradeClassPercentages = await mysqlPrisma.$queryRawUnsafe<
    {
      student_class: string;
      percentage: number;
    }[]
  >(
    `
  WITH SchoolInfo AS (
    SELECT school_id, school_level
    FROM School
    WHERE school_id = ?
  ),
  ClassStats AS (
    SELECT
      s.student_grade,
      s.student_class,
      si.school_level,
      SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) AS numerator,
      COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) AS denominator,
      CASE 
        WHEN COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) = 0 THEN 0
        ELSE ROUND(SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) / COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 ELSE NULL END) * 100, 1)
      END AS percentage
    FROM Student s
    JOIN SchoolInfo si ON s.school_id = si.school_id
    LEFT JOIN Brushed b ON s.student_id = b.student_id
      AND b.brushed_at BETWEEN ? AND ?
    WHERE s.student_grade = ?
    GROUP BY s.student_grade, s.student_class, si.school_level
  ),
  FilteredClasses AS (
    SELECT
      student_class,
      percentage
    FROM ClassStats
    WHERE
      (
        (school_level = 'elementary' AND student_grade BETWEEN 1 AND 6)
        OR
        (school_level != 'elementary' AND student_grade BETWEEN 1 AND 3)
      )
  )
  SELECT student_class, percentage FROM FilteredClasses ORDER BY student_class;
    `,
    schoolId,
    gteDate,
    lteDate,
    studentGrade,
  );

  const gradeClassPercentages = rawGradeClassPercentages.map((item) =>
    Number(item.percentage ?? 0),
  );

  // 우리반의 인원이 몇명인지
  const classPeopleCount = await mysqlPrisma.student.count({
    where: {
      schoolId,
      studentGrade,
      studentClass,
    },
  });

  // 우리학년의 인원이 몇명인지
  const gradePeopleCount = await mysqlPrisma.student.count({
    where: {
      schoolId,
      studentGrade,
    },
  });

  // 우리학교의 인원이 몇명인지
  const schoolPeopleCount = await mysqlPrisma.student.count({
    where: {
      schoolId,
    },
  });

  // 우리학년에서 반이 총 몇반인지
  const countClassInGrade = await mysqlPrisma.student
    .groupBy({
      by: ["studentClass"],
      where: {
        schoolId,
        studentGrade,
      },
      _count: true,
    })
    .then((res) => res.length);

  // 우리학교에서 반이 총 몇반인지
  const countClassInSchool = await mysqlPrisma.student
    .groupBy({
      by: ["studentGrade", "studentClass"],
      where: {
        schoolId,
      },
      _count: true,
    })
    .then((res) => res.length);

  // 6. 결과 반환 - 여기에 배열 포함
  return {
    code: "SUCCESS" as const,
    data: {
      type,
      start: periodStart.format("YYYY-MM-DD"),
      end: today.format("YYYY-MM-DD"),

      // 개인
      myRate: Number(percentage ?? 0),
      myRankInClass: Number(personalClassRank ?? 0),
      myRankInGrade: Number(personalGradeRank ?? 0),
      myRankInSchool: Number(personalSchoolRank ?? 0),

      // 반별 (특정 반)
      classRate: Number(classResult.class_percentage ?? 0),
      classRankInGrade: Number(classResult.grade_rank ?? 0),
      classRankInSchool: Number(classResult.school_rank ?? 0),

      // 내가 속한 학년의 모든 반 양치율 배열
      allClassRateArray: gradeClassPercentages ?? [],

      // 인원 및 반 수 통계
      classPeopleCount: Number(classPeopleCount ?? 0),
      gradePeopleCount: Number(gradePeopleCount ?? 0),
      schoolPeopleCount: Number(schoolPeopleCount ?? 0),
      countClassInGrade: Number(countClassInGrade ?? 0),
      countClassInSchool: Number(countClassInSchool ?? 0),
    },
  };
}
