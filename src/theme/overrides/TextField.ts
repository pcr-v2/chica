import { Components, Theme } from "@mui/material";

const MuiTextField: Components<Theme> = {
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "12px",
        "& .MuiFormHelperText-root.Mui-error": {
          fontSize: "12px",
        },

        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          height: "52px",
          "& fieldset": {
            // border: "1.5px solid",
            // borderColor: theme.palette.line01.main,
          },
          "&:hover fieldset": {
            // border: "1.5px solid",
            borderColor: theme.palette.grey[400],
          },
          "&.Mui-focused fieldset": {
            border: "1.5px solid",
            // borderColor: theme.palette.text02.main,
          },
          "& input": {
            padding: "12px",
          },
        },
        "& .MuiOutlinedInput-root.Mui-disabled": {
          // backgroundColor: theme.palette.background03.main,
          // borderColor: theme.palette.line01.main,
          // color: theme.palette.text05.main,
        },

        "& .MuiInputBase-sizeLarge": {
          height: "52px",
        },
        "& .MuiInputBase-sizeSmall": {
          height: "44px",
        },

        "@media (max-width: 600px)": {
          "& input": {
            fontSize: "14px",
          },
        },
      }),
    },
  },
};

export default MuiTextField;
