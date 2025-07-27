"use client";

import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

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
        <Box sx={{ flexGrow: 1, width: "100%", maxWidth: "834px" }}>
          {children}
        </Box>
      </ContentLayer>
    </Wrapper>
  );
}
const Wrapper = styled(Box)(() => ({
  width: "100%",
  overflow: "hidden", // 배경 넘침 방지
  minHeight: "100dvh",
  position: "relative",
}));

const BackgroundLayer = styled(Box)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  position: "absolute",
  pointerEvents: "none", // 클릭 방지
}));

const ContentLayer = styled(Box)(() => ({
  zIndex: 1,
  width: "100%",
  display: "flex",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
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
