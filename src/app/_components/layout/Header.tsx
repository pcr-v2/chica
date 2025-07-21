"use client";

import LogoutIcon from "@mui/icons-material/Logout";
import { Box, styled } from "@mui/material";
import { usePathname } from "next/navigation";
import toast from "react-hot-toast";

import { signOut } from "@/app/actions/auth/SignOutAction";
import { GetMeResponse } from "@/app/actions/auth/getMe";
import { getCurrentMenuLabel, UserRole } from "@/config/menu";

interface IProps {
  me: GetMeResponse;
}

export default function Header(props: IProps) {
  const { me } = props;
  const nowPath = usePathname();
  // console.log("me", me);
  const handleLogout = async () => {
    toast.success("로그아웃 되었습니다.");
    await signOut();
  };

  const lable = getCurrentMenuLabel(nowPath, me?.data?.type as UserRole);

  return (
    <Wrapper>
      <PathLabel>{lable}</PathLabel>

      <UserMenu>
        <UserName>
          {me?.data?.type === "master" && "마스터 "}
          {me?.data?.name}님
        </UserName>
        <Logout onClick={handleLogout} />
      </UserMenu>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    padding: "12px 24px",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  };
});

const UserMenu = styled(Box)(() => {
  return {
    gap: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
});

const PathLabel = styled("span")(() => {
  return {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "150%",
    letterSpacing: "-0.18px",
  };
});

const UserName = styled("span")(() => {
  return {
    fontSize: 18,
    lineHeight: "150%",
    letterSpacing: "-0.18px",
  };
});

const Logout = styled(LogoutIcon)(() => {
  return {
    width: "24px",
    height: "24px",
    cursor: "pointer",
  };
});
