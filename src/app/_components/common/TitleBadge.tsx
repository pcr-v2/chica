"use client";

import { Box, styled } from "@mui/material";

import Croco from "@/assets/icon/croco-icon.svg";
import Molar from "@/assets/icon/molar-icon.svg";
import Tail from "@/assets/icon/tail-icon.svg";

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
  };
});

const MolarImg = styled(Molar)(() => {
  return {
    width: "42px",
    height: "48px",
  };
});

const TailImg = styled(Tail)(() => {
  return {
    top: 11,
    right: -32,
    width: "40px",
    height: "40px",
    position: "absolute",
  };
});

const CrocoImg = styled(Croco)(() => {
  return {
    marginLeft: "32px",
  };
});
