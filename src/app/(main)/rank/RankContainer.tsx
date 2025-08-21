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
  student_id: string;
  displayName: string;
  percentage: number;
  student_rank: number;
};

type SingleRank = {
  student_id: string;
  student_name: string;
  student_grade: number;
  student_class: string;
  percentage: number;
  student_rank: number;
};

type MultiRank = {
  student_grade: number;
  student_class: string;
  percentage: number;
  student_rank: number;
};

interface IProps {
  me: GetMeResponse;
}

export default function RankContainer(props: IProps) {
  const { me } = props;

  const month = dayjs().month() + 1;
  const term = month >= 3 && month <= 7 ? 1 : 2;

  const [singleMulti, setSingleMulti] = useState<"single" | "multi">("single");

  const [ranks, setRanks] = useState<DisplayRank[]>([]);

  // React Query 데이터 fetch
  const { data, isLoading } = useQuery({
    queryKey: ["get-rank", me.data?.schoolId, singleMulti],
    queryFn: () =>
      getRankPageStatistic({
        schoolId: me.data?.schoolId as string,
        type: "month",
      }),
    enabled: !!me.data,
  });

  useEffect(() => {
    if (!data || data.code !== "SUCCESS") return;

    const sourceArray =
      singleMulti === "single"
        ? data.data.studentRankArray
        : data.data.classRankArray;

    const mapped: DisplayRank[] = sourceArray.map((item: any) => ({
      student_id:
        item.student_id ?? `${item.student_grade}-${item.student_class}`,
      displayName:
        singleMulti === "single"
          ? `${item.student_grade}학년 ${item.student_class}반 ${maskName(
              item.student_name ?? "",
            )}`
          : `${item.student_grade}학년 ${item.student_class}반`,
      percentage: item.percentage ?? 0,
      student_rank: item.student_rank, // 서버에서 내려주는 순위 그대로
    }));

    setRanks(mapped);
  }, [data, singleMulti]);

  const handleValue = (value: "single" | "multi" | "month" | "term") => {
    if (value === "single" || value === "multi") {
      setSingleMulti(value);
    }
  };

  if (isLoading || !data) {
    return <LoadingAnimation />;
  }

  const topThree = ranks.filter((r) => r.student_rank <= 3);
  const restRanks = ranks.filter((r) => r.student_rank > 3);

  return (
    <Wrapper>
      <RankHeader
        singleMulti={singleMulti}
        monthTerm="month"
        onChange={handleValue}
        currentMonth={`${month}월`}
        currentTerm={`${term}학기`}
      />

      <Content>
        <TitleBadge text={`${month}월 양치왕`} />

        <RankWrap>
          {ranks.map((item) => (
            <RankBox
              key={item.student_id}
              rank={item.student_rank}
              style={
                item.student_rank === 1
                  ? {
                      background: `url(${Rank1_Pattern.src}) no-repeat #FFCA28`,
                    }
                  : item.student_rank <= 3
                    ? { backgroundColor: "#FFF8E1" }
                    : { backgroundColor: "#F1F2F3" }
              }
            >
              <RankNameWrap>
                <RankSpan rank={item.student_rank} />
                {item.displayName}
              </RankNameWrap>
              <PercentText
                sx={{
                  color:
                    item.student_rank === 1
                      ? "#fff"
                      : item.student_rank <= 3
                        ? "#FFA000"
                        : "#747D8A",
                }}
              >
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
