"use client";

import { Box, styled } from "@mui/material";

import Splashlogo from "@/assets/logo/splash-logo.svg";

export default function MainSplash() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    height: "100dvh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6EDBB5",
  };
});

const Logo = styled(Splashlogo)(() => {
  return {
    width: "300px",
    height: "100px",
  };
});
