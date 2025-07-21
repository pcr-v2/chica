import { Noto_Sans } from "next/font/google";

// import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";

export const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],

  // subsets: ["latin"],
  preload: false,
  display: "swap",
});

const responsiveFontSizes = ({ md, lH }: { md: number; lH: number }) => {
  return {
    // "@media (min-width:600px)": {
    //   fontSize: sm,
    // },
    "@media (min-width:834px)": {
      fontSize: md,
      lineHeight: `${lH}px`,
    },
    // "@media (min-width:1200px)": {
    //   fontSize: lg,
    // },
  };
};

const typography = {
  // fontFamily: notoSans,
  fontFamily: "SpoqaHanSansNeo, sans-serif",
  htmlFontSize: 16,
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  // h1: {
  //   fontSize: 36,
  //   lineHeight: "48px",
  //   ...responsiveFontSizes({ md: 44, lH: 56 }),
  // },
  // h2: {
  //   fontSize: 32,
  //   lineHeight: "44px",
  //   ...responsiveFontSizes({ md: 40, lH: 52 }),
  // },
  // h3: {
  //   fontSize: 28,
  //   lineHeight: "40px",
  //   ...responsiveFontSizes({ md: 32, lH: 48 }),
  // },
  // h4: {
  //   fontSize: 24,
  //   lineHeight: "36px",
  //   ...responsiveFontSizes({ md: 32, lH: 44 }),
  // },
  // subtitle1: {
  //   fontSize: 20,
  //   lineHeight: "26px",
  //   ...responsiveFontSizes({ md: 24, lH: 30 }),
  // },
  // subtitle2: {
  //   fontSize: 18,
  //   lineHeight: "24px",
  //   ...responsiveFontSizes({ md: 20, lH: 26 }),
  // },
  // subtitle3: {
  //   fontSize: 16,
  //   lineHeight: "22px",
  //   ...responsiveFontSizes({ md: 18, lH: 24 }),
  // },
  // subtitle3_long: {
  //   fontSize: 16,
  //   lineHeight: "26px",
  //   ...responsiveFontSizes({ md: 18, lH: 28 }),
  // },
  // subtitle4: {
  //   fontSize: 14,
  //   lineHeight: "20px",
  //   ...responsiveFontSizes({ md: 16, lH: 22 }),
  // },
  // subtitle4_long: {
  //   fontSize: 14,
  //   lineHeight: "24px",
  //   ...responsiveFontSizes({ md: 16, lH: 26 }),
  // },
  // body1: {
  //   fontSize: 16,
  //   lineHeight: "22px",
  //   ...responsiveFontSizes({ md: 18, lH: 24 }),
  // },
  // body1_long: {
  //   fontSize: 16,
  //   lineHeight: "26px",
  //   ...responsiveFontSizes({ md: 18, lH: 28 }),
  // },
  // body2: {
  //   fontSize: 14,
  //   lineHeight: "20px",
  //   ...responsiveFontSizes({ md: 16, lH: 22 }),
  // },
  // body2_long: {
  //   fontSize: 14,
  //   lineHeight: "24px",
  //   ...responsiveFontSizes({ md: 16, lH: 26 }),
  // },
  // body3: {
  //   fontSize: 14,
  //   lineHeight: "20px",
  // },
  // body3_long: {
  //   fontSize: 14,
  //   lineHeight: "24px",
  // },
  // caption1: {
  //   fontSize: 12,
  //   lineHeight: "18px",
  // },
};

export default typography;
