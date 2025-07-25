"use client";

import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

import Bottom_Pattern from "@/assets/pattern/signin-bottom-pattern.png";
import Top_Pattern from "@/assets/pattern/top-pattern.png";

interface IProps {
  children: ReactNode;
}

export default function SigninLayout(props: IProps) {
  const { children } = props;

  return (
    <Wrapper>
      <ImgST src={Top_Pattern.src} alt="top" />
      {children}
      <ImgST src={Bottom_Pattern.src} alt="bottom" />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100dvh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  };
});

const ImgST = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: "834px",
  };
});
