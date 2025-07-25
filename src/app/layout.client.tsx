"use client";

import { Box, styled, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactNode, useEffect, useState } from "react";

import { RootToast } from "@/app/_components/RootToast";
import MainSplash from "@/app/_components/common/MainSplash";
import theme from "@/theme";

interface IProps {
  children: ReactNode;
}

export default function ClientLayout(props: IProps) {
  const { children } = props;

  // 스플레시 로컬스토리지에 시간저장필요
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    if (showSplash) {
      setTimeout(() => {
        setShowSplash(false);
      }, 5000);
    }
  }, []);

  return (
    <AppRouterCacheProvider options={{ enableCssLayer: false, prepend: false }}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ko"}>
          <ChildrenWrap>{showSplash ? <MainSplash /> : children}</ChildrenWrap>
        </LocalizationProvider>
        <CssBaseline />
        <RootToast />
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

const ChildrenWrap = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});
