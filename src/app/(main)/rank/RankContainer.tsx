"use client";

import { Box, styled } from "@mui/material";
import { useState } from "react";

import RankSpan from "@/app/(main)/rank/RankSpan";
import TitleBadge from "@/app/_components/common/TitleBadge";
import RankHeader from "@/app/_components/layout/Headers/RankHeader";
import Rank1_Pattern from "@/assets/pattern/rank1-pattern.png";
import customDayjs from "@/utils/customDayjs";

export default function RankContainer() {
  const today = customDayjs();

  const [month, setMonth] = useState<number>(today.month() + 1);

  const [term, setTerm] = useState(1);

  const [rankList, setRankList] = useState([]);

  return (
    <Wrapper>
      <RankHeader />

      <Content>
        <TitleBadge text="12월 양치왕" />

        <RankWrap>
          <RankBox
            rank={1}
            style={{
              background: `url(${Rank1_Pattern.src}) no-repeat #FFCA28`,
            }}
          >
            <RankSpan rank={1} />
            1학년 2반 박철련
          </RankBox>
          <RankBox rank={2} style={{ backgroundColor: "#FFF8E1" }}>
            <RankSpan rank={2} />
            2학년 3반 박철련
          </RankBox>
          <RankBox rank={3} style={{ backgroundColor: "#FFF8E1" }}>
            <RankSpan rank={3} />
            3학년 4반 박철련
          </RankBox>
          <RankBox rank={4} style={{ backgroundColor: "#F1F2F3" }}>
            <RankSpan rank={4} />
            4학년 5반 박철련
          </RankBox>
          <RankBox rank={5} style={{ backgroundColor: "#F1F2F3" }}>
            <RankSpan rank={5} />
            5학년 5반 박철련
          </RankBox>
          <RankBox rank={6} style={{ backgroundColor: "#F1F2F3" }}>
            <RankSpan rank={6} />
            6학년 5반 박철련
          </RankBox>
        </RankWrap>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Content = styled(Box)(() => {
  return {
    gap: "64px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "48px 64px",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const RankBox = styled(Box)<{ rank: number }>(({ rank }) => {
  return {
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
    color:
      rank === 1 ? "#fff" : rank === 2 || rank === 3 ? "#FFA000" : "#747D8A",
  };
});

const RankWrap = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
