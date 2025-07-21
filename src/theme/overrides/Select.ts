import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Components, Theme } from "@mui/material";

const MuiSelect: Components<Theme> = {
  MuiSelect: {
    defaultProps: {
      IconComponent: KeyboardArrowDownIcon,
      MenuProps: {
        slotProps: {
          paper: {
            style: {
              borderRadius: "12px",
              maxHeight: "200px",
            },
          },
        },
      },
    },
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "12px",

        "& .MuiSvgIcon-root": {
          color: "#9E9E9E",
        },
        "&.MuiOutlinedInput-root": {
          height: "52px",
          border: `1.5px solid #e0e0e0`,

          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
          },
        },
        "&.MuiInputBase-sizeLarge": {
          height: "52px",
        },
        "&.MuiInputBase-sizeSmall": {
          height: "44px",
        },
        ".MuiSelect-iconOutlined": {
          width: "24px",
          height: "24px",
          right: "10px",
          top: "calc(50% - 12px)",
        },
      }),
    },
  },
};

export default MuiSelect;
