"use client";

import { Box, Button, styled } from "@mui/material";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

import HomeMenu from "@/app/(main)/home/HomeMenu";
import HomeSelect from "@/app/(main)/home/HomeSelect";
import MealContent from "@/app/(main)/home/MealContent";
import Modal from "@/app/_components/common/Modal";
import HomeHeader from "@/app/_components/layout/Headers/HomeHeader";
import { GetMeResponse } from "@/app/actions/auth/getMe";
import { getMeal, Meal } from "@/app/actions/meal/getMeal";
import testAction from "@/app/actions/testAction";
import { useScreenSaverStore } from "@/store/useScreenSaverStore";

dayjs.extend(utc);
dayjs.extend(timezone);

const getKoreaTime = () => {
  return dayjs().tz("Asia/Seoul");
};

export type TUserValue = {
  grade: string | null;
  class: string | null;
  number: string | null;
};

export type TUserSelectValue = {
  name: "grade" | "class" | "number";
  value: string;
};

interface IProps {
  me: GetMeResponse;
}

export default function HomeContainer(props: IProps) {
  const { me } = props;
  // console.log("me", me);

  const [open, setOpen] = useState(false);
  const [mealRes, setMealRes] = useState<Meal[]>();

  const [userValue, setUserValue] = useState<TUserValue>({
    grade: null,
    class: null,
    number: null,
  });

  // console.log("userValue", userValue);

  const handleMeal = async () => {
    const res = await getMeal({ schoolId: me.data?.schoolId as string });
    if (res.code === "FAIL") {
      toast.success(res.message);
      return;
    }

    setMealRes(res.result);
    setOpen(true);
  };

  const isActive = useScreenSaverStore((s) => s.isActive);
  // console.log("isActive", isActive);
  return (
    <Wrapper
      style={{
        display: isActive ? "none" : "unset",
      }}
    >
      {/* 
      // 배치 테스트 용
      <Button
        variant="contained"
        onClick={async () => {
          await testAction();
        }}
      >
        TEST
      </Button> */}
      <HomeHeader
        grade={userValue.grade}
        classNum={userValue.class}
        onClickGoMain={() =>
          setUserValue({ grade: null, class: null, number: null })
        }
      />

      {userValue.grade === null && <HomeMenu onClick={handleMeal} />}

      <HomeSelect
        me={me?.data}
        userValue={userValue}
        onClickInfo={(value: TUserSelectValue) => {
          if (isActive) return;

          // const koreaNow = getKoreaTime();
          // const limitTime = koreaNow
          //   .set("hour", 11)
          //   .set("minute", 30)
          //   .set("second", 0);

          // if (koreaNow.isBefore(limitTime)) {
          //   toast.success("양치 체크는 11시 30분 부터 가능합니다.");
          //   setUserValue({ grade: null, class: null, number: null });
          //   return;
          // }

          if (value.name === "grade") {
            setUserValue({
              ...userValue,
              grade: value.value,
              class: null,
              number: null,
            });
          } else if (value.name === "class") {
            setUserValue({ ...userValue, class: value.value, number: null });
          } else {
            setUserValue({ ...userValue, number: value.value });
          }
        }}
      />

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        children={<MealContent meal={mealRes ?? []} />}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    flexGrow: 1,
    width: "100%",
    display: "flex",
    maxWidth: "834px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  };
});
