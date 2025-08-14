"use client";

import { Box, styled } from "@mui/material";
import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { getUnCheckedResponse } from "@/app/actions/summary/getUnCheckedAction";
import Arrow from "@/assets/icon/select-arrow.svg";
import { $Enums } from "@/prisma/generated";
import { convertVw } from "@/utils/convertVw";

const reasonList: TReason[] = [
  { label: "안함", value: "No" },
  { label: "체크", value: "Ok" },
  { label: "조퇴", value: "EarlyLeave" },
  { label: "개인일정", value: "Travel" },
  { label: "학교일정", value: "Workshop" },
  { label: "결석", value: "Absence" },
];

type TReason = {
  label: string;
  value: "No" | "Ok" | "EarlyLeave" | "Travel" | "Workshop" | "Absence";
};

interface IProps {
  uncheckRow: {
    studentId: string;
    id: number;
    brushedAt: Date;
    brushedStatus: $Enums.BrushedBrushedStatus;
  };
  selectedReason: TReason;
  onChange: (id: number, reason: TReason) => void;
}

export default function ReasonPicker(props: IProps) {
  const { uncheckRow, selectedReason, onChange } = props;

  const containerRef = useRef<HTMLDivElement>(null);

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
    <Container ref={containerRef} sx={{ zIndex: isOpen ? 999 : 0 }}>
      {/* 버튼 */}
      <Btn onClick={toggleOpen}>
        <ReasonLabel>{selectedReason.label}</ReasonLabel>
        <ArrowImg isopen={isOpen.toString()} />
      </Btn>

      {/* Popper */}
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {reasonList.map((reason, idx) => (
              <Item
                key={`${reason.value}-${idx}`}
                onClick={() => {
                  onChange(uncheckRow.id, reason);
                  setIsOpen(false);
                }}
                selected={selectedReason.value === reason.value}
              >
                {reason.label}
              </Item>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Container>
  );
}

const Container = styled("div")({
  zIndex: 0,
  width: "135px",
  display: "flex",
  borderRadius: "8px",
  position: "relative",
  backgroundColor: "#fff",
  backdropFilter: "blur(4px)",
  border: "2px solid #D5D7DB",
  padding: "10px 10px 10px 16px",
  // "@media (max-width:834px)": {
  //   width: convertVw(135),
  //   borderRadius: convertVw(8),
  //   padding: `${convertVw(10)} ${convertVw(10)} ${convertVw(10)} ${convertVw(16)}`,
  // },
});

const Btn = styled(Box)({
  gap: "4px",
  fontSize: 21,
  fontWeight: 700,
  display: "flex",
  cursor: "pointer",
  lineHeight: "150%",
  alignItems: "center",
  position: "relative",
  letterSpacing: "-0.42px",
});

const ArrowImg = styled(Arrow)<{ isopen: string }>(({ isopen }) => ({
  width: "28px",
  height: "28px",
  transition: "transform 0.2s ease-in-out",
  transform: `rotate(${isopen === "true" ? 180 : 0}deg)`,
}));

const Dropdown = styled(motion.ul)(() => ({
  top: 54,
  left: 0,
  gap: "20px",
  zIndex: 9,
  display: "flex",
  marginTop: "8px",
  overflow: "hidden",
  borderRadius: "8px",
  padding: "20px 14px",
  position: "absolute",
  flexDirection: "column",
  backgroundColor: "#fff",
  border: "1.5px solid #ddd",
  boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.40)",
}));

const Item = styled("li")<{ selected: boolean }>(({ selected }) => ({
  fontSize: 21,
  zIndex: 999,
  fontWeight: 700,
  minWidth: "104px",
  cursor: "pointer",
  listStyle: "none",
  borderRadius: "8px",
  textAlign: "center",
  backgroundColor: "white",
  color: selected ? "#32C794" : "#747D8A",
  "&:hover": {
    backgroundColor: "#EDFCF7",
  },
  // "@media (max-width:834px)": {
  //   minWidth: convertVw(104),
  //   borderRadius: convertVw(8),
  // },
}));

const ReasonLabel = styled("span")(() => {
  return {
    minWidth: "76px",
    textAlign: "center",
    // "@media (max-width:834px)": {
    //   minWidth: convertVw(76),
    // },
  };
});
