"use client";

import { Box, styled } from "@mui/material";

import Croco from "@/assets/icon/croco-icon.svg";
import Molar from "@/assets/icon/molar-icon.svg";
import Tail from "@/assets/icon/tail-icon.svg";
import { convertVw } from "@/utils/convertVw";

interface IProps {
  text: string;
}

export default function TitleBadge(props: IProps) {
  const { text } = props;

  return (
    <Wrapper>
      <TitleWrap>
        <MolarImg />

        <span>{text}</span>

        <TailImg />
      </TitleWrap>

      <CrocoImg />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    display: "flex",
    alignItems: "center",
  };
});

const TitleWrap = styled(Box)(() => {
  return {
    gap: "10px",
    fontSize: 32,
    fontWeight: 800,
    display: "flex",
    color: "#fff",
    lineHeight: "150%",
    position: "relative",
    borderRadius: "100px",
    background: "#464B53",
    padding: "8px 24px 6px",
    letterSpacing: "-0.64px",
    "@media (max-width:834px)": {
      fontSize: convertVw(32),
      letterSpacing: convertVw(-0.64),
      padding: `${convertVw(8)} ${convertVw(24)} ${convertVw(6)}`,
    },
  };
});

const MolarImg = styled(Molar)(() => {
  return {
    width: "42px",
    height: "48px",
    "@media (max-width:834px)": {
      width: convertVw(42),
      height: convertVw(48),
    },
  };
});

const TailImg = styled(Tail)(() => {
  return {
    top: 11,
    right: -32,
    width: "40px",
    height: "40px",
    position: "absolute",
    "@media (max-width:834px)": {
      top: convertVw(11),
      right: convertVw(-32),
      width: convertVw(40),
      height: convertVw(40),
    },
  };
});

const CrocoImg = styled(Croco)(() => {
  return {
    width: "59px",
    height: "65px",
    marginLeft: "32px",
    "@media (max-width:834px)": {
      width: convertVw(59),
      height: convertVw(65),
      marginLeft: convertVw(32),
    },
  };
});
