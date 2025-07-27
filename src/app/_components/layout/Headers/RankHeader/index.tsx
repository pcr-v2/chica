"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import MonthPicker from "@/app/_components/layout/Headers/RankHeader/MonthPicker";
import MultiSvg from "@/app/_components/layout/Headers/RankHeader/MultiSvg";
import SingleSvg from "@/app/_components/layout/Headers/RankHeader/SingleSvg";
import TermPicker from "@/app/_components/layout/Headers/RankHeader/TermPicker";
import LeftArrow from "@/assets/icon/left-arrow.svg";

type TValue = "single" | "multi";

export default function RankHeader() {
  const router = useRouter();
  const [value, setValue] = useState<TValue>("single");

  return (
    <Wrapper>
      <GoMainBtn onClick={() => router.replace("/home")}>
        <ArrowImg src={LeftArrow.src} alt="arrow" />

        <span>처음으로</span>
      </GoMainBtn>

      <InfoBox>
        <SelectWrap>
          <SingleTab
            onClick={() => setValue("single")}
            isactive={(value === "single").toString()}
          >
            <SingleSvg isActive={value === "single"} />

            <span>개인전</span>
          </SingleTab>

          <MultiTab
            onClick={() => setValue("multi")}
            isactive={(value === "multi").toString()}
          >
            <MultiSvg isActive={value === "multi"} />
            <span>팀전</span>
          </MultiTab>
        </SelectWrap>

        <MonthPicker />

        <TermPicker />
      </InfoBox>
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
  };
});

const ArrowImg = styled(LeftArrow)(() => {
  return {
    width: "28px",
    height: "28px",
  };
});

const InfoBox = styled(Box)(() => {
  return {
    // gap: "12px",
    width: "100%",
    fontSize: 32,
    display: "flex",
    fontWeight: 800,
    maxWidth: "510px",
    color: "#747d8a",
    lineHeight: "150%",
    textAlign: "center",
    justifyContent: "space-between",
    letterSpacing: "-0.64px",
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
    cursor: "pointer",
    lineHeight: "150%",
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
  };
});
