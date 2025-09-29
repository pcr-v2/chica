"use client";

import { Box, styled } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Modal from "@/app/_components/common/Modal";
import Err1 from "@/public/images/icons/err-1.svg";
import Err2 from "@/public/images/icons/err-2.svg";
import Err3 from "@/public/images/icons/err-3.svg";
import { checkNetwork } from "@/utils/checkNetwork";
import { convertVw } from "@/utils/convertVw";

export default function NetworkErrorPage() {
  const router = useRouter();

  const [modal, setModal] = useState(false);

  const handleGoHome = async () => {
    const ok = await checkNetwork();
    if (ok) {
      router.replace("/");
    } else {
      setModal(true);
    }
  };

  return (
    <Wrapper>
      <Content>
        <LoadingIconWrap>
          {[Err1, Err2, Err3].map((Icon, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 0 }}
              animate={{ y: [0, -15, 0] }} // 위로 갔다가 내려옴
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: idx * 0.6, // 순차적 딜레이
              }}
            >
              <IconBox>
                <Icon preserveAspectRatio="xMidYMid meet" />
              </IconBox>
            </motion.div>
          ))}
        </LoadingIconWrap>
        <TextWrap>
          네트워크가 불안정 합니다.
          <br />
          네트워크 환경을 다시 한 번 확인해주세요.
        </TextWrap>
        <DoneBtn onClick={handleGoHome}>홈으로가기</DoneBtn>
      </Content>

      <Modal
        open={modal}
        children={
          <ModalChild>
            네트워크 연결이 불안정합니다.
            <br />
            잠시후 다시 시도해 주세요.
            <ConfirmBtn onClick={() => setModal(false)}>확인</ConfirmBtn>
          </ModalChild>
        }
      />
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100dvh",
  };
});

const DoneBtn = styled(Box)(() => {
  return {
    fontSize: 21,
    width: "180px",
    display: "flex",
    fontWeight: 800,
    color: "#fff",
    cursor: "pointer",
    lineHeight: "150%",
    alignItems: "center",
    padding: "12px 20px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.42px",
    backgroundColor: "#32C794",
    "@media (max-width:834px)": {
      width: convertVw(180),
      fontSize: convertVw(21),
      letterSpacing: convertVw(-0.315),
      padding: `${convertVw(12)} ${convertVw(20)}`,
    },
  };
});

const Content = styled(Box)(() => {
  return {
    gap: "40px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",

    "@media (max-width:834px)": {
      gap: convertVw(40),
    },
  };
});

const LoadingIconWrap = styled(Box)(() => {
  return {
    gap: "12px",
    display: "flex",
    alignItems: "center",
    "@media (max-width:834px)": {
      gap: convertVw(12),
    },
  };
});

const TextWrap = styled(Box)(() => {
  return {
    gap: "8px",
    fontSize: 24,
    display: "flex",
    fontWeight: 700,
    cursor: "pointer",
    color: "#747d8a",
    textAlign: "center",
    flexDirection: "column",

    "@media (max-width:834px)": {
      gap: convertVw(8),
      fontSize: convertVw(24),
    },
  };
});

const IconBox = styled(Box)(() => ({
  width: 64,
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    width: "100%",
    height: "100%",
  },

  "@media (max-width:834px)": {
    width: convertVw(64),
    height: convertVw(64),
  },
}));

const ModalChild = styled(Box)(() => {
  return {
    gap: "24px",
    fontSize: 20,
    display: "flex",
    fontWeight: 700,
    cursor: "pointer",
    color: "#747d8a",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const ConfirmBtn = styled(Box)(() => {
  return {
    fontSize: 16,
    width: "100%",
    display: "flex",
    fontWeight: 800,
    color: "#fff",
    cursor: "pointer",
    lineHeight: "150%",
    borderRadius: "8px",
    alignItems: "center",
    padding: "12px 20px",
    justifyContent: "center",
    letterSpacing: "-0.42px",
    backgroundColor: "#32C794",
  };
});
