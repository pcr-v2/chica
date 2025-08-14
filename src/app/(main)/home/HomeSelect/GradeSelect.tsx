"use client";

import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

import { convertVw } from "@/utils/convertVw";

interface IProps {
  selected: string;
  schoolLevel: "elementary" | "middle" | "high";
  onClick: (value: string) => void;
}

export default function GradeSelect(props: IProps) {
  const { selected, onClick, schoolLevel } = props;

  const [gradeList, setGradeList] = useState<string[]>([]);

  useEffect(() => {
    if (schoolLevel === "elementary") {
      setGradeList(["1", "2", "3", "4", "5", "6"]);
      return;
    }
    setGradeList(["1", "2", "3"]);
  }, [schoolLevel]);

  return (
    <Wrapper>
      {gradeList.map((grade, idx) => {
        return (
          <GradeBtn
            key={idx}
            isselect={(selected === grade).toString()}
            onClick={() => onClick(grade)}
          >
            {grade}학년
          </GradeBtn>
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
    gridTemplateColumns: "1fr 1fr 1fr",
    "@media (max-width:834px)": {
      gap: convertVw(40),
    },
  };
});

const GradeBtn = styled(Box)<{ isselect: string }>(({ isselect }) => {
  const on = isselect === "true";

  return {
    fontSize: 32,
    fontWeight: 700,
    display: "flex",
    cursor: "pointer",
    lineHeight: "150%",
    alignItems: "center",
    padding: "24px 40px",
    whiteSpace: "nowrap",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.64px",
    transition: "all 0.2s linear",
    color: on ? "#fff" : "#747d8a",
    outline: on ? "4px solid #32C794" : "none",
    backgroundColor: on ? "#6EDBB5" : "#F1F2F3",
    "@media (max-width:834px)": {
      fontSize: convertVw(32),
      letterSpacing: convertVw(-0.64),
      padding: `${convertVw(24)} ${convertVw(40)}`,
      outline: on ? `${convertVw(4)} solid #32C794` : "none",
    },
  };
});
