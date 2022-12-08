import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const NavigationStyled = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
`;

export const NavigatorButton = styled.button`
  display: block;
  position: absolute;
  width: 55px;
  height: 55px;
  background-color: ${COLORS.FONT_COLOR};
  border-radius: 10px 0 0 10px;
  border: none;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const NavigatorHamburger = styled.div`
  position: absolute;
  width: 35px;
  height: 4px;
  background-color: ${COLORS.FONT_COLOR_DARK_MODE};
  border-radius: 4px;
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 35px;
    height: 4px;
    border-radius: 4px;
    background-color: ${COLORS.FONT_COLOR_DARK_MODE};
    left: 0;
  }
  &::after {
    top: -10px;
  }
  &::before {
    top: 10px;
  }
`;

export const NavigationPoint = styled.ul<{ isOpen?: boolean }>`
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.BORDER_AND_SHADOW};
  position: absolute;
  top: 0;
  transform: translateX(${({ isOpen = false }) => (isOpen ? 0 : 100)}%);
  transition: transform 0.2s linear;
`;

export const NavigationList = styled.li`
  width: 100%;
  text-align: start;
  list-style-type: none;
`;

export const NavigationLink = styled.a<{ isShow?: boolean }>`
  display: block;
  font-size: 20px;
  padding: 15px;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${COLORS.FONT_COLOR_DARK_MODE};
  :active {
    background-color: ${COLORS.FONT_COLOR};
    transition: background-color 0.1s linear;
  }
`;
