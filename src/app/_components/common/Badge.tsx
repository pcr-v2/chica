"use client";

import { Chip, styled } from "@mui/material";

interface IProps {
  label: string;
  color:
    | "default"
    | "error"
    | "info"
    | "primary"
    | "success"
    | "secondary"
    | "warning";
}

export default function Badge(props: IProps) {
  const { label, color } = props;

  return <ChipST color={color} label={label} />;
}

const ChipST = styled(Chip)(() => {
  return {
    fontSize: 14,
    padding: "8px",
    color: "#fff",
    fontWeight: 500,
    letterSpacing: "-0.12px",
  };
});
