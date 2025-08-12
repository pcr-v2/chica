"use client";

import { Box, styled } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import RankSpan from "@/app/(main)/rank/RankSpan";
import LoadingAnimation from "@/app/_components/common/Loading";
import TitleBadge from "@/app/_components/common/TitleBadge";
import RankHeader from "@/app/_components/layout/Headers/RankHeader";
import { GetMeResponse } from "@/app/actions/auth/getMe";
import { getRankPageStatistic } from "@/app/actions/statistic/getRankPageStatistic";
import Rank1_Pattern from "@/assets/pattern/rank1-pattern.png";
import { maskName } from "@/utils/maskName";

interface IProps {
  me: GetMeResponse;
}

type SingleRank = {
  student_id: string;
  student_name: string;
  student_grade: number;
  student_class: string;
  percentage: number;
};

type MultiRank = {
  student_grade: number;
  student_class: string;
  percentage: number;
};

export default function RankContainer(props: IProps) {
  const { me } = props;

  const month = dayjs().month() + 1;
  const term = month >= 3 && month <= 7 ? 1 : 2;

  const [singleMulti, setSingleMulti] = useState<"single" | "multi">("single");
  const [monthTerm, setMonthTerm] = useState<"month" | "term">("month");

  // 상태 분리
  const [singleRanks, setSingleRanks] = useState<SingleRank[]>([]);
  const [multiRanks, setMultiRanks] = useState<MultiRank[]>([]);

  // React Query 데이터 fetch
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-rank", me.data?.schoolId, monthTerm],
    queryFn: () =>
      getRankPageStatistic({
        schoolId: me.data?.schoolId as string,
        type: monthTerm,
      }),
    enabled: !!me.data,
  });

  // 데이터가 바뀔 때마다 상태 업데이트
  useEffect(() => {
    if (!data || data.code !== "SUCCESS") return;

    if (singleMulti === "single") {
      // 학생별 랭킹은 studentRankArray, 이름 포함
      setSingleRanks(data.data.studentRankArray);
    } else {
      // 반별 랭킹은 classRankArray, 이름 없음
      setMultiRanks(data.data.classRankArray);
    }
  }, [data, singleMulti, monthTerm]);

  // 1~3등, 나머지 분리 함수 (학생용, 반용 둘 다 동일 구조)
  const getTopThreeAndRest = <T,>(arr: T[] = []) => {
    const safeArr = Array.isArray(arr) ? arr : [];
    return {
      first: safeArr[0],
      second: safeArr[1],
      third: safeArr[2],
      rest: safeArr.slice(3),
    };
  };
  const {
    first: firstSingle,
    second: secondSingle,
    third: thirdSingle,
    rest: restSingle,
  } = getTopThreeAndRest(singleRanks);

  const {
    first: firstMulti,
    second: secondMulti,
    third: thirdMulti,
    rest: restMulti,
  } = getTopThreeAndRest(multiRanks);

  // onChange 핸들러
  const handleValue = (value: "single" | "multi" | "month" | "term") => {
    if (value === "single" || value === "multi") {
      setSingleMulti(value);
    } else {
      setMonthTerm(value);
    }
  };

  if (
    isLoading ||
    !data ||
    !Array.isArray(singleRanks) ||
    !Array.isArray(multiRanks)
    // ||
    // (singleMulti === "single" && singleRanks.length === 0) ||
    // (singleMulti === "multi" && multiRanks.length === 0)
  ) {
    return <LoadingAnimation />;
  }

  return (
    <Wrapper>
      <RankHeader
        singleMulti={singleMulti}
        monthTerm={monthTerm}
        onChange={handleValue}
        currentMonth={`${month}월`}
        currentTerm={`${term}학기`}
      />

      <Content>
        <TitleBadge
          text={
            monthTerm === "month" ? `${month}월 양치왕` : `${term}학기 양치왕`
          }
        />

        <RankWrap>
          {/* 1등 */}
          <RankBox
            rank={1}
            style={{
              background: `url(${Rank1_Pattern.src}) no-repeat #FFCA28`,
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={1} />
              {singleMulti === "single"
                ? `${firstSingle?.student_grade}학년 ${firstSingle?.student_class}반 ${maskName(firstSingle?.student_name) ?? ""}`
                : `${firstMulti?.student_grade}학년 ${firstMulti?.student_class}반`}
            </Box>
            <Box
              sx={{
                fontSize: 28,
                fontWeight: 800,
                lineHeight: "150%",
                letterSpacing: "-0.56px",
                color: "#fff",
              }}
            >
              {singleMulti === "single"
                ? `${firstSingle?.percentage ?? 0}%`
                : `${firstMulti?.percentage ?? 0}%`}
            </Box>
          </RankBox>

          {/* 2등 */}
          <RankBox rank={2} style={{ backgroundColor: "#FFF8E1" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={2} />
              {singleMulti === "single"
                ? `${secondSingle?.student_grade}학년 ${secondSingle?.student_class}반 ${
                    maskName(secondSingle?.student_name) ?? ""
                  }`
                : `${secondMulti?.student_grade}학년 ${secondMulti?.student_class}반`}
            </Box>
            <Box
              sx={{
                fontSize: 28,
                fontWeight: 800,
                lineHeight: "150%",
                letterSpacing: "-0.56px",
                color: "#FFA000",
              }}
            >
              {singleMulti === "single"
                ? `${secondSingle?.percentage ?? 0}%`
                : `${secondMulti?.percentage ?? 0}%`}
            </Box>
          </RankBox>

          {/* 3등 */}
          <RankBox rank={3} style={{ backgroundColor: "#FFF8E1" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={3} />
              {singleMulti === "single"
                ? `${thirdSingle?.student_grade}학년 ${thirdSingle?.student_class}반 ${
                    maskName(thirdSingle?.student_name) ?? ""
                  }`
                : `${thirdMulti?.student_grade}학년 ${thirdMulti?.student_class}반`}
            </Box>
            <Box
              sx={{
                fontSize: 28,
                fontWeight: 800,
                lineHeight: "150%",
                letterSpacing: "-0.56px",
                color: "#FFA000",
              }}
            >
              {singleMulti === "single"
                ? `${thirdSingle?.percentage ?? 0}%`
                : `${thirdMulti?.percentage ?? 0}%`}
            </Box>
          </RankBox>

          {/* 4등부터 끝까지 리스트 */}
          {singleMulti === "single"
            ? restSingle.length > 0 &&
              restSingle.map((item, idx) =>
                item ? (
                  <RankBox
                    key={idx}
                    rank={idx + 4}
                    style={{ backgroundColor: "#F1F2F3" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <RankSpan rank={idx + 4} />
                      {`${item.student_grade}학년 ${item.student_class}반 ${maskName(item.student_name) ?? ""}`}
                    </Box>
                    <Box
                      sx={{
                        fontSize: 28,
                        fontWeight: 800,
                        lineHeight: "150%",
                        letterSpacing: "-0.56px",
                        color: "#747D8A",
                      }}
                    >
                      {`${item.percentage ?? 0}%`}
                    </Box>
                  </RankBox>
                ) : null,
              )
            : restMulti.length > 0 &&
              restMulti.map((item, idx) =>
                item ? (
                  <RankBox
                    key={idx}
                    rank={idx + 4}
                    style={{ backgroundColor: "#F1F2F3" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <RankSpan rank={idx + 4} />
                      {`${item.student_grade}학년 ${item.student_class}반`}
                    </Box>
                    <Box
                      sx={{
                        fontSize: 28,
                        fontWeight: 800,
                        lineHeight: "150%",
                        letterSpacing: "-0.56px",
                        color: "#747D8A",
                      }}
                    >
                      {`${item.percentage ?? 0}%`}
                    </Box>
                  </RankBox>
                ) : null,
              )}
        </RankWrap>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
}));

const Content = styled(Box)(() => ({
  gap: "64px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "48px 64px",
  flexDirection: "column",
  justifyContent: "center",
}));

const RankBox = styled(Box)<{ rank: number }>(({ rank }) => ({
  gap: "10px",
  width: "100%",
  fontSize: 28,
  display: "flex",
  fontWeight: 800,
  lineHeight: "150%",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "12px",
  padding: "16px 24px",
  letterSpacing: "-0.56px",
  color: rank === 1 ? "#fff" : rank === 2 || rank === 3 ? "#FFA000" : "#747D8A",
}));

const RankWrap = styled(Box)(() => ({
  gap: "24px",
  width: "100%",
  display: "flex",
  height: "100%",
  maxHeight: "600px",
  overflowY: "auto",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "flex-start",
}));
