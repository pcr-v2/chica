"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";

import ReasonPicker from "@/app/(main)/summary/ReasonPicker";
import { getUnCheckedResponse } from "@/app/actions/summary/getUnCheckedAction";
import customDayjs from "@/utils/customDayjs";

interface IProps {
  unCheckedList: getUnCheckedResponse;
}

export default function UnCheckContent(props: IProps) {
  const { unCheckedList } = props;

  return (
    <Wrapper>
      <Title>스케줄</Title>

      <ListWrap>
        {unCheckedList?.data?.map((uncheck, idx) => {
          return (
            <ListRow key={idx}>
              {customDayjs(uncheck.brushedAt).format("YY년 MM월 DD일 (ddd)")}
              <ReasonPicker status={uncheck.brushedStatus} />
            </ListRow>
          );
        })}
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

      <Btn>수정 완료</Btn>
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
    lineHeight: "150%",
    textAlign: "center",
    padding: "16px 24px",
    borderRadius: "100px",
    letterSpacing: "-0.56px",
    backgroundColor: "#6EDBB5",
    border: "4px solid #32C794",
  };
});
