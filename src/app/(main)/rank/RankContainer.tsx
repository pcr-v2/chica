"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

import RankSpan from "@/app/(main)/rank/RankSpan";
import TitleBadge from "@/app/_components/common/TitleBadge";
import RankHeader from "@/app/_components/layout/Headers/RankHeader";
import Rank1_Pattern from "@/assets/pattern/rank1-pattern.png";

export default function RankContainer() {
  // const [month, setMonth] = useState<number>(today.month() + 1);

  // const [term, setTerm] = useState(1);

  // const [rankList, setRankList] = useState([]);

  const month = dayjs().month() + 1; // 0-based라 +1 필요
  const term = month >= 3 && month <= 7 ? 1 : 2;

  const [singleMulti, setSingleMulti] = useState<"single" | "multi">("single");
  const [monthTerm, setMonthTerm] = useState<"month" | "term">("month");

  const handleValue = (value: "single" | "multi" | "month" | "term") => {
    if (value === "single" || value === "multi") {
      setSingleMulti(value);
    } else {
      setMonthTerm(value);
    }
  };

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
          <RankBox
            rank={1}
            style={{
              background: `url(${Rank1_Pattern.src}) no-repeat #FFCA28`,
            }}
          >
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={1} />
              1학년 2반 {singleMulti === "single" && "신예은"}
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
              100%
            </Box>
          </RankBox>
          <RankBox rank={2} style={{ backgroundColor: "#FFF8E1" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={2} />
              2학년 3반{singleMulti === "single" && " 박연진"}
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
              97%
            </Box>
          </RankBox>
          <RankBox rank={3} style={{ backgroundColor: "#FFF8E1" }}>
            <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <RankSpan rank={3} />
              3학년 4반 {singleMulti === "single" && "신유나"}
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
              91%
            </Box>
          </RankBox>
          {Array.from({ length: 10 }, (_, i) => (i + 1).toString()).map(
            (el, idx) => {
              return (
                <RankBox
                  key={idx}
                  rank={idx + 4}
                  style={{ backgroundColor: "#F1F2F3" }}
                >
                  <Box
                    sx={{ display: "flex", gap: "10px", alignItems: "center" }}
                  >
                    <RankSpan rank={idx + 4} />
                    4학년 {idx + 1}반 {singleMulti === "single" && "정소민"}
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
                    75%
                  </Box>
                </RankBox>
              );
            },
          )}
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
    justifyContent: "space-between",
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
    height: "100%",
    // flexGrow: 1,
    maxHeight: "600px",
    overflowY: "auto",
    alignItems: "flex-start",
    flexDirection: "column",
    justifyContent: "flex-start",
  };
});
