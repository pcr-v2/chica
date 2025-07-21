import { Components, Theme } from "@mui/material";

const MuiAccordion: Components<Theme> = {
  MuiAccordion: {
    styleOverrides: {
      root: ({ theme }) => ({
        "&.MuiPaper-root": {
          margin: 0,
          width: "100%",
          padding: "24px",
          boxShadow: "none",
          borderRadius: "16px",
          border: `2.5px solid ${theme.palette.grey[200]}`,
          // [theme.breakpoints.down("sm")]: {
          //   maxWidth: "312px",
          // },
          [theme.breakpoints.between("sm", "md")]: {
            maxWidth: "552px",
          },
          [theme.breakpoints.between("md", "lg")]: {
            maxWidth: "632px",
          },
          [theme.breakpoints.up("lg")]: {
            maxWidth: "760px",
          },
        },
        "&.MuiAccordion-root::before": {
          margin: 0,
          padding: 0,
          backgroundColor: "transparent",
        },
        "& .MuiAccordionSummary-root": {
          margin: 0,
          padding: 0,
          minHeight: "auto",
          alignItems: "start",
        },
        "& .MuiAccordionSummary-content": {
          margin: 0,
          padding: 0,
          display: "flex",
          "&.Mui-expanded": {
            margin: 0,
          },
        },
        "& .MuiAccordionSummary-content::before": {
          margin: 0,
          padding: 0,
        },
        "& .MuiAccordionSummary-content::after": {
          margin: 0,
          padding: 0,
        },
        "& .MuiAccordionDetails-root": {
          padding: 0,
          // margin: "16px 0px 0px 0px",
        },
        "& .MuiCollapse-root": {
          // marginTop: "16px",
          // borderTop: "1px solid #e0e0e0",
        },
        "& .MuiCollapse-wrapperInner": {
          marginTop: "16px",
          paddingTop: "16px",
          borderTop: "1px solid #e0e0e0",
        },
        "& .MuiSvgIcon-root": {
          color: "#212121",
        },
        "& .MuiTypography-root": {
          // color: "#212121",
        },
      }),
    },
  },
};

export default MuiAccordion;
