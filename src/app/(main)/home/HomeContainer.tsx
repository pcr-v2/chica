"use client";

import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

import HomeMenu from "@/app/(main)/home/HomeMenu";
import HomeSelect from "@/app/(main)/home/HomeSelect";
import Input from "@/app/_components/common/Input";

type TUserValue = {
  grade: number | null;
  class: number | null;
  number: number | null;
};

export type TUserSelectValue = {
  name: "grade" | "class" | "number";
  value: number;
};

export default function HomeContainer() {
  const router = useRouter();

  const [userValue, setUserValue] = useState<TUserValue>({
    grade: null,
    class: null,
    number: null,
  });

  return (
    <Wrapper>
      {userValue.grade === null && <HomeMenu />}

      <HomeSelect
        onClickInfo={(value: TUserSelectValue) => {
          console.log(value);
        }}
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
    border: "1px solid red",
    justifyContent: "space-between",
  };
});

const GradeBox = styled(Box)(() => {
  return {
    width: "100%",
    display: "grid",
    maxWidth: "956px",
    border: "2px solid red",
    gridTemplateColumns: "1fr 1fr",
  };
});
