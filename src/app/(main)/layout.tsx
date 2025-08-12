"use client";

import { Box, styled } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

import ScreenSaver from "@/app/_components/common/ScreenSaver";
import { signOut } from "@/app/actions/auth/SignOutAction";
import Bottom_Pattern from "@/assets/pattern/main-bottom-pattern.png";
import Top_Pattern from "@/assets/pattern/top-pattern.png";
import { useScreenSaverStore } from "@/store/useScreenSaverStore";

interface IProps {
  children: ReactNode;
}

export default function MainLayout(props: IProps) {
  const { children } = props;

  const [easterEgg, setEasterEgg] = useState(0);

  const isActive = useScreenSaverStore((s) => s.isActive);
  const deactivate = useScreenSaverStore((s) => s.deactivate);

  useEffect(() => {
    if (easterEgg > 9) {
      const result = confirm("로그아웃하시겠습니까?");
      if (result) {
        signOut();
      } else {
        setEasterEgg(0);
      }
    }
  }, [easterEgg]);

  return (
    <Wrapper>
      <BackgroundLayer>
        <ImgST src={Top_Pattern.src} alt="top" style={{ top: 0 }} />
        <ImgST src={Bottom_Pattern.src} alt="bottom" style={{ bottom: 0 }} />

        <LogoutEasterEgg
          onClick={() => {
            setEasterEgg((prev) => prev + 1);
          }}
          // onTouchStart={() => {
          //   setEasterEgg((prev) => prev + 1);
          // }}
        />
      </BackgroundLayer>

      <ContentLayer>
        <Box sx={{ flexGrow: 1, width: "100%", maxWidth: "834px" }}>
          {children}
        </Box>
      </ContentLayer>

      {isActive && (
        <>
          <ScreenSaver />

          <div
            style={{
              inset: 0,
              zIndex: 9999,
              position: "fixed",
              touchAction: "none",
              pointerEvents: "all",
              // backgroundColor: "rgba(0,0,0,0.1)", // 임시 시각화용 (투명도 조절 가능)
            }}
            onClick={(e) => {
              e.stopPropagation();
              deactivate();
              console.log("click");
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              deactivate();
              console.log("touch");
            }}
          />
        </>
      )}
    </Wrapper>
  );
}
const Wrapper = styled(Box)(() => ({
  width: "100%",
  // overflow: "hidden", // 배경 넘침 방지
  minHeight: "100dvh",
  position: "relative",
}));

const BackgroundLayer = styled(Box)(() => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 0,
  minHeight: "100dvh",
  position: "absolute",
  pointerEvents: "none",
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

const LogoutEasterEgg = styled(Box)(() => {
  return {
    bottom: 0,
    right: "0%",
    zIndex: 999999,
    width: "120px",
    height: "120px",
    position: "absolute",
    pointerEvents: "auto",
  };
});
