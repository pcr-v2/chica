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
import { convertVw } from "@/utils/convertVw";
import { maskName } from "@/utils/maskName";

type DisplayRank = {
  displayName: string;
  percentage: number;
};

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

interface IProps {
  me: GetMeResponse;
}

export default function RankContainer(props: IProps) {
  const { me } = props;

  const month = dayjs().month() + 1;
  const term = month >= 3 && month <= 7 ? 1 : 2;

  const [singleMulti, setSingleMulti] = useState<"single" | "multi">("single");
  const [monthTerm, setMonthTerm] = useState<"month" | "term">("month");

  // 상태 분리
  const [singleRanks, setSingleRanks] = useState<SingleRank[]>([]);
  const [multiRanks, setMultiRanks] = useState<MultiRank[]>([]);

  const [topThree, setTopThree] = useState<DisplayRank[]>([]);
  const [restRanks, setRestRanks] = useState<DisplayRank[]>([]);

  // React Query 데이터 fetch
  const { data, isLoading } = useQuery({
    queryKey: ["get-rank", me.data?.schoolId, monthTerm],
    queryFn: () =>
      getRankPageStatistic({
        schoolId: me.data?.schoolId as string,
        type: monthTerm,
      }),
    enabled: !!me.data,
  });

  useEffect(() => {
    if (!data || data.code !== "SUCCESS") return;

    const sourceArray =
      singleMulti === "single"
        ? data.data.studentRankArray
        : data.data.classRankArray;

    const mapped = sourceArray.map((item: any) => {
      if (singleMulti === "single") {
        return {
          displayName: `${item.student_grade}학년 ${item.student_class}반 ${maskName(
            item.student_name ?? "",
          )}`,
          percentage: item.percentage ?? 0,
        };
      } else {
        return {
          displayName: `${item.student_grade}학년 ${item.student_class}반`,
          percentage: item.percentage ?? 0,
        };
      }
    });

    setTopThree(mapped.slice(0, 3));
    setRestRanks(mapped.slice(3));
  }, [data, singleMulti, monthTerm]);

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

  // onChange 핸들러
  const handleValue = (value: "single" | "multi" | "month" | "term") => {
    if (value === "single" || value === "multi") {
      setSingleMulti(value);
    } else {
      setMonthTerm(value);
    }
  };

  if (isLoading || !data) {
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
            <RankNameWrap>
              <RankSpan rank={1} />
              {topThree[0]?.displayName}
            </RankNameWrap>
            <PercentText sx={{ color: "#fff" }}>
              {`${topThree[0]?.percentage}%`}
            </PercentText>
          </RankBox>

          {/* 2등 */}
          <RankBox rank={2} style={{ backgroundColor: "#FFF8E1" }}>
            <RankNameWrap>
              <RankSpan rank={2} />
              {topThree[1]?.displayName}
            </RankNameWrap>
            <PercentText sx={{ color: "#FFA000" }}>
              {`${topThree[1]?.percentage}%`}
            </PercentText>
          </RankBox>

          {/* 3등 */}
          <RankBox rank={3} style={{ backgroundColor: "#FFF8E1" }}>
            <RankNameWrap>
              <RankSpan rank={3} />
              {topThree[2]?.displayName}
            </RankNameWrap>
            <PercentText sx={{ color: "#FFA000" }}>
              {`${topThree[2]?.percentage}%`}
            </PercentText>
          </RankBox>

          {/* 나머지 */}
          {restRanks.map((item, idx) => (
            <RankBox
              key={idx}
              rank={idx + 4}
              style={{ backgroundColor: "#F1F2F3" }}
            >
              <RankNameWrap>
                <RankSpan rank={idx + 4} />
                {item.displayName}
              </RankNameWrap>
              <PercentText sx={{ color: "#747D8A" }}>
                {`${item.percentage}%`}
              </PercentText>
            </RankBox>
          ))}
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
  "@media (max-width:834px)": {
    gap: convertVw(64),
    padding: `${convertVw(48)} ${convertVw(64)}`,
  },
}));

const RankBox = styled(Box)<{ rank: number }>(({ rank }) => ({
  gap: "10px",
  width: "100%",
  fontSize: 28,
  display: "flex",
  fontWeight: 800,
  lineHeight: "150%",
  alignItems: "center",
  borderRadius: "12px",
  padding: "16px 24px",
  letterSpacing: "-0.56px",
  justifyContent: "space-between",
  color: rank === 1 ? "#fff" : rank === 2 || rank === 3 ? "#FFA000" : "#747D8A",
  "@media (max-width:834px)": {
    gap: convertVw(10),
    fontSize: convertVw(28),
    letterSpacing: convertVw(-0.56),
    padding: `${convertVw(16)} ${convertVw(24)}`,
  },
}));

const RankWrap = styled(Box)(() => ({
  gap: "24px",
  width: "100%",
  height: "100%",
  display: "flex",
  overflowY: "auto",
  maxHeight: "600px",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  "@media (max-width:834px)": {
    gap: convertVw(24),
    maxHeight: convertVw(600),
  },
}));

const PercentText = styled(Box)(() => {
  return {
    fontSize: 28,
    fontWeight: 800,
    lineHeight: "150%",
    letterSpacing: "-0.56px",
    "@media (max-width:834px)": {
      fontSize: convertVw(28),
      letterSpacing: convertVw(-0.56),
    },
  };
});

const RankNameWrap = styled(Box)(() => {
  return {
    gap: "10px",
    display: "flex",
    alignItems: "center",
    "@media (max-width:834px)": {
      gap: convertVw(10),
    },
  };
});
