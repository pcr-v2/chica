"use client";

import { Box, styled } from "@mui/material";
import React from "react";

import LeftArrow from "@/assets/home/numberpad-arrow.svg";

interface IProps {
  activeOk: boolean;
  onClick: (value: string) => void;
}

export default function NumberSelect(props: IProps) {
  const { onClick, activeOk } = props;

  console.log("activeOk", activeOk);

  const numberPad = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "BACKSPACE",
    "0",
    "OK", // 문자열로 처리
  ];

  return (
    <Wrapper>
      {numberPad.map((pad, idx) => {
        const isIcon = pad === "BACKSPACE";
        return (
          <NumberBtn
            key={idx}
            onClick={() => {
              if (!activeOk && pad === "OK") {
                return;
              }
              onClick(pad);
            }}
          >
            {isIcon ? <LeftArrow /> : pad}
          </NumberBtn>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "grid",
    maxWidth: "417px",
    gridTemplateColumns: "1fr 1fr 1fr",
  };
});

const NumberBtn = styled(Box)(() => {
  return {
    fontSize: 40,
    display: "flex",
    fontWeight: 800,
    color: "#747d8a",
    lineHeight: "150%",
    alignItems: "center",
    padding: "32px 34px",
    borderRadius: "100%",
    letterSpacing: "-0.8px",
    justifyContent: "center",
    backgroundColor: "#F1F2F3",
  };
});
