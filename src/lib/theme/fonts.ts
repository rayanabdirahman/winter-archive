import { baseColors } from "./colors";

const weight = {
  ExtraBold: 800,
  Bold: 700,
  SemiBold: 600,
  Regular: 400,
};

const color = {
  black: baseColors.neutral.black900,
  gray: baseColors.neutral.gray500,
};

export default {
  color,
  weight,
} as const;
