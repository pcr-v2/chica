import { createTheme, Theme } from "@mui/material";

import customMuiAccordion from "./overrides/Accordion";
import customMuiButton from "./overrides/Button";
import customMuiDialog from "./overrides/Dialog";
import customMuiSelect from "./overrides/Select";
import customMuiTextField from "./overrides/TextField";
import customPalette from "./palette";
import customTypography from "./typography";

// Create a theme instance.

const theme = createTheme({
  palette: {
    mode: "light",
    ...customPalette,
  },
  breakpoints: {
    values: {
      xs: 0,
      xsm: 360,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,

      mobile: 360,
      tablet: 834,
      desktop: 1200,
    },
  },
  typography: {
    ...customTypography,
  },

  components: {
    ...customMuiDialog,
    ...customMuiButton,
    ...customMuiTextField,
    ...customMuiAccordion,
    ...customMuiSelect,
  },
});

export default theme;
