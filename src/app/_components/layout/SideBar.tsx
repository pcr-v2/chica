import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import { GetMeResponse } from "@/app/actions/auth/getMe";
import { getMenusByRole, MenuItem, UserRole } from "@/config/menu";
import BlueLogo from "@/public/images/logo/blue-logo.png";

interface IProps {
  me: GetMeResponse;
}

export default function SideBar(props: IProps) {
  const { me } = props;

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const router = useRouter();
  const nowPath = usePathname();

  const toggleMenu = (el: MenuItem) => {
    if (el.children && el.children?.length <= 0) {
      router.push(el.path);
      return;
    }
    setOpenMenu((prev) => (prev === el.path ? null : el.path));
  };

  return (
    <Wrapper>
      <Logo src={BlueLogo.src} alt="logo" />

      <Menus>
        {getMenusByRole(me?.data?.type as UserRole).map((parentMenu) => {
          const Icon = parentMenu.icon;

          const isOpen =
            openMenu === parentMenu.path ||
            parentMenu.children?.some(
              (child) =>
                nowPath === child.path || nowPath.startsWith(child.path),
            );

          return (
            <Box key={parentMenu.label} sx={{ width: "100%" }}>
              <SingleMenuWrap onClick={() => toggleMenu(parentMenu)}>
                <IconLabel>
                  <Icon sx={{ color: "#374151" }} />
                  <ParentMenu
                  // isactive={(
                  //   openMenu &&
                  //   parentMenu?.children &&
                  //   parentMenu?.children?.length <= 0
                  // ).toString()}
                  >
                    {parentMenu.label}
                  </ParentMenu>
                </IconLabel>
                {parentMenu.children && parentMenu.children.length > 0 && (
                  <Arrow
                    animate={{ rotate: isOpen ? 0 : 180 }}
                    transition={{ duration: 0.1 }}
                  />
                )}
              </SingleMenuWrap>

              <AnimatePresence initial={false}>
                {isOpen &&
                  parentMenu.children &&
                  parentMenu.children.length > 0 && (
                    <ChildMenuWrap
                      layout
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          marginTop: "8px",
                          flexDirection: "column",
                        }}
                      >
                        {parentMenu.children.map((child) => (
                          <ChildItem
                            key={child.path}
                            isactive={(nowPath === child.path).toString()}
                            onClick={() => router.push(child.path)}
                          >
                            {child.label}
                          </ChildItem>
                        ))}
                      </Box>
                    </ChildMenuWrap>
                  )}
              </AnimatePresence>
            </Box>
          );
        })}
      </Menus>
    </Wrapper>
  );
}

const Wrapper = styled(Box)(() => ({
  gap: "48px",
  width: "100%",
  display: "flex",
  padding: "24px",
  maxWidth: "240px",
  alignItems: "start",
  minHeight: "100dvh",
  flexDirection: "column",
  justifyContent: "start",
  borderRight: "1px solid #d9d9d9",
}));

const Logo = styled("img")(() => ({
  width: "180px",
}));

const Menus = styled(Box)(() => ({
  gap: "16px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "start",
}));

const SingleMenuWrap = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  "&:hover": {
    backgroundColor: "#f2f8ff",
  },
}));

const ParentMenu = styled(Box)(() => {
  return {
    fontSize: 16,
    fontWeight: 500,
    color: "#374151",
    lineHeight: "140%",
    letterSpacing: "-0.24px",
  };
});

const IconLabel = styled(Box)(() => ({
  gap: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
}));

const Arrow = styled(motion.create(KeyboardArrowDownRoundedIcon))(() => ({
  width: "24px",
  height: "24px",
  cursor: "pointer",
}));

const ChildMenuWrap = styled(motion.create("div"))(() => ({
  gap: "8px",
  display: "flex",
  overflow: "hidden",
  paddingLeft: "40px",
  flexDirection: "column",
}));

const ChildItem = styled(Box)<{ isactive: string }>(({ isactive }) => ({
  fontWeight: isactive === "true" ? 500 : 400,
  fontSize: "14px",
  cursor: "pointer",
  padding: "8px 12px",
  borderRadius: "12px",
  color: isactive === "true" ? "#3963d5" : "#374151",
  "&:hover": {
    backgroundColor: "#f2f8ff",
  },
}));
