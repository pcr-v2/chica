"use client";

import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

import { GetStatisticResponse } from "@/app/actions/statistic/getStatistic";
import ArrowIcon from "@/assets/summary/execution-arrow.svg";
import Icon from "@/assets/summary/execution-icon-gray.svg";
import { convertVw } from "@/utils/convertVw";

type TExecutionMyClass = {
  classRate: number;
  classRankInGrade: string;
  classRankInSchool: string;

  countClassInGrade: string;
  countClassInSchool: string;
};
interface IProps {
  data: GetStatisticResponse["data"];
}

export default function ExecutionMyClass(props: IProps) {
  const { data } = props;

  const defaultValue: TExecutionMyClass = {
    classRate: 0,
    classRankInGrade: "0등",
    classRankInSchool: "0등",

    countClassInGrade: "0반",
    countClassInSchool: "0반",
  };

  const [value, setValue] = useState<TExecutionMyClass>(defaultValue);

  useEffect(() => {
    if (data == null) return;
    setValue({
      classRate: data.classRate,
      classRankInGrade: `${data.classRankInGrade}등`,
      classRankInSchool: `${data.classRankInSchool}등`,

      countClassInGrade: `${data.countClassInGrade}반`,
      countClassInSchool: `${data.countClassInSchool}반`,
    });
  }, [data]);

  const list = [
    {
      title: "우리 학년에서",
      rank: value?.classRankInGrade,
      total: value?.countClassInGrade,
    },
    {
      title: "우리 학교에서",
      rank: value?.classRankInSchool,
      total: value?.countClassInSchool,
    },
  ];

  return (
    <Wrapper>
      <Title>우리반</Title>

      <BottomWrap>
        <RankRow>
          <ArrowText>
            <IconImg />
            양치 실천율
          </ArrowText>

          <ExecutionPercentText>{value.classRate}%</ExecutionPercentText>
        </RankRow>

        {list.map((el) => {
          return (
            <RankRow key={el.title}>
              <ArrowText>
                <ArrowImg />
                {el.title}
              </ArrowText>

              <RankTextWrap>
                <TextRank>{el.rank}</TextRank>
                <TextSlash>/</TextSlash>
                <TextTotalCount>{el.total}</TextTotalCount>
              </RankTextWrap>
            </RankRow>
          );
        })}
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
    "@media (max-width:834px)": {
      gap: convertVw(24),
      padding: `${convertVw(40)}`,
      borderRadius: convertVw(24),
    },
  };
});

const Title = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    fontWeight: 800,
    display: "flex",
    color: "#080808",
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.56px",
    "@media (max-width:834px)": {
      fontSize: convertVw(28),
      letterSpacing: convertVw(-0.56),
    },
  };
});

const IconImg = styled(Icon)(() => {
  return {
    width: "42px",
    height: "42px",
    "@media (max-width:834px)": {
      width: convertVw(42),
      height: convertVw(42),
    },
  };
});

const ArrowImg = styled(ArrowIcon)(() => {
  return {
    width: "42px",
    height: "42px",
    "@media (max-width:834px)": {
      width: convertVw(42),
      height: convertVw(42),
    },
  };
});
const BottomWrap = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width:834px)": {
      gap: convertVw(12),
    },
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
    "@media (max-width:834px)": {
      gap: convertVw(4),
      fontSize: convertVw(25),
      letterSpacing: convertVw(-0.5),
    },
  };
});

const ExecutionPercentText = styled(Box)(() => {
  return {
    gap: "4px",
    fontSize: 25,
    fontWeight: 800,
    minWidth: "90px",
    textAlign: "end",
    color: "#464B53",
    lineHeight: "150%",
    letterSpacing: "-0.5px",
    "@media (max-width:834px)": {
      gap: convertVw(4),
      fontSize: convertVw(25),
      letterSpacing: convertVw(-0.5),
    },
  };
});

const RankTextWrap = styled(Box)(() => {
  return {
    gap: "4px",
    fontSize: 25,
    display: "flex",
    fontWeight: 800,
    lineHeight: "150%",
    alignItems: "center",
    letterSpacing: "-0.5px",
    "@media (max-width:834px)": {
      gap: convertVw(4),
      fontSize: convertVw(25),
      letterSpacing: convertVw(-0.5),
    },
  };
});

const TextRank = styled(Box)(() => {
  return {
    minWidth: "90px",
    textAlign: "end",
    color: "#747D8A",
    "@media (max-width:834px)": {
      minWidth: convertVw(90),
    },
  };
});

const TextSlash = styled(Box)(() => {
  return {
    color: "#D5D7DB",
  };
});

const TextTotalCount = styled(Box)(() => {
  return {
    minWidth: "55px",
    textAlign: "end",
    color: "#ACB3BC",
    "@media (max-width:834px)": {
      minWidth: convertVw(55),
    },
  };
});
