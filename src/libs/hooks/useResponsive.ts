import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export default function useResponsive(
  query: string,
  key: number | Breakpoint,
  start?: number | Breakpoint,
  end?: number | Breakpoint
) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(key));

  const mediaDown = useMediaQuery(theme.breakpoints.down(key));

  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(
      start as number | Breakpoint,
      end as number | Breakpoint
    )
  );

  const mediaOnly = useMediaQuery(theme.breakpoints.only(key as Breakpoint));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  if (query === "only") {
    return mediaOnly;
  }
  return null;
}
