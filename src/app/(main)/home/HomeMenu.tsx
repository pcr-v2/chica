"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";

import Meal from "@/assets/home/meal.png";
import Rank from "@/assets/home/rank.png";
import Video from "@/assets/home/video.png";
import { useScreenSaverStore } from "@/store/useScreenSaverStore";
import { convertVw } from "@/utils/convertVw";

interface IProps {
  onClick: () => void;
}

export default function HomeMenu(props: IProps) {
  const { onClick } = props;

  const router = useRouter();

  const activate = useScreenSaverStore((s) => s.activate);

  return (
    <Wrapper>
      <MenuImgBox>
        <MenuImg src={Video.src} alt="video" onClick={activate} />
      </MenuImgBox>
      <MenuImgBox>
        <MenuImg
          src={Rank.src}
          alt="rank"
          onClick={() => router.push("/rank")}
        />
      </MenuImgBox>

      <MenuImgBox>
        <MenuImg src={Meal.src} alt="meal" onClick={onClick} />
      </MenuImgBox>
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
    "@media (max-width:834px)": {
      gap: convertVw(40),
      padding: `${convertVw(40)} ${convertVw(64)}`,
    },
  };
});

const MenuImg = styled("img")(() => {
  return {
    width: "100%",
    height: "100%",
  };
});

const MenuImgBox = styled(Box)(() => {
  return {
    width: "100%",
    maxWidth: "209px",
  };
});
