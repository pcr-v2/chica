"use client";

import { Box, Button, styled } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import weekday from "dayjs/plugin/weekday";
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

  // console.log("data", data);

  // KST 기준 오늘
  const today = dayjs();

  // 이번 주 월요일 00:00
  const startOfWeek = today.weekday(1).startOf("day");

  // 이번 주 금요일 23:59:59
  const endOfWeek = today.weekday(5).endOf("day");

  // console.log("startOfWeek:", startOfWeek.format()); // 예: 2025-07-28T00:00:00+09:00
  // console.log("endOfWeek:", endOfWeek.format()); // 예: 2025-08-01T23:59:59+09:00

  useEffect(() => {
    if (count <= 0) {
      router.replace("/");
      return;
    }

    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [count]);

  // const test = async () => {
  //   const res = await getStatistic({
  //     // 1/1/1신예은
  //     // studentId: "8370c9cb-0c8f-465f-808f-b231ff5d2804",
  //     // 1/3/3조정석
  //     studentId: "2828dff3-15db-46e6-8825-608f50cdccd3",
  //     // 1/1/2정소민
  //     // studentId: "b8aa8d38-cfcf-4d8c-b526-c3ef8a497e18",
  //     // 1/2/1연시은
  //     // studentId: "8e20b906-ae78-4d55-a6da-bb6cbc1970dc",
  //     type: "month",
  //   });
  //   console.log("res", res);
  // };

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
          {/* <Button variant="contained" onClick={test}>
            test
          </Button> */}
          <TitleBadge
            text={`${student?.studentGrade}학년 ${student?.studentClass}반 ${student?.studentNumber}번 ${student?.studentName}`}
          />

          <SummaryTab
            selectedTab={selectedTab}
            onClickTab={(value) => setSelectedTab(value)}
          />
        </TopContent>

        <ExecutionWrap>
          <Execution
            myRate={data?.data?.myRate ?? 0}
            myRankInClass={data?.data?.myRankInClass ?? 0}
            myRankInGrade={data?.data?.myRankInGrade ?? 0}
            myRankInSchool={data?.data?.myRankInSchool ?? 0}
            classPeopleCount={data?.data?.classPeopleCount ?? 0}
            gradePeopleCount={data?.data?.gradePeopleCount ?? 0}
            schoolPeopleCount={data?.data?.schoolPeopleCount ?? 0}
          />

          <ExecutionMyClass
            classRate={data?.data?.classRate ?? 0}
            classRankInGrade={data?.data?.classRankInGrade ?? 0}
            classRankInSchool={data?.data?.classRankInSchool ?? 0}
            countClassInGrade={data?.data?.countClassInGrade ?? 0}
            countClassInSchool={data?.data?.countClassInSchool ?? 0}
          />

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

const ExecutionWrap = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
