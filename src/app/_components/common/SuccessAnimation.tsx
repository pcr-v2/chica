"use client";

import { Box, styled } from "@mui/material";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import successLottie from "@/public/images/success.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

interface IProps {
  redirectUrl?: string;
}

export default function SuccessAnimation(props: IProps) {
  const { redirectUrl } = props;
  const router = useRouter();

  const handleComplete = () => {
    if (redirectUrl != null) router.replace(redirectUrl);
  };

  return (
    <CenterWrapper>
      <Player
        autoplay
        keepLastFrame
        src={successLottie}
        style={{ height: 700, width: 700 }}
        onEvent={(event) => {
          if (event === "complete") {
            handleComplete();
          }
        }}
      />
    </CenterWrapper>
  );
}

const CenterWrapper = styled(Box)({
  top: 0,
  left: 0,
  zIndex: 9999,
  width: "100vw",
  height: "100vh",
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.5)",
});
