"use client";

import { Box, styled } from "@mui/material";
import { useEffect } from "react";

import { convertVw } from "@/utils/convertVw";

interface IProps {
  selected: string;
  classList: string[];
  onClick: (value: string) => void;
}

export default function ClassSelect(props: IProps) {
  const { selected, classList, onClick } = props;

  useEffect(() => {
    if (classList && classList.length === 1) {
      onClick(classList[0]);
    }
  }, [classList]);

  return (
    <Wrapper>
      {classList.map((cls, idx) => {
        return (
          <ClassBtn
            key={idx}
            isselect={(cls === selected).toString()}
            onClick={() => onClick(cls)}
          >
            {cls}반
          </ClassBtn>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    "@media (max-width:834px)": {
      gap: convertVw(40),
    },
  };
});

const ClassBtn = styled(Box)<{ isselect: string }>(({ isselect }) => {
  const on = isselect === "true";

  return {
    fontSize: 32,
    padding: "24px",
    fontWeight: 700,
    display: "flex",
    cursor: "pointer",
    lineHeight: "150%",
    alignItems: "center",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.64px",
    transition: "all 0.2s linear",
    color: on ? "#fff" : "#747d8a",
    outline: on ? "4px solid #32C794" : "none",
    backgroundColor: on ? "#6EDBB5" : "#F1F2F3",
    "@media (max-width:834px)": {
      fontSize: convertVw(32),
      padding: `${convertVw(24)}`,
      letterSpacing: convertVw(-0.64),
      outline: on ? `${convertVw(4)} solid #32C794` : "none",
    },
  };
});
