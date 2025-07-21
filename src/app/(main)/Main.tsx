"use client";

import { Box, Button, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Main() {
  const router = useRouter();

  const [grade, setGrade] = useState<number | null>(null);

  return (
    <Wrapper>
      
      <span style={{ fontWeight: 900, fontSize: 32 }}>가나다라</span>
      <span style={{ fontWeight: 800, fontSize: 32 }}>가나다라</span>
      <span style={{ fontWeight: 700, fontSize: 32 }}>가나다라</span>
      <span style={{ fontWeight: 400, fontSize: 32 }}>가나다라</span>

      <GradeBox>
        <Button variant="contained" onClick={() => router.push("/student/1")}>
          1학년
        </Button>
        <Button onClick={() => router.push("/student/2")}>2학년</Button>
        <Button variant="contained" onClick={() => router.push("/student/3")}>
          3학년
        </Button>
        <Button onClick={() => router.push("/student/4")}>4학년</Button>
        <Button variant="contained" onClick={() => router.push("/student/5")}>
          5학년
        </Button>
        <Button onClick={() => router.push("/student/5")}>6학년</Button>
      </GradeBox>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100dvh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid red",
  };
});

const GradeBox = styled(Box)(() => {
  return {
    width: "100%",
    display: "grid",
    maxWidth: "956px",
    border: "2px solid red",
    gridTemplateColumns: "1fr 1fr",
  };
});
