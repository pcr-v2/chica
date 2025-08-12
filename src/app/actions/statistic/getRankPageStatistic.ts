"use server";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import z from "zod";

import { getRankPageStatisticSchema } from "@/app/actions/statistic/statisticSchema";
import { mysqlPrisma } from "@/libs/prisma";

dayjs.extend(utc);
dayjs.extend(weekday);

export type GetRankPageStatisticRequest = z.infer<
  typeof getRankPageStatisticSchema
>;

export type GetRankPageStatistic = Awaited<
  ReturnType<typeof getRankPageStatistic>
>;

export async function getRankPageStatistic(
  request: GetRankPageStatisticRequest,
) {
  // 1. 요청 검증
  const validated = getRankPageStatisticSchema.safeParse(request);
  if (!validated.success) {
    return {
      code: "VALIDATION_ERROR" as const,
      message: validated.error.issues[0].message,
    };
  }

  const { schoolId, type } = validated.data;

  const today = dayjs.utc().startOf("day");

  // schoolId 조건 포함한 첫 출석일 구하는 함수 (raw 쿼리)
  async function getFirstWorkingDay(startDate: dayjs.Dayjs) {
    const res = await mysqlPrisma.$queryRawUnsafe<{ brushedAt: Date }[]>(
      `
      SELECT b.brushed_at AS brushedAt
      FROM Brushed b
      JOIN Student s ON b.student_id = s.student_id
      WHERE s.school_id = ?
        AND b.brushed_status IN ('Ok', 'No')
        AND b.brushed_at BETWEEN ? AND ?
      ORDER BY b.brushed_at ASC
      LIMIT 1
    `,
      schoolId,
      startDate.toDate(),
      today.endOf("day").toDate(),
    );
    if (res.length === 0) return startDate;
    return dayjs.utc(res[0].brushedAt).startOf("day");
  }

  let periodStart: dayjs.Dayjs;
  if (type === "month") {
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

  // 1. 학생별 양치율 상위 30명 (학교 전체)
  const studentRankArrayRaw = await mysqlPrisma.$queryRawUnsafe<
    {
      student_id: string;
      student_name: string;
      student_grade: number;
      student_class: string;
      percentage: number;
      student_rank: number;
    }[]
  >(
    `
  WITH StudentStats AS (
    SELECT 
      s.student_id,
      s.student_name,
      s.student_grade,
      s.student_class,
      ROUND(
        IF(
          COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 END) = 0,
          0,
          SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) / COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 END) * 100
        ),
        1
      ) AS percentage
    FROM Student s
    LEFT JOIN Brushed b ON s.student_id = b.student_id
      AND b.brushed_at BETWEEN ? AND ?
    WHERE s.school_id = ?
    GROUP BY s.student_id, s.student_name, s.student_grade, s.student_class
  ),
  RankedStudents AS (
    SELECT
      student_id,
      student_name,
      student_grade,
      student_class,
      percentage,
      ROW_NUMBER() OVER (ORDER BY percentage DESC) AS student_rank
    FROM StudentStats
  )
  SELECT *
  FROM RankedStudents
  WHERE student_rank <= 30
  ORDER BY student_rank, student_name
`,
    gteDate,
    lteDate,
    schoolId,
  );

  const studentRankArray = studentRankArrayRaw.map((item) => ({
    ...item,
    percentage: Number(item.percentage),
  }));

  // 2. 학교 모든 반 양치율 순위 리스트
  const classRankArrayRaw = await mysqlPrisma.$queryRawUnsafe<
    {
      student_grade: number;
      student_class: string;
      percentage: number;
    }[]
  >(
    `
    WITH SchoolLevel AS (
    SELECT school_level
    FROM School
    WHERE school_id = ?
    ),
    GradeRange AS (
    SELECT
        CASE
        WHEN school_level = 'elementary' THEN '1,2,3,4,5,6'
        WHEN school_level IN ('middle', 'high') THEN '1,2,3'
        ELSE ''
        END AS grades
    FROM SchoolLevel
    ),
    ClassStats AS (
    SELECT
        s.student_grade,
        s.student_class,
        ROUND(
        IF(
            COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 END) = 0,
            0,
            SUM(CASE WHEN b.brushed_status = 'Ok' THEN 1 ELSE 0 END) / COUNT(CASE WHEN b.brushed_status IN ('Ok', 'No') THEN 1 END) * 100
        ),
        1
        ) AS percentage
    FROM Student s
    JOIN Brushed b ON s.student_id = b.student_id
        AND b.brushed_at BETWEEN ? AND ?
    WHERE s.school_id = ?
        AND FIND_IN_SET(s.student_grade, (SELECT grades FROM GradeRange)) > 0
    GROUP BY s.student_grade, s.student_class
    )
    SELECT student_grade, student_class, percentage
    FROM ClassStats
    ORDER BY percentage DESC, student_grade, student_class;
  `,
    schoolId,
    gteDate,
    lteDate,
    schoolId,
  );

  const classRankArray = classRankArrayRaw.map(
    ({ student_grade, student_class, percentage }) => ({
      student_grade,
      student_class,
      percentage: Number(percentage),
    }),
  );

  return {
    code: "SUCCESS" as const,
    data: {
      type,
      start: periodStart.format("YYYY-MM-DD"),
      end: today.format("YYYY-MM-DD"),

      studentRankArray,
      classRankArray,
    },
  };
}
