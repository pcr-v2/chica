"use client";

import { Box, styled } from "@mui/material";

import LeftArrow from "@/assets/icon/left-arrow.svg";
import Logo from "@/assets/logo/page-logo.png";
import { convertVw } from "@/utils/convertVw";

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
    "@media (max-width:834px)": {
      gap: convertVw(40),
      padding: `${convertVw(105)} ${convertVw(64)} ${convertVw(24)}`,
    },
  };
});

const LogoImg = styled("img")(() => {
  return {
    width: "192px",
    height: "64px",
    "@media (max-width:834px)": {
      width: convertVw(192),
      height: convertVw(64),
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
    whiteSpace: "nowrap",
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

const ArrowImg = styled(LeftArrow)(() => {
  return {
    width: "28px",
    height: "28px",
    "@media (max-width:834px)": {
      width: convertVw(28),
      height: convertVw(28),
    },
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
    "@media (max-width:834px)": {
      fontSize: convertVw(32),
      maxWidth: convertVw(340),
      letterSpacing: convertVw(-0.42),
    },
  };
});
