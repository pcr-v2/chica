import { colors as defaultColor } from "@mui/material";
const colors: any = {
  ...defaultColor,
  aqua: {
    50: "#EBFAFF",
    100: "#C8F1FF",
    200: "#8AE2FF",
    300: "#4ED3FF",
    400: "#24BEF0",
    500: "#00B0E9",
    600: "#0096C8",
    700: "#00769C",
    800: "#006080",
    900: "#00455B",
  },

  blue: {
    50: "#E5F2FF",
    100: "#BDDEFF",
    200: "#92CAFF",
    300: "#67B5FF",
    400: "#48A4FF",
    500: "#3196FF",
    600: "#3186F0",
    700: "#2F74DC",
    800: "#2D62CA",
    900: "#2943AA",
  },
};

const palette = {
  ...colors,
  background01: {
    main: "#FFFFFF",
  },
  background02: {
    main: colors.grey[50],
  },
  background03: {
    main: colors.grey[200],
  },
  background04: {
    main: colors.grey[300],
  },
  background05: {
    main: colors.blue[50],
  },
  background06: {
    main: colors.lightBlue[50],
  },
  text01: {
    main: colors.grey[900],
  },
  text02: {
    main: colors.grey[800],
  },
  text03: {
    main: colors.grey[700],
  },
  text04: {
    main: colors.grey[500],
  },
  text05: {
    main: colors.grey[400],
  },
  textWhite: {
    main: colors.grey[50],
  },
  line01: {
    main: colors.grey[300],
  },
  line02: {
    main: colors.grey[200],
  },
  line03: {
    main: colors.blue[100],
  },
  line04: {
    main: colors.lightBlue[100],
  },
  primary: {
    main: colors.blue[500],
  },
  primaryPress: {
    main: colors.blue[300],
  },
  secondary: {
    main: colors.aqua[400],
  },
  secondaryPress: {
    main: colors.aqua[300],
  },
  success: {
    main: colors.blue[500],
  },
  information: {
    main: colors.aqua[400],
  },
  warning: {
    main: colors.amber[700],
  },
  error: {
    main: colors.red[500],
    contrastText: "#FFFFFF",
  },
  errorPress: {
    main: colors.red[300],
  },
  negative: {
    main: "#FA6561",
  },
  negativePress: {
    main: "#FA8382",
  },
  opacity80: {
    main: "rgba(0, 0, 0, 0.8)",
  },
  opacity60: {
    main: "rgba(0, 0, 0, 0.6)",
  },
  opacity40: {
    main: "rgba(0, 0, 0, 0.4)",
  },
};

export default palette;
