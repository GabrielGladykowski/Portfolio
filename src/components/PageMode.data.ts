import { COLORS } from '../const/COLORS';

export const darkTheme = {
  backgroundColor: `${COLORS.FONT_COLOR}`,
  backgroundColorBorder: 'transparent',
  backgroundColorButton: `${COLORS.FONT_COLOR_DARK_MODE}`,
  color: `${COLORS.FONT_COLOR_DARK_MODE}`,
  transitionBackgroundColor: 'background-color 0.2s linear',
  transitionColor: 'color 0.2s linear',
  transitionColorBorder: 'border 0.2s linear',
};
export const lightTheme = {
  backgroundColor: `${COLORS.FONT_COLOR_DARK_MODE}`,
  backgroundColorBorder: `${COLORS.FONT_COLOR}`,
  backgroundColorButton: `${COLORS.FONT_COLOR}`,
  color: `${COLORS.FONT_COLOR}`,
  transitionBackgroundColor: 'background-color 0.2s linear',
  transitionColor: 'color 0.2s linear',
  transitionColorBorder: 'border 0.2s linear',
};
