"use client";

import { Box, styled } from "@mui/material";
import { useEffect, useState } from "react";

import LoadingAnimation from "@/app/_components/common/Loading";
import { GetStatisticResponse } from "@/app/actions/statistic/getStatistic";
import ArrowIcon from "@/assets/summary/execution-arrow.svg";
import Icon from "@/assets/summary/execution-icon.svg";
import Pattern from "@/assets/summary/execution-pattern.png";
import { convertVw } from "@/utils/convertVw";

type TExecution = {
  myRate: number;
  myRankInClass: string;
  myRankInGrade: string;
  myRankInSchool: string;

  classPeopleCount: string;
  gradePeopleCount: string;
  schoolPeopleCount: string;
};

interface IProps {
  data: GetStatisticResponse["data"];
}

export default function Execution(props: IProps) {
  const { data } = props;

  const defaultValue: TExecution = {
    myRate: 0,
    myRankInClass: "0등",
    myRankInGrade: "0등",
    myRankInSchool: "0등",
    classPeopleCount: "0명",
    gradePeopleCount: "0명",
    schoolPeopleCount: "0명",
  };

  const [value, setValue] = useState<TExecution>(defaultValue);

  useEffect(() => {
    if (data == null) return;
    setValue({
      myRate: data.myRate ?? 0,
      myRankInClass: `${data.myRankInClass ?? 1}등`,
      myRankInGrade: `${data.myRankInGrade ?? 1}등`,
      myRankInSchool: `${data.myRankInSchool ?? 1}등`,
      classPeopleCount: `${data.classPeopleCount ?? 1}명`,
      gradePeopleCount: `${data.gradePeopleCount ?? 1}명`,
      schoolPeopleCount: `${data.schoolPeopleCount ?? 1}명`,
    });
  }, [data]);

  const list = [
    {
      title: "우리 반에서",
      rank: value?.myRankInClass,
      total: value?.classPeopleCount,
    },
    {
      title: "우리 학년에서",
      rank: value?.myRankInGrade,
      total: value?.gradePeopleCount,
    },
    {
      title: "우리 학교에서",
      rank: value?.myRankInSchool,
      total: value?.schoolPeopleCount,
    },
  ];

  return (
    <Wrapper>
      <Title>
        <TitleIconText>
          <IconImg />
          양치 실천율
        </TitleIconText>

        <Box>{value?.myRate}%</Box>
      </Title>

      <BottomWrap>
        {list.map((el) => {
          return (
            <RankRow key={el.title}>
              <ArrowText>
                <ArrowImg />
                {el.title ?? ""}
              </ArrowText>

              <RankTextWrap>
                <TextGreen>{el.rank || ""}</TextGreen>
                <TextSlash>/</TextSlash>
                <TextTotalCount>{el.total ?? ""}</TextTotalCount>
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
    "@media (max-width:834px)": {
      fontSize: convertVw(28),
      borderRadius: convertVw(12),
      letterSpacing: convertVw(-0.56),
      padding: `${convertVw(12)} ${convertVw(24)}`,
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
    "@media (max-width:834px)": {
      gap: convertVw(4),
      fontSize: convertVw(25),
      letterSpacing: convertVw(-0.5),
    },
  };
});

const TextGreen = styled(Box)(() => {
  return {
    minWidth: "90px",
    textAlign: "end",
    color: "#6EDBB5",
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
    minWidth: "90px",
    textAlign: "end",
    "@media (max-width:834px)": {
      minWidth: convertVw(90),
    },
  };
});

const TitleIconText = styled(Box)(() => {
  return {
    gap: "10px",
    display: "flex",
    alignItems: "center",
    "@media (max-width:834px)": {
      gap: convertVw(10),
    },
  };
});
