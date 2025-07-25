"use client";

import { styled } from "@mui/material";
import { useEffect } from "react";
import toast, { Toaster, useToasterStore } from "react-hot-toast";

import Info from "@/public/images/icons/info.svg";

export function RootToast({
  max = 2,
  ...props
}: React.ComponentProps<typeof Toaster> & {
  max?: number;
}) {
  const { toasts } = useToasterStore();

  useEffect(() => {
    toasts
      .filter((t) => t.visible) // Only consider visible toasts
      .filter((_, i) => i >= max) // Is toast index over limit?
      .forEach((t) => toast.dismiss(t.id)); // Dismiss – Use toast.remove(t.id) for no exit animation
  }, [toasts, max]);

  return (
    <Toaster
      position="top-center"
      containerStyle={{
        width: "auto",
        maxWidth: "none",
      }}
      toastOptions={{
        icon: <InfoImg />,
        style: {
          fontSize: 20,
          fontWeight: 700,
          color: "#fff",
          maxWidth: "none",
          lineHeight: "160%",
          padding: "8px 16px",
          textAlign: "center",
          whiteSpace: "nowrap",
          alignItems: "center",
          display: "inline-flex",
          justifyContent: "center",
          letterSpacing: "-0.16px",
          backgroundColor: "#424242",
        },
        success: {
          style: {
            color: "#fff",
            backgroundColor: "#43A047",
          },
        },
        error: {
          style: {
            color: "#fff",
            backgroundColor: "#F44336",
          },
        },
      }}
      {...props}
    />
  );
}

const InfoImg = styled(Info)(() => {
  return {
    width: "24px",
    height: "24px",
  };
});
