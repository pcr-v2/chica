"use client";

import { Box, styled } from "@mui/material";

import Logo from "@/assets/logo/page-logo.png";

export default function MainStep() {
  return (
    <Wrapper>
      <LogoImg src={Logo.src} alt="logo" />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const LogoImg = styled("img")(() => {
  return {
    width: "192px",
    height: "64px",
  };
});
