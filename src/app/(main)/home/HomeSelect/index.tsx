"use client";

import { Box, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import toast from "react-hot-toast";

import { TUserSelectValue } from "@/app/(main)/home/HomeContainer";
import ClassSelect from "@/app/(main)/home/HomeSelect/ClassSelect";
import GradeSelect from "@/app/(main)/home/HomeSelect/GradeSelect";
import NumberSelect from "@/app/(main)/home/HomeSelect/NumberSelect";
import SelectTeeth from "@/app/(main)/home/SelectTeeth";
import Class from "@/assets/home/class.png";
import Grade from "@/assets/home/grade.png";
import Number from "@/assets/home/number.png";
import SelectNumber from "@/assets/home/select-number.svg";

interface IProps {
  onClickInfo: (value: TUserSelectValue) => void;
}

export default function HomeSelect(props: IProps) {
  const { onClickInfo } = props;

  const [selectStep, setSelectStep] =
    useState<TUserSelectValue["name"]>("class");

  const [value, setValue] = useState(""); // 최대 2자리까지 입력됨

  // 숫자 입력
  const handleClick = (v: string) => {
    console.log(value);

    if (v === "BACKSPACE") {
      setValue((prev) => prev.slice(0, -1));
    } else if (v === "OK") {
      // 완료 로직 실행

      if (value.length === 2 && value.slice(0, 1) === "0") {
        toast.error("번호는 0으로 시작 할 수 없습니다.");
        return;
      }

      if (value.length === 1 && value.slice(0, 1) === "0") {
        toast.error("0번은 존재 할 수 없습니다.");
        return;
      }
    } else {
      if (value.length === 2) {
        return;
      }
      setValue((prev) => prev + v);
    }
  };

  // teeth에 보여줄 각 자리
  const leftDigit = value.length === 2 ? value[0] : "";
  const rightDigit = value.length >= 1 ? value[value.length - 1] : "";

  return (
    <Wrapper>
      {selectStep === "grade" && (
        <>
          <TitleImg src={Grade.src} alt="title1" />
          <GradeSelect
            onClick={(v) => setValue(v)}
            schoolLevel="elementary"
            selected={value}
          />
        </>
      )}
      {selectStep === "class" && (
        <>
          <TitleImg src={Class.src} alt="title2" />
          <ClassSelect
            onClick={(v) => setValue(v)}
            selected={value}
            classList={["a", "b", "c", "d", "e", "f", "g", "h", "i"]}
          />
        </>
      )}
      {selectStep === "number" && (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TitleImg src={Number.src} alt="title3" />
            <Box sx={{ display: "flex", gap: "24px" }}>
              <TeethWrapper>
                <SelectTeeth
                  fillColor={value.length === 2 ? "#6EDBB5" : "#FAFAFA"}
                  strokeColor={value.length === 2 ? "#32C794" : "#D5D7DB"}
                />
                {value.length === 2 && (
                  <DigitText
                    key={leftDigit}
                    initial={{ scale: 0.5, y: -20, opacity: 0.5 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {leftDigit}
                  </DigitText>
                )}
              </TeethWrapper>
              <TeethWrapper>
                <SelectTeeth
                  fillColor={value.length >= 1 ? "#6EDBB5" : "#FAFAFA"}
                  strokeColor={value.length >= 1 ? "#32C794" : "#D5D7DB"}
                />
                {value.length >= 1 && (
                  <DigitText
                    key={rightDigit}
                    initial={{ scale: 0.5, y: -20, opacity: 0.5 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {rightDigit}
                  </DigitText>
                )}
              </TeethWrapper>
            </Box>
          </Box>
          <NumberSelect onClick={handleClick} activeOk={value.length >= 1} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "64px",
    flexGrow: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "start",
    padding: "64px 64px 48px",

    border: "1px solid blue",
  };
});

const TitleImg = styled("img")(() => {
  return {
    width: "100%",
  };
});

const TeethWrapper = styled(Box)(() => ({
  width: "120px",
  height: "120px",
  textAlign: "center",
  position: "relative",
}));

const DigitText = styled(motion.div)(() => ({
  top: 24,
  left: 40,
  fontSize: 48,
  width: "40px",
  fontWeight: 800,
  color: "#fff",
  lineHeight: "150%",
  position: "absolute",
  pointerEvents: "none",
  letterSpacing: "-0.96px",
}));
