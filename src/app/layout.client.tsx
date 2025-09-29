"use client";

import { Box, styled, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRouter } from "next/navigation";
import { ReactNode, useCallback, useEffect, useState } from "react";

import QueryClientProviders from "@/app/QueryClientProviders";
import { RootToast } from "@/app/_components/RootToast";
import theme from "@/theme";
import { checkNetwork } from "@/utils/checkNetwork";

interface IProps {
  children: ReactNode;
}

export default function ClientLayout(props: IProps) {
  const { children } = props;

  // const router = useRouter();
  // const [isOnline, setIsOnline] = useState(true);

  // useEffect(() => {
  //   const runCheck = async () => {
  //     const ok = await checkNetwork();
  //     setIsOnline(ok);
  //   };

  //   runCheck();

  //   const handleOnline = () => setIsOnline(true);
  //   const handleOffline = () => setIsOnline(false);

  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);

  //   const intervalId = setInterval(runCheck, 60_000);

  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //     clearInterval(intervalId);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!isOnline) {
  //   router.push("/network-error");

  //   return;
  //   }

  //   router.replace("/");
  // }, [isOnline, router]);

  return (
    <QueryClientProviders>
      {/* <ReactQueryDevtools position="bottom" /> */}

      <AppRouterCacheProvider
        options={{ enableCssLayer: false, prepend: false }}
      >
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ko"}>
            <ChildrenWrap>{children}</ChildrenWrap>
          </LocalizationProvider>
          <CssBaseline />
          <RootToast />
        </ThemeProvider>
      </AppRouterCacheProvider>
    </QueryClientProviders>
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
