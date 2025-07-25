"use client";

import { Box, styled } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MainStep from "@/app/_components/layout/Header/MainStep";
import SelectInfoStep from "@/app/_components/layout/Header/SelectInfoStep";

type TStep = "home" | "selectInfo" | "complete" | "rank";

export default function Header() {
  const path = usePathname();

  console.log("path", path);

  const [step, setStep] = useState<TStep>("home");

  useEffect(() => {
    if (path === "/home") {
      setStep("home");
    } else if (path === "/student") {
      setStep("selectInfo");
    } else if (path === "/complete") {
      setStep("complete");
    } else if (path === "/rank") {
      setStep("rank");
    }
  }, [path]);

  return (
    <Wrapper>
      {step === "home" && <MainStep />}
      {step === "selectInfo" && <>셀렉</>}
      {step === "complete" && <>완료</>}
      {step === "rank" && <>랭크</>}
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    zIndex: 2,
    width: "100%",
    display: "flex",
    maxWidth: "834px",
    alignItems: "center",
    justifyContent: "center",
    padding: "72px 64px 24px",
  };
});
