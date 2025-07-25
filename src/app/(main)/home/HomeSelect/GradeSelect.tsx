"use client";

import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

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
  };
});

const GradeBtn = styled(Box)<{ isselect: string }>(({ isselect }) => {
  const on = isselect === "true";

  return {
    fontSize: 32,
    fontWeight: 700,
    display: "flex",
    lineHeight: "150%",
    alignItems: "center",
    padding: "24px 40px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.64px",
    transition: "all 0.2s linear",
    color: on ? "#fff" : "#747d8a",
    outline: on ? "4px solid #32C794" : "none",
    backgroundColor: on ? "#6EDBB5" : "#F1F2F3",
  };
});
