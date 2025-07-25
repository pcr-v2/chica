"use client";

import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

import Header from "@/app/_components/layout/Header";
import Bottom_Pattern from "@/assets/pattern/main-bottom-pattern.png";
import Top_Pattern from "@/assets/pattern/top-pattern.png";

interface IProps {
  children: ReactNode;
}

export default function MainLayout(props: IProps) {
  const { children } = props;
  return (
    <Wrapper>
      <BackgroundLayer>
        <ImgST src={Top_Pattern.src} alt="top" style={{ top: 0 }} />
        <ImgST src={Bottom_Pattern.src} alt="bottom" style={{ bottom: 0 }} />
      </BackgroundLayer>

      <ContentLayer>
        <Header />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </ContentLayer>
    </Wrapper>
  );
}
const Wrapper = styled(Box)(() => ({
  width: "100%",
  minHeight: "100dvh",
  position: "relative",
  overflow: "hidden", // 배경 넘침 방지
}));

const BackgroundLayer = styled(Box)(() => ({
  zIndex: 0,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  pointerEvents: "none", // 클릭 방지
}));

const ContentLayer = styled(Box)(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  minHeight: "100dvh",
}));

const ImgST = styled("img")(() => {
  return {
    zIndex: 1,
    left: "50%",
    width: "100%",
    maxWidth: "834px",
    position: "absolute",
    transform: "translate(-50%)",
  };
});
