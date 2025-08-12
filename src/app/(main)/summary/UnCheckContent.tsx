"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import toast from "react-hot-toast";

import ReasonPicker from "@/app/(main)/summary/ReasonPicker";
import { getUnCheckedResponse } from "@/app/actions/summary/getUnCheckedAction";
import { updateUnChecked } from "@/app/actions/summary/updateUnCheckedAction";
import customDayjs from "@/utils/customDayjs";

type TReason = {
  label: string;
  value: "No" | "Ok" | "EarlyLeave" | "Travel" | "Workshop" | "Absence";
};

const reasonList: TReason[] = [
  { label: "안함", value: "No" },
  { label: "체크", value: "Ok" },
  { label: "조퇴", value: "EarlyLeave" },
  { label: "개인일정", value: "Travel" },
  { label: "학교일정", value: "Workshop" },
  { label: "결석", value: "Absence" },
];

interface IProps {
  studentId: string;
  onUpdate: () => void;
  unCheckedList: getUnCheckedResponse;
}

export default function UnCheckContent(props: IProps) {
  const { unCheckedList, studentId, onUpdate } = props;

  const [reasonMap, setReasonMap] = useState<Record<number, TReason>>(() => {
    const initialMap: Record<number, TReason> = {};
    unCheckedList?.data?.forEach((item) => {
      const match = reasonList.find((r) => r.value === item.brushedStatus);
      initialMap[item.id] = match ?? { label: "안함", value: "No" };
    });
    return initialMap;
  });

  const getChangedList = () => {
    return unCheckedList?.data
      ?.filter((item) => {
        const original = item.brushedStatus;
        const current = reasonMap[item.id]?.value;
        return original !== current;
      })
      .map((item) => ({
        id: item.id,
        studentId: item.studentId,
        newStatus: reasonMap[item.id].value,
      }));
  };

  return (
    <Wrapper>
      <Title>스케줄</Title>

      <ListWrap>
        {unCheckedList?.data?.map((uncheck, idx) => (
          <ListRow key={idx}>
            {customDayjs(uncheck.brushedAt).format("YY년 MM월 DD일 (ddd)")}
            <ReasonPicker
              uncheckRow={uncheck}
              selectedReason={reasonMap[uncheck.id]}
              onChange={(id, newReason) => {
                setReasonMap((prev) => ({
                  ...prev,
                  [id]: newReason,
                }));
              }}
            />
          </ListRow>
        ))}
      </ListWrap>

      <NoticeBox>
        <NoticeSpan>1. 최근 일주일은 다시 체크할 수 있어요.</NoticeSpan>
        <NoticeSpan>
          2. 질병, 개인일정은 통계에서 제외되고 미체크로 분류되지 않아요.
        </NoticeSpan>

        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <NoticeSpan>※ 개인일정</NoticeSpan>
          <Divider />
          <NoticeSpan>체험학습, 대회, 경조사 등</NoticeSpan>
        </Box>
      </NoticeBox>

      <Btn
        onClick={async () => {
          const changed = getChangedList();
          // console.log("변경된 항목:", changed);

          if (changed && changed?.length > 0) {
            await updateUnChecked({
              studentId: studentId,
              updateData: changed,
            });
          }
          toast.success("수정이 완료 되었습니다.");
          onUpdate();
        }}
      >
        수정 완료
      </Btn>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Title = styled(Box)(() => {
  return {
    fontSize: 28,
    color: "#000",
    fontWeight: 800,
    lineHeight: "150%",
    textAlign: "center",
    letterSpacing: "-0.56px",
  };
});

const ListWrap = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
});

const ListRow = styled(Box)(() => {
  return {
    fontSize: 25,
    width: "100%",
    display: "flex",
    fontWeight: 700,
    minHeight: "52px",
    color: "#747d8a",
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.5px",
    justifyContent: "space-between",
  };
});

const NoticeBox = styled(Box)(() => {
  return {
    gap: "4px",
    display: "flex",
    padding: "24px",
    borderRadius: "16px",
    flexDirection: "column",
    backgroundColor: "#F1F2F3",
  };
});

const NoticeSpan = styled("span")(() => {
  return {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: "150%",
    color: "#464B53",
    letterSpacing: "-0.32px",
  };
});

const Divider = styled(Box)(() => {
  return {
    width: "2px",
    height: "16px",
    borderRadius: "10px",
    backgroundColor: "#D5D7DB",
  };
});

const Btn = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    color: "#fff",
    fontWeight: 800,
    cursor: "pointer",
    lineHeight: "150%",
    textAlign: "center",
    padding: "16px 24px",
    borderRadius: "100px",
    letterSpacing: "-0.56px",
    backgroundColor: "#6EDBB5",
    border: "4px solid #32C794",
  };
});
