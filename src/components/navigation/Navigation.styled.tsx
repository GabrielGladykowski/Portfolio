import { styled } from '@linaria/react';
import { COLORS } from '../../const/COLORS';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.BORDER_AND_SHADOW};
`;

export const NavigationButton = styled.button`
  display: block;
  width: 100%;
  text-align: start;
  padding: 15px;
  font-size: 20px;
  background-color: transparent;
  border: none;
  color: ${COLORS.FONT_COLOR};
`;
