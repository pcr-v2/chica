"use client";

import { Box, styled } from "@mui/material";
import { ReactNode, useEffect, useRef, useState } from "react";

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

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 사용자 인터랙션 있을 때마다 호출할 함수
  const resetTimer = () => {
    // 스크린세이버 활성화 상태면 끄기
    if (isActive) {
      deactivate();
    }
    // 기존 타이머 있으면 초기화
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // 1분 뒤 스크린세이버 활성화
    timerRef.current = setTimeout(() => {
      // 스크린세이버 활성화 함수 (store 내 isActive를 true로)
      // isActive 상태 변경 로직을 useScreenSaverStore에서 제공해야 함
      useScreenSaverStore.getState().activate();
    }, 60 * 10000); // 1분
  };

  // 화면 클릭/터치 이벤트 감지
  useEffect(() => {
    // 초기 타이머 설정
    resetTimer();

    // 이벤트 핸들러 (사용자 인터랙션)
    const onUserActivity = () => {
      resetTimer();
    };

    window.addEventListener("click", onUserActivity);
    window.addEventListener("touchstart", onUserActivity);

    return () => {
      window.removeEventListener("click", onUserActivity);
      window.removeEventListener("touchstart", onUserActivity);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

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
  // console.log("easterEgg", easterEgg);
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
              resetTimer(); // 터치 시 타이머 초기화도 추가해줘야 함
            }}
            onTouchStart={(e) => {
              e.stopPropagation();
              deactivate();
              resetTimer(); // 터치 시 타이머 초기화도 추가해줘야 함
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
    zIndex: 10,
    width: "120px",
    height: "120px",
    position: "absolute",
    pointerEvents: "auto",
    // border: "2px solid red",
  };
});
