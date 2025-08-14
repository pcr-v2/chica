"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";

import Calendar from "@/assets/summary/calendar.svg";
import { convertVw } from "@/utils/convertVw";

interface IProps {
  count: number;
  onClick: () => void;
}

export default function SummaryHeader(props: IProps) {
  const { onClick, count } = props;

  const router = useRouter();

  return (
    <Wrapper>
      <CalendarBtn onClick={onClick}>
        <CalendarIcon />
      </CalendarBtn>

      <CountDownText>
        <span style={{ color: "#32C794", fontWeight: 900 }}>{count}</span>초 뒤
        자동으로 처음으로 이동합니다.
      </CountDownText>

      <DoneBtn onClick={() => router.replace("/home")}>완료</DoneBtn>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "105px 64px 24px",
    justifyContent: "space-between",
    "@media (max-width:834px)": {
      padding: `${convertVw(105)} ${convertVw(64)} ${convertVw(24)}`,
    },
  };
});

const CountDownText = styled("span")(() => ({
  fontSize: 21,
  fontWeight: 700,
  lineHeight: "150%",
  color: "#747D8A",
  letterSpacing: "-0.42px",
  "@media (max-width:834px)": {
    fontSize: convertVw(21),
    letterSpacing: convertVw(-0.42),
  },
}));

const CalendarBtn = styled(Box)(() => {
  return {
    fontSize: 21,
    display: "flex",
    fontWeight: 800,
    cursor: "pointer",
    color: "#747d8a",
    lineHeight: "150%",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.42px",
    backgroundColor: "#fff",
    backdropFilter: "blur(4px)",
    border: "2px solid #D5D7DB",
    "@media (max-width:834px)": {
      fontSize: convertVw(21),
      letterSpacing: convertVw(-0.42),
      border: `${convertVw(2)} solid #D5D7DB`,
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});

const CalendarIcon = styled(Calendar)(() => {
  return {
    height: "28px",
    minWidth: "28px",
    "@media (max-width:834px)": {
      height: convertVw(28),
      minWidth: convertVw(28),
    },
  };
});

const DoneBtn = styled(Box)(() => {
  return {
    fontSize: 21,
    width: "100px",
    display: "flex",
    fontWeight: 800,
    cursor: "pointer",
    color: "#747d8a",
    lineHeight: "150%",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.42px",
    backgroundColor: "#fff",
    backdropFilter: "blur(4px)",
    border: "2px solid #D5D7DB",
    "@media (max-width:834px)": {
      width: convertVw(100),
      fontSize: convertVw(21),
      letterSpacing: convertVw(-0.42),
      border: `${convertVw(2)} solid #D5D7DB`,
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});
