"use client";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

import CancelIcon from "@/assets/icon/cancel.svg";

type IProps = TextFieldProps & {
  value: string;
  showCancel?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: IProps) {
  const {
    type = "text",
    value,
    onChange,
    showCancel = false,
    ...restProps
  } = props;

  const [showPassword, setShowPassword] = useState(type !== "password");

  function createSyntheticEvent(value: string, id: string) {
    return {
      target: { value, id } as HTMLInputElement,
    } as React.ChangeEvent<HTMLInputElement>;
  }

  return (
    <StyledTextField
      {...restProps}
      variant="filled"
      type={type === "password" && !showPassword ? "password" : "text"}
      value={value}
      onChange={onChange}
      autoComplete="off"
      slotProps={{
        inputLabel: { shrink: true },
        input: {
          disableUnderline: true,
          endAdornment: value.length > 0 && (
            <InputAdornment position="end">
              {showCancel && (
                <Cancel
                  onClick={() => onChange(createSyntheticEvent("", props.id!))}
                />
              )}

              {type === "password" &&
                (!showPassword ? (
                  <Eye onClick={() => setShowPassword(true)} />
                ) : (
                  <OffEye onClick={() => setShowPassword(false)} />
                ))}
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input.MuiInputBase-input": {
    fontSize: 32,
    fontWeight: 700,
    color: "#464B53",
    padding: "24px 32px",
    letterSpacing: "-0.64px",
    backgroundColor: "#FAFAFA",
    fontFamily: "NanumSquareRound",
  },
  "& .MuiFilledInput-root": {
    borderRadius: 12,
    overflow: "hidden",
    border: "none",
    backgroundColor: "#FAFAFA",
    transition: theme.transitions.create([
      "box-shadow",
      "border-color",
      "background-color",
    ]),
    "&:hover": { backgroundColor: "#FAFAFA" },

    "&.Mui-focused": {
      borderWidth: "1px",
      backgroundColor: "#FAFAFA",
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Cancel = styled(CancelIcon)(() => ({
  width: "48px",
  height: "48px",
  cursor: "pointer",
}));

const Eye = styled(VisibilityIcon)(() => ({
  width: "44px",
  height: "44px",
  cursor: "pointer",
  paddingRight: "6px",
}));
const OffEye = styled(VisibilityOffIcon)(() => ({
  width: "44px",
  height: "44px",
  cursor: "pointer",
  paddingRight: "6px",
}));
