import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ca2e3f",
  primaryBright: "#f55858",
  primaryDark: "#bd1e1e",
  secondary: "#773344",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#06000D",
  invertedContrast: "#FEFDEF",
  input: "#f4eaf0",
  inputSecondary: "#e8c3c3",
  tertiary: "#f5eff3",
  text: "#ca2e3f",
  textDisabled: "#c4bdc0",
  textSubtle: "#bd7171",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#6d4ed9",
  background: "#06000D",
  backgroundDisabled: "#3c3742",
  contrast: "#FEFDEF",
  invertedContrast: "#26131e",
  input: "#5a3f4f",
  inputSecondary: "#8d5765",
  primaryDark: "#cc2774",
  tertiary: "#473539",
  text: "#fce2e9",
  textDisabled: "#716168",
  textSubtle: "#d48bb0",
  borderColor: "#634b53",
  card: "#2c2628",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
