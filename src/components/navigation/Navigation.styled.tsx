import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const NavigationStyled = styled.nav`
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    position: static;
  }
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
  @media (min-width: 1024px) {
    display: none;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: ${COLORS.BORDER_AND_SHADOW};
  position: absolute;
  top: 0;
  transform: translateX(${({ isOpen = false }) => (isOpen ? 0 : 100)}%);
  transition: transform 0.2s linear;

  @media (min-width: 1024px) {
    transform: translateX(0);
    flex-direction: row;
    background-color: transparent;
    top: 3rem;
    width: 520px;
    right: 3rem;
  }
`;

export const NavigationList = styled.li`
  width: 100%;
  text-align: start;
  list-style-type: none;

  @media (min-width: 1024px) {
    text-align: center;
  }
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

  @media (min-width: 1024px) {
    display: flex;
    position: static;
    color: ${COLORS.FONT_COLOR};
    margin: 0 5px;
    padding: 0;

    align-items: center;
    justify-content: center;

    :active {
      background-color: transparent;
      transition: none;
      color: ${COLORS.PRIMARY};
    }

    ::after {
      content: '';
      visibility: visible;
      position: absolute;
      height: 2px;
      width: 10px;
      background-color: ${COLORS.PRIMARY};
      border-radius: 50px;
      bottom: -3px;
      transition: width 0.2s linear;
    }

    :hover::after {
      width: 50px;
      transition: width 0.2s linear;
    }
  }
`;
