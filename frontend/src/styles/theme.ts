import { css, DefaultTheme } from "styled-components";

const colors = {
  yellow_700: "#CC8200",
  yellow_600: "#EB9500",
  yellow: "#FFAD1E",
  yellow_400: "#FFC052",
  yellow_300: "#FFD285",
  yellow_200: "#FFE5B8",
  yellow_100: "#FFECCC",
  yellow_50: "#FFF5E4",

  mint: "#35D0BA",
  mint_400: "#7EE3D5",
  mint_300: "#B2EDE3",
  mint_200: "#DDF6F6",
  mint_100: "#EEF9F9",

  gray_900: "#1B1D1F",
  gray_800: "#24282D",
  gray_700: "#303539",
  gray_600: "#454C53",
  gray_500: "#6C7885",
  gray_400: "#9EA4AA",
  gray_200: "#C9CDD2",
  gray_100: "#E8EBED",
  gray_50: "#F7F8F9",

  white: "#FFF",
  red: "#FA000A",

  main_bg: "#f9f9f9;",
};

const fonts = {
  Field: css`
    font-family: Pretendard;
    color: #8c8c8c;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 25.2px */
  `,
  Footer: css`
    font-family: Pretendard;
    font-style: normal;
    font-size: 1rem;
    font-weight: 400;
    line-height: 14px; /* 140% */
  `,
};

const effects = {
  dimmed_40: `
  background: rgba(0, 0, 0, 0.40)`,
};

const theme: Pick<DefaultTheme, "colors" | "fonts" | "effects"> = {
  colors,
  fonts,
  effects,
};

export default theme;
