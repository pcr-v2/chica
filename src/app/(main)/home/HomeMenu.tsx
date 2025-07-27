"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";

import Meal from "@/assets/home/meal.png";
import Rank from "@/assets/home/rank.png";
import Video from "@/assets/home/video.png";

interface IProps {
  onClick: () => void;
}

export default function HomeMenu(props: IProps) {
  const { onClick } = props;

  const router = useRouter();

  return (
    <Wrapper>
      <MenuImg
        src={Video.src}
        alt="video"
        onClick={() => alert("비디오 화면 보호 바로 시작")}
      />
      <MenuImg src={Rank.src} alt="rank" onClick={() => router.push("/rank")} />
      <MenuImg src={Meal.src} alt="meal" onClick={onClick} />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    padding: "40px 64px",
    alignItems: "center",
    justifyContent: "center",
  };
});

const MenuImg = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: "209px",
    cursor: "pointer",
  };
});
