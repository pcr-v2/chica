"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import MonthPicker from "@/app/_components/layout/Headers/RankHeader/MonthPicker";
import MultiSvg from "@/app/_components/layout/Headers/RankHeader/MultiSvg";
import SingleSvg from "@/app/_components/layout/Headers/RankHeader/SingleSvg";
import TermPicker from "@/app/_components/layout/Headers/RankHeader/TermPicker";
import LeftArrow from "@/assets/icon/left-arrow.svg";
import { convertVw } from "@/utils/convertVw";

interface IProps {
  singleMulti: "single" | "multi";
  monthTerm: "month" | "term";

  currentMonth: string;
  currentTerm: string;

  onChange: (value: "single" | "multi" | "month" | "term") => void;
}

export default function RankHeader(props: IProps) {
  const { singleMulti, monthTerm, currentMonth, currentTerm, onChange } = props;

  const router = useRouter();

  return (
    <Wrapper>
      <GoMainBtn onClick={() => router.replace("/home")}>
        <ArrowImg />

        <span>처음으로</span>
      </GoMainBtn>

      <SelectWrap>
        <SingleTab
          onClick={() => onChange("single")}
          isactive={(singleMulti === "single").toString()}
        >
          <SvgWrap>
            <SingleSvg isActive={singleMulti === "single"} />
          </SvgWrap>
          <TextSpan>개인전</TextSpan>
        </SingleTab>

        <MultiTab
          onClick={() => onChange("multi")}
          isactive={(singleMulti === "multi").toString()}
        >
          <SvgWrap>
            <MultiSvg isActive={singleMulti === "multi"} />
          </SvgWrap>
          <TextSpan>팀전</TextSpan>
        </MultiTab>
      </SelectWrap>

      <SelectWrap>
        <SingleTab
          onClick={() => onChange("month")}
          isactive={(monthTerm === "month").toString()}
        >
          <TextSpan>{currentMonth}</TextSpan>
        </SingleTab>

        <MultiTab
          onClick={() => onChange("term")}
          isactive={(monthTerm === "term").toString()}
        >
          <TextSpan>{currentTerm}</TextSpan>
        </MultiTab>
      </SelectWrap>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "105px 64px 24px",
    justifyContent: "space-between",
    "@media (max-width:834px)": {
      padding: `${convertVw(105)} ${convertVw(64)} ${convertVw(24)}`,
    },
  };
});

const GoMainBtn = styled(Box)(() => {
  return {
    gap: "6px",
    fontSize: 21,
    display: "flex",
    fontWeight: 900,
    cursor: "pointer",
    color: "#747d8a",
    lineHeight: "150%",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.42px",
    backgroundColor: "#fff",
    backdropFilter: "blur(4px)",
    border: "2px solid #D5D7DB",
    "@media (max-width:834px)": {
      gap: convertVw(6),
      fontSize: convertVw(21),
      letterSpacing: convertVw(-0.42),
      border: `${convertVw(2)} solid #D5D7DB`,
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});

const SvgWrap = styled("div")(() => ({
  height: "28px",
  minWidth: "28px",
  "@media (max-width:834px)": {
    minWidth: convertVw(28),
    height: convertVw(28),
  },
}));

const ArrowImg = styled(LeftArrow)(() => {
  return {
    width: "28px",
    height: "28px",
    "@media (max-width:834px)": {
      width: `${convertVw(28)} !important`,
      height: `${convertVw(28)} !important`,
    },
  };
});

const TextSpan = styled("span")(() => {
  return {
    width: "100%",
    lineHeight: "150%",
    textAlign: "center",
    whiteSpace: "nowrap",

    "@media (max-width:834px)": {
      width: convertVw(50),
    },
  };
});

const SelectWrap = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const SingleTab = styled(Box)<{ isactive: string }>(({ isactive }) => {
  return {
    gap: "6px",
    fontSize: 21,
    fontWeight: 800,
    display: "flex",
    minWidth: "92px",
    cursor: "pointer",
    lineHeight: "150%",
    alignItems: "center",
    padding: "12px 20px",
    borderTop: "2px solid",
    borderLeft: "2px solid",
    letterSpacing: "-0.42px",
    justifyContent: "center",
    borderBottom: "2px solid",
    backdropFilter: "blur(4px)",
    transition: "all 0.3s ease-in-out",
    borderRadius: "100px 0px 0px 100px",
    color: isactive === "true" ? "#6EDBB5" : "#747d8a",
    borderColor: isactive === "true" ? "8EE3C5" : "#d5d7d8",
    backgroundColor: isactive === "true" ? "#EDFCF7" : "#fff",

    "@media (max-width:834px)": {
      gap: convertVw(6),
      fontSize: convertVw(21),
      minWidth: convertVw(92),
      letterSpacing: convertVw(-0.42),
      borderTop: `${convertVw(2)} solid`,
      borderLeft: `${convertVw(2)} solid`,
      borderBottom: `${convertVw(2)} solid`,
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});

const MultiTab = styled(Box)<{ isactive: string }>(({ isactive }) => {
  return {
    gap: "6px",
    fontSize: 21,
    fontWeight: 800,
    display: "flex",
    cursor: "pointer",
    lineHeight: "150%",
    padding: "12px 20px",
    alignItems: "center",
    borderTop: "2px solid",
    letterSpacing: "-0.42px",
    justifyContent: "center",
    borderRight: "2px solid",
    borderBottom: "2px solid",
    backdropFilter: "blur(4px)",
    transition: "all 0.3s ease-in-out",
    borderRadius: "0px 100px 100px 0px",
    color: isactive === "true" ? "#6EDBB5" : "#747d8a",
    borderColor: isactive === "true" ? "#8EE3C5" : "#d5d7d8",
    backgroundColor: isactive === "true" ? "#EDFCF7" : "#fff",
    "@media (max-width:834px)": {
      gap: convertVw(6),
      fontSize: convertVw(21),
      letterSpacing: convertVw(-0.42),
      borderTop: `${convertVw(2)} solid`,
      borderRight: `${convertVw(2)} solid`,
      borderBottom: `${convertVw(2)} solid`,
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});

const SingleSt = styled(SingleSvg)(() => {
  return {
    width: "28px",
    height: "28px",
  };
});

const MultiSt = styled(MultiSvg)(() => {
  return {
    width: "28px",
    height: "28px",
  };
});
