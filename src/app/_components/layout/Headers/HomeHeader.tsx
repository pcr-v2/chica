"use client";

import { Box, styled } from "@mui/material";

import LeftArrow from "@/assets/icon/left-arrow.svg";
import Logo from "@/assets/logo/page-logo.png";

interface IProps {
  grade: string | null;
  classNum: string | null;
  onClickGoMain: () => void;
}

export default function HomeHeader(props: IProps) {
  const { grade, classNum, onClickGoMain } = props;

  return (
    <Wrapper sx={{ justifyContent: grade === null ? "center" : "start" }}>
      {grade == null ? (
        <LogoImg src={Logo.src} alt="logo" />
      ) : (
        <>
          <GoMainBtn onClick={onClickGoMain}>
            <ArrowImg src={LeftArrow.src} alt="arrow" />

            <span>처음으로</span>
          </GoMainBtn>

          <InfoBox>
            {grade}학년 {classNum && `${classNum}반`}
          </InfoBox>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "105px 64px 24px",
  };
});

const LogoImg = styled("img")(() => {
  return {
    width: "192px",
    height: "64px",
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
