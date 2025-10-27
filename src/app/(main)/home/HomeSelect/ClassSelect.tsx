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

  const sortedClassList = [...classList].sort((a, b) =>
    a.localeCompare(b, "ko-KR"),
  );

  useEffect(() => {
    if (sortedClassList && sortedClassList.length === 1) {
      onClick(sortedClassList[0]);
    }
  }, [sortedClassList]);

  return (
    <Wrapper>
      {sortedClassList.map((cls, idx) => {
        const isKrcls = /^[ㄱ-ㅎㅏ-ㅣ가-힣\s]+$/.test(cls.trim());
        return (
          <ClassBtn
            key={idx}
            isselect={(cls === selected).toString()}
            onClick={() => onClick(cls)}
            iskrcls={isKrcls.toString()}
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

const ClassBtn = styled(Box)<{ isselect: string; iskrcls: string }>(({
  isselect,
  iskrcls,
}) => {
  const on = isselect === "true";

  return {
    fontSize: iskrcls === "true" ? 24 : 32,
    padding: iskrcls === "true" ? "20px" : "24px",
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
      fontSize: iskrcls === "true" ? convertVw(20) : convertVw(32),
      padding: iskrcls === "true" ? convertVw(20) : `${convertVw(24)}`,
      letterSpacing: convertVw(-0.64),
      outline: on ? `${convertVw(4)} solid #32C794` : "none",
    },
  };
});
