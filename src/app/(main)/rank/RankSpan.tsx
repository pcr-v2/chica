"use client";

import { styled } from "@mui/material";

interface IProps {
  rank: number;
}

export default function RankSpan(props: IProps) {
  const { rank } = props;

  return <Wrapper rank={rank}>{rank}등</Wrapper>;
}

const Wrapper = styled("span")<{ rank: number }>(({ rank }) => {
  return {
    fontSize: 18,
    fontWeight: 800,
    lineHeight: "150%",
    letterSpacing: "-0.36px",
    color:
      rank === 1 ? "#fff" : rank === 2 || rank === 3 ? "#FFCA28" : "#ACB3BC",
  };
});
