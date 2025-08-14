"use client";

import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Arrow from "@/assets/summary/board-arrow.svg";
import useResponsive from "@/libs/hooks/useResponsive";
import { convertVw } from "@/utils/convertVw";

interface IProps {
  allClassRateArray: number[];
}

export default function ExecutionBoard(props: IProps) {
  const { allClassRateArray } = props;

  const [open, setOpen] = useState(false);

  const isMobile = useResponsive("down", "tablet");

  const result = allClassRateArray
    ?.map((rate, index) => ({
      classNum: index + 1, // index + 1 → 반 번호
      rate,
    }))
    .sort((a, b) => b.rate - a.rate); // 내림차순 정렬

  const baseHeightTop3 = 240; // 1등 시작 높이
  const baseHeightOthers = baseHeightTop3 - 40 * 2; // 3등 높이
  const gapTop3 = 40;
  const gapOthers = 20;

  const uiData = result.map((item, index) => {
    let height;

    if (index < 3) {
      // 1~3등
      height = baseHeightTop3 - gapTop3 * index;
    } else {
      // 4등 이후
      height = baseHeightOthers - gapTop3 - gapOthers * (index - 3);
    }

    // 음수 방지
    height = Math.max(height, 20);

    return {
      class: item.classNum,
      height,
      rate: item.rate, // rate도 같이 넘기면 툴팁 등에서 활용 가능
    };
  });

  return (
    <Wrapper>
      <Title onClick={() => setOpen(!open)}>
        반별 리더보드 영역
        <ArrowIcon isopen={open.toString()} />
      </Title>

      <AnimatePresence initial={false} mode="wait">
        <BoardContent
          initial={{ height: 0, marginTop: 0 }}
          animate={{
            overflowY: "hidden",
            height: open ? (isMobile ? convertVw(288) : "288px") : 0,
            marginTop: open ? (isMobile ? convertVw(24) : 24) : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
        >
          {uiData.map((el, idx) => {
            return (
              <GraphWrap key={idx}>
                <GraphBar
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: open
                      ? isMobile
                        ? convertVw(el.height)
                        : el.height
                      : 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "linear",
                    delay: 0.2 * idx,
                  }}
                  style={{
                    background:
                      idx <= 2
                        ? "linear-gradient(to bottom, #6EDBB5 0%, #FAFAFA 90%)"
                        : "linear-gradient(to bottom, #D5D7DB 0%, #FAFAFA 90%)",
                  }}
                />
                <ClassText
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: open ? (isMobile ? convertVw(34) : 34) : 0,
                    opacity: 1,
                  }}
                >
                  {el.class}반
                </ClassText>
              </GraphWrap>
            );
          })}
        </BoardContent>
      </AnimatePresence>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    borderRadius: "24px",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "#fafafa",
    "@media (max-width:834px)": {
      gap: convertVw(40),
      borderRadius: convertVw(24),
      padding: `${convertVw(40)} ${convertVw(40)} ${convertVw(0)}`,
    },
  };
});

const Title = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    fontWeight: 800,
    display: "flex",
    cursor: "pointer",
    color: "#080808",
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.56px",
    justifyContent: "space-between",
    "@media (max-width:834px)": {
      fontSize: convertVw(28),
      letterSpacing: convertVw(-0.56),
    },
  };
});

const ArrowIcon = styled(Arrow)<{ isopen: string }>(({ isopen }) => {
  const isOpen = isopen === "true";

  return {
    width: "42px",
    height: "42px",
    transition: "transform 0.3s ease-in-out",
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
    "@media (max-width:834px)": {
      width: convertVw(42),
      height: convertVw(42),
    },
  };
});

const GraphWrap = styled(Box)(() => {
  return {
    gap: "8px",
    width: "100%",
    display: "flex",
    maxWidth: "54px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width:834px)": {
      gap: convertVw(8),
      maxWidth: convertVw(54),
    },
  };
});

const ClassText = styled(motion.div)(() => {
  return {
    fontSize: 25,
    width: "54px",
    fontWeight: 700,
    lineHeight: "150%",
    color: "#464b53",
    textAlign: "center",
    letterSpacing: "-0.5px",
    "@media (max-width:834px)": {
      width: convertVw(54),
      fontSize: convertVw(25),
      letterSpacing: convertVw(-0.5),
    },
  };
});

const GraphBar = styled(motion.div)(() => {
  return {
    width: "48px",
    borderRadius: "12px",
    "@media (max-width:834px)": {
      width: convertVw(48),
      borderRadius: convertVw(12),
    },
  };
});

const BoardContent = styled(motion.div)(() => {
  return {
    gap: "32px",
    width: "100%",
    display: "flex",
    alignItems: "end",
    "@media (max-width:834px)": {
      gap: convertVw(32),
    },
  };
});
