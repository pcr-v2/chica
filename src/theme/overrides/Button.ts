import { Components, Theme } from "@mui/material";

const MuiButton: Components<Theme> = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }) => ({
        borderRadius: "32px",
        textTransform: "none",
        fontWeight: 800,
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            boxShadow: "none",
          },
        },
      }),
      contained: ({ theme }) => ({
        fontSize: "16px",
        ":disabled": {
          backgroundColor: theme.palette.grey[200],
          // color: theme.palette.text04.main,
        },
      }),
      containedSizeLarge: {
        display: "inline-flex",
        height: "52px",
        minWidth: "90px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
        fontSize: "18px",
      },
      containedSizeMedium: {
        display: "inline-flex",
        height: "44px",
        minWidth: "90px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        fontSize: "16px",
        flexShrink: 0,
      },
      containedSizeSmall: {
        display: "inline-flex",
        height: "36px",
        minWidth: "72px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        flexShrink: 0,
        fontSize: "14px",
        lineHeight: "20px",
      },
      containedPrimary: ({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          // backgroundColor: theme.palette.primaryPress.main,
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // backgroundColor: theme.palette.primaryPress.main,
          },
        },
      }),
      containedSecondary: ({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        color: "white",
        "&:hover": {
          // backgroundColor: theme.palette.secondaryPress.main,
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // backgroundColor: theme.palette.secondaryPress.main,
          },
        },
      }),
      containedError: ({ theme }) => ({
        backgroundColor: theme.palette.error.main,
        "&:hover": {
          // backgroundColor: theme.palette.errorPress.main,
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // backgroundColor: theme.palette.errorPress.main,
          },
        },
      }),
      containedInfo: ({ theme }) => ({
        backgroundColor: theme.palette.grey[800],
        "&:hover": {
          backgroundColor: theme.palette.grey[600],
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            backgroundColor: theme.palette.grey[600],
          },
        },
      }),

      outlined: ({ theme }) => ({
        fontSize: "16px",
        // marginLeft: "10px",
        ":disabled": {
          // border: `1px solid ${theme.palette.line01.main}`,
          backgroundColor: "transparent !important",
          background: "none",
          // color: theme.palette.text04.main,
        },
      }),
      outlinedSizeLarge: {
        display: "inline-flex",
        height: "52px",
        minWidth: "90px",
        fontSize: "18px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
      },
      outlinedSizeMedium: {
        display: "inline-flex",
        height: "44px",
        minWidth: "90px",
        fontsize: "16px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
      },
      outlinedSizeSmall: {
        display: "inline-flex",
        height: "36px",
        minWidth: "72px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        flexShrink: 0,
        fontSize: "14px",
        lineHeight: "20px",
      },

      outlinedPrimary: ({ theme }) => ({
        color: theme.palette.primary.main,
        border: `1px solid ${theme.palette.primary.main}`,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // border: `1px solid ${theme.palette.primaryPress.main}`,
            backgroundColor: "transparent",
            // color: theme.palette.primaryPress.main,
          },
        },
      }),
      outlinedSecondary: ({ theme }) => ({
        color: theme.palette.secondary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // border: `1px solid ${theme.palette.secondaryPress.main}`,
            backgroundColor: "transparent",
            // color: theme.palette.secondaryPress.main,
          },
        },
      }),
      outlinedError: ({ theme }) => ({
        color: theme.palette.error.main,
        border: `1px solid ${theme.palette.error.main}`,
        "&:hover": {
          backgroundColor: "transparent",
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            // border: `1px solid ${theme.palette.errorPress.main}`,
            backgroundColor: "transparent",
            // color: theme.palette.errorPress.main,
          },
        },
      }),
      outlinedInfo: ({ theme }) => ({
        color: theme.palette.grey[800],
        border: `1px solid ${theme.palette.grey[800]}`,
        "&:hover": {
          border: `1px solid ${theme.palette.grey[600]}`,
          backgroundColor: "transparent",
        },
        "@media (hover: hover) and (pointer:fine)": {
          "&:hover": {
            border: `1px solid ${theme.palette.grey[600]}`,
            backgroundColor: "transparent",
            color: theme.palette.grey[600],
          },
        },
      }),

      text: ({ theme }) => ({
        fontSize: "16px",
        // marginLeft: "10px",
        ":disabled": {
          backgroundColor: "transparent",
          // color: theme.palette.text04.main,
        },
      }),

      textSizeLarge: {
        display: "inline-flex",
        height: "52px",
        minWidth: "90px",
        fontsize: "18px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
      },
      textSizeMedium: {
        display: "inline-flex",
        height: "44px",
        minWidth: "90px",
        fontsize: "16px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "4px",
        flexShrink: 0,
      },
      textSizeSmall: {
        display: "inline-flex",
        height: "36px",
        minWidth: "72px",
        padding: "10px 16px",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px",
        flexShrink: 0,
        fontSize: "14px",
        lineHeight: "20px",
      },

      textPrimary: ({ theme }) => ({
        color: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: "transparent",
          // color: theme.palette.primaryPress.main,
        },
      }),
      textSecondary: ({ theme }) => ({
        color: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: "transparent",
          // color: theme.palette.secondaryPress.main,
        },
      }),
      textError: ({ theme }) => ({
        color: theme.palette.error.main,
        "&:hover": {
          backgroundColor: "transparent",
          // color: theme.palette.errorPress.main,
        },
      }),
      textInfo: ({ theme }) => ({
        color: theme.palette.grey[800],
        "&:hover": {
          backgroundColor: "transparent",
          color: theme.palette.grey[600],
        },
      }),
    },
  },
};
export default MuiButton;
