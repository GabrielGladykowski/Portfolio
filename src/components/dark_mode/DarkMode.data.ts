import { COLORS } from '../../const/COLORS';

export const darkTheme = {
  backgroundColor: `${COLORS.BLACK}`,
  backgroundColorBorder: 'transparent',
  backgroundColorButton: `${COLORS.WHITE}`,
  color: `${COLORS.WHITE}`,
  transitionBackgroundColor: 'background-color 0.2s linear',
  transitionColor: 'color 0.2s linear',
  transitionColorBorder: 'border 0.2s linear',
};
export const lightTheme = {
  backgroundColor: `${COLORS.WHITE}`,
  backgroundColorBorder: `${COLORS.BLACK}`,
  backgroundColorButton: `${COLORS.BLACK}`,
  color: `${COLORS.BLACK}`,
  transitionBackgroundColor: 'background-color 0.2s linear',
  transitionColor: 'color 0.2s linear',
  transitionColorBorder: 'border 0.2s linear',
};
