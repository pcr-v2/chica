"use client";

import { Box, styled } from "@mui/material";

import { Meal } from "@/app/actions/meal/getMeal";
import dayjs from "@/utils/customDayjs";

interface IProps {
  meal: Meal[];
}

export default function MealContent(props: IProps) {
  const { meal } = props;

  const today = dayjs();

  const AllergyList = [
    { num: 1, name: "난류" },
    { num: 2, name: "우유" },
    { num: 3, name: "메밀" },
    { num: 4, name: "땅콩" },
    { num: 5, name: "대두" },
    { num: 6, name: "밀" },
    { num: 7, name: "고등어" },
    { num: 8, name: "게" },
    { num: 9, name: "새우" },
    { num: 10, name: "돼지고기" },
    { num: 11, name: "복숭아" },
    { num: 12, name: "토마토" },
    { num: 13, name: "아황산류" },
    { num: 14, name: "호두" },
    { num: 15, name: "닭고기" },
    { num: 16, name: "쇠고기" },
    { num: 17, name: "오징어" },
    { num: 18, name: "조개류(굴, 전복, 홍합 포함)" },
    { num: 19, name: "잣" },
  ];

  return (
    <Wrapper>
      <Title>{today.format("YYYY년 MM월 DD일 dd요일")}</Title>

      <Contents>
        <Meals>
          Test용 계성초 4월1일식단
          {meal.map((m, idx) => {
            return (
              <Box key={idx} sx={{ display: "flex", gap: "4px" }}>
                {m.name}
                <Box sx={{ display: "flex", gap: "2px" }}>
                  {m.allergyNum.length != 0 &&
                    m.allergyNum.map((el, index) => {
                      return (
                        <AllergyNums key={index}>
                          {el}
                          {m.allergyNum.length - 1 !== index && `,`}
                        </AllergyNums>
                      );
                    })}
                </Box>
              </Box>
            );
          })}
        </Meals>

        <Allergy>
          <span style={{ fontWeight: 800 }}>알레르기 정보</span>

          <AllergyDetail>
            {AllergyList.map((alg) => {
              return (
                <Box key={alg.num}>
                  {alg.num}.{alg.name}
                </Box>
              );
            })}
          </AllergyDetail>
        </Allergy>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
});

const Title = styled(Box)(() => {
  return {
    fontSize: 28,
    width: "100%",
    color: "#000",
    display: "flex",
    fontWeight: 800,
    lineHeight: "150%",
    letterSpacing: "-0.56px",
    justifyContent: "center",
  };
});

const Contents = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Meals = styled(Box)(() => {
  return {
    gap: "4px",
    fontSize: 16,
    width: "100%",
    fontWeight: 700,
    display: "flex",
    padding: "24px",
    color: "#080808",
    alignItems: "start",
    borderRadius: "16px",
    letterSpacing: "-0.32px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  };
});

const AllergyNums = styled(Box)(() => {
  return {
    fontSize: 12,
    height: "27px",
    display: "flex",
    fontWeight: 800,
    color: "#747D8A",
    lineHeight: "150%",
    alignItems: "start",
    letterSpacing: "-0.36px",
  };
});

const Allergy = styled(Box)(() => {
  return {
    gap: "12px",
    fontSize: 16,
    width: "100%",
    fontWeight: 700,
    padding: "24px",
    display: "flex",
    lineHeight: "150%",
    color: "#F44336",
    alignItems: "start",
    borderRadius: "16px",
    letterSpacing: "-0.32px",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgba(255, 235, 238, 0.64)",
  };
});

const AllergyDetail = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    columnGap: "8px",
    maxWidth: "400px",
    wordBreak: "keep-all",
  };
});
