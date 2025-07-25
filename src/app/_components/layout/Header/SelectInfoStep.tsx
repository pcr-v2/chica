"use client";

import { Box, styled } from "@mui/material";

import LeftArrow from "@/assets/icon/left-arrow.svg";

export default function SelectInfoStep() {
  return (
    <Wrapper>
      <GoMainBtn>
        <ArrowImg src={LeftArrow.src} alt="arrow" />

        <span>처음으로</span>
      </GoMainBtn>

      <InfoBox>정보</InfoBox>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
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
    width: "100%",
    fontSize: 32,
    display: "flex",
    fontWeight: 800,
    maxWidth: "340px",
    color: "#747d8a",
    lineHeight: "150%",
    textAlign: "center",
    justifyContent: "center",
    letterSpacing: "-0.64px",
  };
});
