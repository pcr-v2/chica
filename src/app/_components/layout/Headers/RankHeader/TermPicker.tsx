"use client";

import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import Arrow from "@/assets/icon/select-arrow.svg";

export default function TermPicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [selectedMonth, setSelectedMonth] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  // ✅ 외부 클릭 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <Container ref={containerRef}>
      {/* 버튼 */}
      <MonthButton
        onClick={toggleOpen}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span>{selectedMonth}학기</span>
        <ArrowImg isopen={isOpen.toString()} />
      </MonthButton>

      {/* Popper */}
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {[1, 2].map((month) => (
              <MonthItem
                key={month}
                onClick={() => {
                  setSelectedMonth(month);
                  setIsOpen(false);
                }}
                selected={selectedMonth === month}
              >
                {month}학기
              </MonthItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled("div")({
  display: "inline-block",

  minWidth: "121px",
  position: "relative",
  borderRadius: "100px",
  backgroundColor: "#fff",
  backdropFilter: "blur(4px)",
  border: "2px solid #D5D7DB",
  padding: "12px 16px 12px 20px",
});

const MonthButton = styled(Box)({
  gap: "6px",
  fontSize: 21,
  fontWeight: 800,
  display: "flex",
  cursor: "pointer",
  lineHeight: "150%",
  alignItems: "center",
  letterSpacing: "-0.42px",
});

const ArrowImg = styled(Arrow)<{ isopen: string }>(({ isopen }) => ({
  width: "28px",
  height: "28px",
  transition: "transform 0.2s ease-in-out",
  transform: `rotate(${isopen === "true" ? 180 : 0}deg)`,
}));

const Dropdown = styled(motion.ul)(({ theme }) => ({
  top: 54,
  left: 10,
  zIndex: 100,
  marginTop: "8px",
  overflow: "hidden",
  borderRadius: "8px",
  padding: "12px 8px",
  position: "absolute",
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  //   transform: "translate(-50%)",
  boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.40)",
}));

const MonthItem = styled("li")<{ selected: boolean }>(({ selected }) => ({
  fontSize: 21,
  minWidth: "80px",
  cursor: "pointer",
  listStyle: "none",
  borderRadius: "8px",
  backgroundColor: "white",
  fontWeight: selected ? 800 : 700,
  color: selected ? "#32C794" : "#747D8A",
  "&:hover": {
    backgroundColor: "#EDFCF7",
  },
}));
