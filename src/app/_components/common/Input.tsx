"use client";

import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  InputAdornment,
  styled,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { useState } from "react";

type IProps = TextFieldProps & {
  value: string;
  showCancel?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: IProps) {
  const { type = "text", value, onChange, showCancel = false } = props;

  const [showPassword, setShowPassword] = useState(type !== "password");

  function createSyntheticEvent(value: string, id: string) {
    return {
      target: { value, id } as HTMLInputElement,
    } as React.ChangeEvent<HTMLInputElement>;
  }

  return (
    <StyledTextField
      {...props}
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
    fontSize: 16,
    padding: "12px",
  },
  "& .MuiFilledInput-root": {
    borderRadius: 4,
    overflow: "hidden",
    border: "1px solid",
    borderColor: theme.palette.mode === "light" ? "rgba(0,0,0,0.3)" : "#2D3843",
    backgroundColor: "#fff",
    transition: theme.transitions.create([
      "box-shadow",
      "border-color",
      "background-color",
    ]),
    "&:hover": { backgroundColor: "#fff" },

    "&.Mui-focused": {
      borderWidth: "1px",
      backgroundColor: "#fff",
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Cancel = styled(CancelIcon)(() => ({
  cursor: "pointer",
  width: "24px",
  height: "24px",
}));
const Eye = styled(VisibilityIcon)(() => ({ cursor: "pointer" }));
const OffEye = styled(VisibilityOffIcon)(() => ({ cursor: "pointer" }));
