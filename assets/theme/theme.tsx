import { ThemeType } from "./types";

export const THEME: ThemeType = {
  COLORS: {
    PRESSABLES: '#b50838',
    MAIN_TEXT: '#1a1a1a',
    SECONDARY_TEXT: '#767676',
    BACKGROUND: '#FFFFFF',
    DIVIDERS: '#edeef1',
  },
  GRID: {
    GUTTER: 16,
    GAP: 32,
    PADDING: 16,
    BORDER_RADIUS: 16,
    BORDER_WIDTH: 1,
  },
} as const;
