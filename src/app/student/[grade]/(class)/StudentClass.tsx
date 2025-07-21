import { Box, styled } from "@mui/material";
import React from "react";

export default function StudentClass() {
  return (
    <Wrapper>
      <Box>1반</Box>
      <Box>2반</Box>
      <Box>3반</Box>
      <Box>4반</Box>
      <Box>5반</Box>
      <Box>6반</Box>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr, 1fr",
  };
});
