import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, styled } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface IProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal(props: IProps) {
  const { children, onClose, open } = props;

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
            <CloseIcon onClick={onClose} />
          </Content>
        </Background>
      )}
    </AnimatePresence>
  );
}

const Background = styled(motion.div)(() => {
  return {
    inset: 0,
    width: "100%",
    padding: "24px",
    display: "flex",
    minHeight: "100dvh",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.40)",
  };
});

const Content = styled(motion.div)(() => {
  return {
    width: "100%",
    margin: "auto",
    maxWidth: "500px",
    borderRadius: "12px",
    position: "relative",
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0px 0px 12px 0px rgba(0, 0, 0, 0.16)",
  };
});

const CloseIcon = styled(CloseRoundedIcon)(() => {
  return {
    top: 24,
    right: 24,
    width: "24px",
    height: "24px",
    cursor: "pointer",
    position: "absolute",
  };
});
