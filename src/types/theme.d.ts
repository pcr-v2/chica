import { createTheme } from "@mui/material";

declare module "@mui/material" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    xsm: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    desktop: true;
  }
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
    caption3: React.CSSProperties;
    body3: React.CSSProperties;
    subtitle3_long: React.CSSProperties;
    subtitle4_long: React.CSSProperties;
    body1_long: React.CSSProperties;
    body2_long: React.CSSProperties;
    body3_long: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    subtitle4?: React.CSSProperties;
    caption1?: React.CSSProperties;
    body3?: React.CSSProperties;
    subtitle3_long?: React.CSSProperties;
    subtitle4_long?: React.CSSProperties;
    body1_long?: React.CSSProperties;
    body2_long?: React.CSSProperties;
    body3_long?: React.CSSProperties;
  }

  interface Palette {
    background01: Palette["primary"];
    background02: Palette["primary"];
    background03: Palette["primary"];
    background04: Palette["primary"];
    background05: Palette["primary"];
    background06: Palette["primary"];
    text01: Palette["primary"];
    text02: Palette["primary"];
    text03: Palette["primary"];
    text04: Palette["primary"];
    text05: Palette["primary"];
    textWhite: Palette["primary"];
    line01: Palette["primary"];
    line02: Palette["primary"];
    line03: Palette["primary"];
    line04: Palette["primary"];
    primary: Palette["primary"];
    primaryPress: Palette["primary"];
    secondary: Palette["primary"];
    secondaryPress: Palette["primary"];
    success: Palette["primary"];
    information: Palette["primary"];
    warning: Palette["primary"];
    errorPress: Palette["primary"];
    negative: Palette["primary"];
    negativePress: Palette["primary"];
    opacity80: Palette["primary"];
    opacity60: Palette["primary"];
    opacity40: Palette["primary"];
    red: { [string | number]: string }[];
    pink: { [string | number]: string }[];
    orange: { [string | number]: string }[];
    amber: { [string | number]: string }[];
    lime: { [string | number]: string }[];
    green: { [string | number]: string }[];
    teal: { [string | number]: string }[];
    cyan: { [string | number]: string }[];
    aqua: { [string | number]: string }[];
    lightBlue: { [string | number]: string }[];
    blue: { [string | number]: string }[];
    deepPurple: { [string | number]: string }[];
    gray: { [string | number]: string }[];
  }
  interface PaletteOptions {
    background01: PaletteOptions["primary"];
    background02: PaletteOptions["primary"];
    background03: PaletteOptions["primary"];
    background04: PaletteOptions["primary"];
    background05: PaletteOptions["primary"];
    background06: PaletteOptions["primary"];
    text01: PaletteOptions["primary"];
    text02: PaletteOptions["primary"];
    text03: PaletteOptions["primary"];
    text04: PaletteOptions["primary"];
    text05: PaletteOptions["primary"];
    textWhite: PaletteOptions["primary"];
    line01: PaletteOptions["primary"];
    line02: PaletteOptions["primary"];
    line03: PaletteOptions["primary"];
    line04: PaletteOptions["primary"];
    primary?: PaletteOptions["primary"];
    primaryPress: PaletteOptions["primary"];
    secondary?: PaletteOptions["primary"];
    secondaryPress: PaletteOptions["primary"];
    success?: PaletteOptions["primary"];
    information: PaletteOptions["primary"];
    warning?: PaletteOptions["primary"];
    errorPress: PaletteOptions["primary"];
    negative: PaletteOptions["primary"];
    negativePress: PaletteOptions["primary"];
    opacity80: PaletteOptions["primary"];
    opacity60: PaletteOptions["primary"];
    opacity40: PaletteOptions["primary"];
    red: { [string]: string }[];
    pink: { [string]: string }[];
    orange: { [string]: string }[];
    amber: { [string]: string }[];
    lime: { [string]: string }[];
    green: { [string]: string }[];
    teal: { [string]: string }[];
    cyan: { [string]: string }[];
    aqua: { [string]: string }[];
    lightBlue: { [string]: string }[];
    blue: { [string]: string }[];
    deepPurple: { [string]: string }[];
    gray: { [string]: string }[];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    subtitle4: true;
    caption1: true;
    body3: true;
    subtitle3_long: true;
    subtitle4_long: true;
    body1_long: true;
    body2_long: true;
    body3_long: true;
  }
}
