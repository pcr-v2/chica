"use client";

import { Box, styled } from "@mui/material";

import ArrowIcon from "@/assets/summary/execution-arrow.svg";
import Icon from "@/assets/summary/execution-icon.svg";
import Pattern from "@/assets/summary/execution-pattern.png";

export default function Execution() {
  return (
    <Wrapper>
      <Title>
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <IconImg />
          양치 실천율
        </Box>

        <Box>100%</Box>
      </Title>

      <BottomWrap>
        <RankRow>
          <ArrowText>
            <ArrowImg />
            우리 반에서
          </ArrowText>

          <RankTextWrap>
            <TextGreen>1등</TextGreen>
            <TextSlash>/</TextSlash>
            <TextTotalCount>30명</TextTotalCount>
          </RankTextWrap>
        </RankRow>

        <RankRow>
          <ArrowText>
            <ArrowImg />
            우리 학년에서
          </ArrowText>

          <RankTextWrap>
            <TextGreen>1등</TextGreen>
            <TextSlash>/</TextSlash>
            <TextTotalCount>300명</TextTotalCount>
          </RankTextWrap>
        </RankRow>

        <RankRow>
          <ArrowText>
            <ArrowImg />
            우리 학교에서
          </ArrowText>

          <RankTextWrap>
            <TextGreen>1등</TextGreen>
            <TextSlash>/</TextSlash>
            <TextTotalCount>1300명</TextTotalCount>
          </RankTextWrap>
        </RankRow>
      </BottomWrap>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    padding: "40px",
    display: "flex",
    alignItems: "center",
    borderRadius: "24px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  };
});

const Title = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    color: "#fff",
    fontWeight: 800,
    display: "flex",
    lineHeight: "150%",
    borderRadius: "12px",
    padding: "12px 24px",
    alignItems: "center",
    letterSpacing: "-0.56px",
    justifyContent: "space-between",
    background: `url(${Pattern.src}) no-repeat #6EDBB5`,
  };
});

const IconImg = styled(Icon)(() => {
  return {};
});

const ArrowImg = styled(ArrowIcon)(() => {
  return {};
});

const BottomWrap = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const RankRow = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const ArrowText = styled(Box)(() => {
  return {
    gap: "4px",
    fontSize: 25,
    display: "flex",
    fontWeight: 800,
    color: "#747D8A",
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.5px",
  };
});

const RankTextWrap = styled(Box)(() => {
  return {
    gap: "4px",
    fontSize: 25,
    display: "flex",
    fontWeight: 800,
    color: "#ACB3BC",
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.5px",
  };
});

const TextGreen = styled(Box)(() => {
  return {
    minWidth: "90px",
    textAlign: "end",
    color: "#6EDBB5",
  };
});

const TextSlash = styled(Box)(() => {
  return {
    color: "#D5D7DB",
  };
});

const TextTotalCount = styled(Box)(() => {
  return {
    minWidth: "90px",
    textAlign: "end",
  };
});
