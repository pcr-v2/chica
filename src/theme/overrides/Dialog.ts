import { Components } from "@mui/material";

const MuiDialog: Components = {
  MuiDialog: {
    styleOverrides: {
      root: {
        // 2023/11/29 : DatePicker Mobile 버전 일 때 왼쪽에 노출 되는 화면 제거
        // Mobile 일 때 Dialog를 통해 노출 되기 때문에 Dialog에서 처리 해준다.
        "& .MuiPickersToolbar-root ": {
          display: "none",
        },
        "& .MuiPaper-root": {
          borderRadius: "24px",
        },
      },
    },
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        padding: "32px 24px 24px 24px",
        fontSize: "18px",
        fontWeight: 600,
        textAlign: "center",
      },
    },
  },
  MuiDialogContent: {
    styleOverrides: {
      root: {
        textAlign: "center",
        marginBottom: "24px",
        padding: "0px 24px",
        fontSize: "16px",
        wordBreak: "break-word",
      },
    },
  },
  MuiDialogActions: {
    styleOverrides: {
      root: {
        padding: "0px 24px 24px 24px",
      },
    },
  },
};

export default MuiDialog;
