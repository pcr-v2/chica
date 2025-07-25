"use client";

import { Box, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Input from "@/app/_components/common/Input";
import { signIn } from "@/app/actions/auth/SignInAction";
import Pagelogo from "@/assets/logo/page-logo.png";

type TLoginValue = {
  id: string;
  pw: string;
};

export default function SigninContainer() {
  const router = useRouter();

  const [loginValue, setLoginValue] = useState<TLoginValue>({ id: "", pw: "" });
  const [activeBtn, setActiveBtn] = useState(false);

  useEffect(() => {
    if (loginValue.id !== "" && loginValue.pw !== "") {
      setActiveBtn(true);
      return;
    }
    setActiveBtn(false);
  }, [loginValue]);

  const handleSignIn = async () => {
    const result = await signIn(loginValue);
    if (result.code === "SUCCESS") {
      // 로그인 성공 시 페이지 이동 등
      toast.success("로그인 되었습니다.");
      router.push("/");
      return;
    }

    toast.error(result.message);
  };

  return (
    <Wrapper>
      <Logo src={Pagelogo.src} alt="logo" />

      <InputWrap>
        <Input
          value={loginValue.id}
          onChange={(value) =>
            setLoginValue({ ...loginValue, id: value.target.value })
          }
          showCancel={true}
        />
        <Input
          value={loginValue.pw}
          type="password"
          onChange={(value) =>
            setLoginValue({ ...loginValue, pw: value.target.value })
          }
        />
      </InputWrap>

      <Btn activebtn={activeBtn.toString()} onClick={handleSignIn}>
        로그인
      </Btn>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    gap: "64px",
    width: "100%",
    display: "flex",
    maxWidth: "834px",
    padding: "40px 64px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Logo = styled("img")(() => {
  return {
    width: "100%",
    maxWidth: "192px",
  };
});

const Btn = styled(Box)<{ activebtn: string }>(({ activebtn }) => {
  const activeBtn = activebtn === "true";

  return {
    width: "100%",
    height: "74px",
    display: "flex",
    fontWeight: 800,
    fontSize: "28px",
    maxWidth: "200px",
    cursor: "pointer",
    lineHeight: "150%",
    alignItems: "center",
    padding: "16px 24px",
    borderRadius: "100px",
    justifyContent: "center",
    letterSpacing: "-0.56px",
    color: activeBtn ? "#fff" : "#ACB3BC",
    backgroundColor: activeBtn ? "#6EDBB5" : "#E7E8E9",
    border: activeBtn ? "4px solid #32C794" : "4px solid #D5D7DB",

    transition: "all 0.35s ease-in-out",
  };
});

const InputWrap = styled(Box)(() => {
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
});
