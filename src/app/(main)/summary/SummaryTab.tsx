import { Box, styled, Tab, Tabs } from "@mui/material";
import React, { useEffect, useState } from "react";

import { convertVw } from "@/utils/convertVw";

type TProps = {
  onClickTab: (value: "week" | "month" | "term") => void;
  selectedTab: string;
};

export default function SummaryTab(props: TProps) {
  const { selectedTab, onClickTab } = props;

  const tabList = [
    {
      label: "이번 주",
      value: "week",
    },
    {
      label: "이번 달",
      value: "month",
    },
    {
      label: "이번 학기",
      value: "term",
    },
  ];

  const [value, setValue] = useState(selectedTab);

  useEffect(() => {
    setValue(selectedTab);
  }, [selectedTab]);

  const handleTab = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue); // tab active 바꿔주기
  };

  return (
    <Wrapper>
      <TabsST
        value={value}
        variant="fullWidth"
        onChange={(_, newvalue) => {
          onClickTab(newvalue);
          handleTab(_, newvalue);
        }}
        centered
      >
        {tabList?.map((tab, index) => {
          return (
            <TabST
              disableRipple
              key={`${tab.value}_${index}`}
              label={tab.label}
              value={tab.value}
            />
          );
        })}
      </TabsST>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };
});

const TabsST = styled(Tabs)(() => {
  return {
    width: "100%",
    fontFamily: "NanumSquareRound",
    "& .MuiButtonBase-root": {
      fontSize: 25,
      fontWeight: 700,
      color: "#747D8A",
      lineHeight: "150%",
      letterSpacing: "-0.5px",
      fontFamily: "NanumSquareRound",
      "@media (max-width:834px)": {
        fontSize: convertVw(25),
        letterSpacing: convertVw(-0.5),
      },
      "&.Mui-selected": {
        color: "#080808",
      },
    },
    // "& .MuiTabs-flexContainer": {},
    "& .MuiTabs-indicator": {
      height: "2px",
      backgroundColor: "#080808",
    },
  };
});

const TabST = styled(Tab)(() => {
  return {
    padding: "20px",
    "@media (max-width:834px)": {
      padding: convertVw(20),
    },
  };
});
