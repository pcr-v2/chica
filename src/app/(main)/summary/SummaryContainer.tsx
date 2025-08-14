"use client";

import { Box, styled } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Execution from "@/app/(main)/summary/Execution";
import ExecutionBoard from "@/app/(main)/summary/ExecutionBoard";
import ExecutionMyClass from "@/app/(main)/summary/ExecutionMyClass";
import SummaryTab from "@/app/(main)/summary/SummaryTab";
import UnCheckContent from "@/app/(main)/summary/UnCheckContent";
import Modal from "@/app/_components/common/Modal";
import TitleBadge from "@/app/_components/common/TitleBadge";
import SummaryHeader from "@/app/_components/layout/Headers/SummaryHeader";
import { getStatistic } from "@/app/actions/statistic/getStatistic";
import { GetStudentInfoResponse } from "@/app/actions/student/getStudentInfoAction";
import { getUnCheckedResponse } from "@/app/actions/summary/getUnCheckedAction";
import { convertVw } from "@/utils/convertVw";
import { maskName } from "@/utils/maskName";

type TTab = "week" | "month" | "term";

interface IProps {
  student: GetStudentInfoResponse["data"];
  unCheckedList: getUnCheckedResponse;
}

export default function SummaryContainer(props: IProps) {
  const { unCheckedList, student } = props;

  const router = useRouter();
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(15);
  const [selectedTab, setSelectedTab] = useState<TTab>("week");

  const { data } = useQuery({
    queryKey: ["get-statistic", selectedTab, open],
    queryFn: () =>
      getStatistic({
        studentId: student?.studentId as string,
        type: selectedTab,
      }),
    enabled: !!student && !!selectedTab, // boardId 있을 때만 실행
    staleTime: 0,
  });

  useEffect(() => {
    if (count <= 0) {
      // router.replace("/");
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  return (
    <Wrapper onTouchStart={() => setCount(15)}>
      <SummaryHeader
        count={count}
        onClick={() => {
          if (unCheckedList.data == null) {
            toast.success("일주일간 양치를 잘 실천하셨습니다!");
            return;
          }
          setOpen(true);
        }}
      />

      <Content>
        <TopContent>
          <TitleBadge
            text={`${student?.studentGrade}학년 ${student?.studentClass}반 ${student?.studentNumber}번 ${maskName(student?.studentName as string)}`}
          />

          <SummaryTab
            selectedTab={selectedTab}
            onClickTab={(value) => setSelectedTab(value)}
          />
        </TopContent>

        <ExecutionWrap>
          <Execution data={data?.data} />

          <ExecutionMyClass data={data?.data} />

          <ExecutionBoard
            allClassRateArray={data?.data?.allClassRateArray ?? []}
          />
        </ExecutionWrap>

        <Btn onClick={() => router.replace("/home")}>완료</Btn>
      </Content>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);

          queryClient.refetchQueries({
            queryKey: ["get-statistic", selectedTab, open],
          });
        }}
        children={
          <UnCheckContent
            unCheckedList={unCheckedList}
            studentId={student?.studentId as string}
            onUpdate={() => {
              setOpen(false);
              queryClient.refetchQueries({
                queryKey: ["get-statistic", selectedTab, open],
              });
            }}
          />
        }
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
    "@media (max-width:834px)": {
      gap: convertVw(64),
      padding: `${convertVw(48)} ${convertVw(64)}`,
    },
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
    "@media (max-width:834px)": {
      gap: convertVw(40),
    },
  };
});

const ExecutionWrap = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width:834px)": {
      gap: convertVw(24),
    },
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
    "@media (max-width:834px)": {
      fontSize: convertVw(28),
      maxWidth: convertVw(200),
      letterSpacing: convertVw(-0.56),
      padding: `${convertVw(16)} ${convertVw(24)}`,
      border: `${convertVw(4)} solid #32C794`,
    },
  };
});
