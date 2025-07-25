"use client";

import { Box, styled } from "@mui/material";

interface IProps {
  selected: string;
  classList: string[];
  onClick: (value: string) => void;
}

export default function ClassSelect(props: IProps) {
  const { selected, classList, onClick } = props;

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
  };
});

const ClassBtn = styled(Box)<{ isselect: string }>(({ isselect }) => {
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
