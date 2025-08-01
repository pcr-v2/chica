"use client";

import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Arrow from "@/assets/summary/board-arrow.svg";

export default function ExecutionBoard() {
  const [open, setOpen] = useState(false);

  const test = [
    {
      class: 1,
      height: 240,
    },
    {
      class: 2,
      height: 200,
    },
    {
      class: 3,
      height: 180,
    },
    {
      class: 4,
      height: 140,
    },
    {
      class: 5,
      height: 120,
    },
    {
      class: 6,
      height: 100,
    },
    {
      class: 7,
      height: 90,
    },
    {
      class: 8,
      height: 80,
    },
    {
      class: 9,
      height: 40,
    },
    {
      class: 10,
      height: 20,
    },
  ];

  return (
    <>
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
              height: open ? 288 : 0,
              marginTop: open ? 24 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "linear",
            }}
          >
            {test.map((el, idx) => {
              return (
                <GraphWrap key={idx}>
                  <GraphBar
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: open ? el.height : 0, opacity: 1 }}
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
                    animate={{ height: open ? 34 : 0, opacity: 1 }}
                  >
                    {el.class}반
                  </ClassText>
                </GraphWrap>
              );
            })}
          </BoardContent>
        </AnimatePresence>
      </Wrapper>
    </>
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
    justifyContent: "center",
    backgroundColor: "#fafafa",
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
  };
});

const ArrowIcon = styled(Arrow)<{ isopen: string }>(({ isopen }) => {
  const isOpen = isopen === "true";

  return {
    transition: "transform 0.3s ease-in-out",
    transform: `rotate(${isOpen ? 180 : 0}deg)`,
  };
});

const GraphWrap = styled(Box)(() => {
  return {
    gap: "8px",
    width: "100%",
    maxWidth: "54px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
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
  };
});

const GraphBar = styled(motion.div)(() => {
  return {
    width: "48px",
    borderRadius: "12px",
  };
});

const BoardContent = styled(motion.div)(() => {
  return {
    gap: "32px",
    width: "100%",
    display: "flex",
    alignItems: "end",
  };
});
