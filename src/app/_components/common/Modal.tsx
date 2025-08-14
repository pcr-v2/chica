import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

import CloseIcon from "@/assets/icon/close-icon.svg";

interface IProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal(props: IProps) {
  const { children, onClose, open } = props;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <Background
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Content
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {children}
            <Close onClick={onClose} />
          </Content>
        </Background>
      )}
    </AnimatePresence>
  );
}

const Background = styled(motion.div)(() => {
  return {
    inset: 0,
    zIndex: 3,
    width: "100%",
    display: "flex",
    height: "100dvh",
    position: "fixed",
    overflowY: "hidden",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0, 0, 0, 0.8)",
  };
});

const Content = styled(motion.div)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "560px",
    margin: "0px 24px",
    borderRadius: "24px",
    position: "relative",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "64px 40px 40px",
    backgroundColor: "#fff",
    boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.40)",
  };
});

const Close = styled(CloseIcon)(() => {
  return {
    top: 40,
    right: 40,
    width: "32px",
    height: "32px",
    cursor: "pointer",
    position: "absolute",
  };
});
