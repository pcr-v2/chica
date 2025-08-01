"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
import { useState } from "react";
import toast from "react-hot-toast";

import Execution from "@/app/(main)/summary/Execution";
import ExecutionBoard from "@/app/(main)/summary/ExecutionBoard";
import ExecutionMyClass from "@/app/(main)/summary/ExecutionMyClass";
import SummaryTab from "@/app/(main)/summary/SummaryTab";
import UnCheckContent from "@/app/(main)/summary/UnCheckContent";
import Modal from "@/app/_components/common/Modal";
import TitleBadge from "@/app/_components/common/TitleBadge";
import SummaryHeader from "@/app/_components/layout/Headers/SummaryHeader";
import { GetStudentInfoResponse } from "@/app/actions/student/getStudentInfoAction";
import { getUnCheckedResponse } from "@/app/actions/summary/getUnCheckedAction";

dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(timezone);

type TTab = "week" | "month" | "term";

interface IProps {
  student: GetStudentInfoResponse["data"];
  unCheckedList: getUnCheckedResponse;
}

export default function SummaryContainer(props: IProps) {
  const { unCheckedList, student } = props;

  // KST 기준 오늘
  const today = dayjs();

  // 이번 주 월요일 00:00
  const startOfWeek = today.weekday(1).startOf("day");

  // 이번 주 금요일 23:59:59
  const endOfWeek = today.weekday(5).endOf("day");

  // console.log("startOfWeek:", startOfWeek.format()); // 예: 2025-07-28T00:00:00+09:00
  // console.log("endOfWeek:", endOfWeek.format()); // 예: 2025-08-01T23:59:59+09:00

  const [selectedTab, setSelectedTab] = useState<TTab>("week");
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <SummaryHeader
        onClick={() => {
          if (unCheckedList.data == null) {
            // console.log(unCheckedList.data?.length);
            toast.success("일주일간 양치를 잘 실천하셨습니다!");
            return;
          }
          setOpen(true);
        }}
      />

      <Content>
        <TopContent>
          <TitleBadge
            text={`${student?.studentGrade}학년 ${student?.studentClass}반 ${student?.studentNumber}번 ${student?.studentName}`}
          />

          <SummaryTab
            selectedTab={selectedTab}
            onClickTab={(value) => setSelectedTab(value)}
          />
        </TopContent>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            width: "100%",
          }}
        >
          <Execution />

          <ExecutionMyClass />

          <ExecutionBoard />
        </Box>

        <Btn>완료</Btn>
      </Content>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        children={<UnCheckContent unCheckedList={unCheckedList} />}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Content = styled(Box)(() => {
  return {
    gap: "64px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    padding: "48px 64px",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const TopContent = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Btn = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    fontWeight: 800,
    color: "#fff",
    cursor: "pointer",
    maxWidth: "200px",
    lineHeight: "150%",
    textAlign: "center",
    padding: "16px 24px",
    borderRadius: "100px",
    letterSpacing: "-0.56px",
    backgroundColor: "#6EDBB5",
    border: "4px solid #32C794",
  };
});
