"use client";

import { Box, styled } from "@mui/material";
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

  return (
    <Wrapper>
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
