"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { TUserSelectValue, TUserValue } from "@/app/(main)/home/HomeContainer";
import ClassSelect from "@/app/(main)/home/HomeSelect/ClassSelect";
import GradeSelect from "@/app/(main)/home/HomeSelect/GradeSelect";
import NumberSelect from "@/app/(main)/home/HomeSelect/NumberSelect";
import SelectTeeth from "@/app/(main)/home/SelectTeeth";
import SuccessAnimation from "@/app/_components/common/SuccessAnimation";
import { GetMeResponse } from "@/app/actions/auth/getMe";
import { checkBrush } from "@/app/actions/brush/checkBrushAction";
import { getStudentLatestSummary } from "@/app/actions/student/getStudentLatestAction";
// import { getTest } from "@/app/actions/brush/testAction";
import Class from "@/assets/home/class.png";
import Grade from "@/assets/home/grade.png";
import NumberImg from "@/assets/home/number.png";

dayjs.extend(utc);
dayjs.extend(timezone);

const getKoreaTime = () => {
  return dayjs().tz("Asia/Seoul");
};
interface IProps {
  me: GetMeResponse["data"];

  userValue: TUserValue;
  onClickInfo: (value: TUserSelectValue) => void;
}

export default function HomeSelect(props: IProps) {
  const { onClickInfo, userValue, me } = props;

  const router = useRouter();

  const [selectStep, setSelectStep] =
    useState<TUserSelectValue["name"]>("grade");

  useEffect(() => {
    updateSelectStep();
  }, [userValue]);

  const updateSelectStep = () => {
    const { grade, class: cls, number } = userValue;
    setValue("");

    if (!grade && !cls && !number) return setSelectStep("grade");
    if (grade && !cls && !number) return setSelectStep("class");
    if (grade && cls && !number) return setSelectStep("number");
  };

  const [value, setValue] = useState("");
  const isInvalidZero = (val: string) =>
    (val.length === 2 && val.startsWith("0")) ||
    (val.length === 1 && val === "0");

  const [isSuccess, setIsSuccess] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);

  const handleClick = async (v: string) => {
    if (v === "BACKSPACE") return setValue((prev) => prev.slice(0, -1));

    if (v === "OK") {
      if (isInvalidZero(value)) {
        toast.error("번호는 0으로 시작할 수 없습니다.");
        return;
      }

      onClickInfo({ name: "number", value });

      const koreaNow = getKoreaTime();
      const limitTime = koreaNow
        .set("hour", 11)
        .set("minute", 30)
        .set("second", 0);

      if (koreaNow.isBefore(limitTime)) {
        toast.success("양치 체크는 11시 30분 부터 가능합니다.");

        if (
          userValue.grade != null &&
          userValue.class != null &&
          value != null
        ) {
          const res = await getStudentLatestSummary({
            schoolId: me?.schoolId as string,
            studentGrade: Number(userValue.grade),
            studentClass: userValue.class,
            studentNumber: Number(value),
          });

          if (res.code === "SUCCESS") {
            router.replace(`/summary?studentId=${res.data?.studentId}`);
            return;
          }
        }
        return;
      }

      console.log("over updated");

      const updateBrush = await checkBrush({
        schoolId: me?.schoolId as string,
        studentClass: userValue.class as string,
        studentGrade: Number(userValue.grade),
        studentNumber: Number(value),
      });

      // const test = await getTest();

      // console.log("test", test);
      // console.log("updateBrush", updateBrush);

      if (updateBrush.code === "ALREADY") {
        toast.success(updateBrush.message);

        router.replace(`/summary?studentId=${updateBrush.data?.studentId}`);
        return;
      }

      if (updateBrush.code === "NOTTODAY") {
        toast.success(updateBrush.message);

        router.replace(`/summary?studentId=${updateBrush.data?.studentId}`);
        return;
      }

      if (updateBrush.code !== "SUCCESS") {
        toast.success(updateBrush.message);

        router.replace("/");
        return;
      }

      // toast.success(updateBrush.message);
      // <SuccessAnimation />;
      if (updateBrush.code === "SUCCESS") {
        setRedirectUrl(`/summary?studentId=${updateBrush.data?.studentId}`);

        setIsSuccess(true); // 성공 애니메이션 표시

        // setTimeout(() => {
        //   router.replace();
        // }, 1000); // 애니메이션 보여준 후 이동
        return;
      }

      return;
    }

    if (value.length < 2) setValue((prev) => prev + v);
  };

  // teeth에 보여줄 각 자리
  const leftDigit = value.length === 2 ? value[0] : "";
  const rightDigit = value.length >= 1 ? value[value.length - 1] : "";

  const selectedGradeClassList =
    me?.classList
      .find((item) => item.grade === userValue.grade)
      ?.class?.sort((a: string, b: string) => Number(a) - Number(b)) ?? [];
  // console.log("selectedGradeClassList", selectedGradeClassList);
  return (
    <Wrapper>
      {isSuccess && <SuccessAnimation redirectUrl={redirectUrl ?? undefined} />}

      {selectStep === "grade" && (
        <>
          <TitleImg src={Grade.src} alt="title1" />
          <GradeSelect
            onClick={(v) => {
              onClickInfo({ name: "grade", value: v });
              setSelectStep("class");
            }}
            // schoolLevel="elementary"
            schoolLevel={me?.schoolLevel as "elementary" | "middle" | "high"}
            selected={value}
          />
        </>
      )}

      {selectStep === "class" && (
        <>
          <TitleImg src={Class.src} alt="title2" />
          <ClassSelect
            onClick={(v) => {
              onClickInfo({ name: "class", value: v });
              setSelectStep("number");
            }}
            selected={value}
            classList={selectedGradeClassList}
          />
        </>
      )}

      {selectStep === "number" && (
        <>
          <NumberTopWrap>
            <TitleImg src={NumberImg.src} alt="title3" />
            <Box sx={{ display: "flex", gap: "24px" }}>
              {[leftDigit, rightDigit].map((digit, idx) => (
                <TeethWrapper key={idx}>
                  <SelectTeeth
                    fillColor={digit ? "#6EDBB5" : "#FAFAFA"}
                    strokeColor={digit ? "#32C794" : "#D5D7DB"}
                  />
                  {digit && (
                    <DigitText
                      key={`${digit}-${idx}`}
                      initial={{ scale: 0.5, y: -20, opacity: 0.5 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      {digit}
                    </DigitText>
                  )}
                </TeethWrapper>
              ))}
            </Box>
          </NumberTopWrap>
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

const NumberTopWrap = styled(Box)(() => {
  return {
    gap: "24px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});
