import { styled } from '@linaria/react';
import { COLORS } from '../../const/COLORS';

export const ContactWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 183px;
  background-color: ${COLORS.FONT_COLOR};
  color: ${COLORS.FONT_COLOR_DARK_MODE};
  top: 61rem;
`;

export const ContactTitle = styled.h2`
  position: absolute;
  font-size: 30px;
  font-weight: 600;
  top: 15px;
`;

export const ContactLinksWrapper = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const ContactLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  padding: 10px 10px;
`;
