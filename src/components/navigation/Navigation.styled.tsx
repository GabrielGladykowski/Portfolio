import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const NavigationStyled = styled.nav`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  @media (min-width: 1024px) {
    position: static;
  }
`;

export const NavigatorButton = styled.button`
  height: 55px;
  width: 55px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0;
  right: 0;
  border: none;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundColorButton};
  transition: ${(props) => props.theme.transitionBackgroundColor};

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const NavigatorHamburger = styled.div<{ isOpen?: boolean }>`
  height: 4px;
  width: 35px;
  position: absolute;
  border-radius: 4px;
  background-color: ${({ isOpen = false }) =>
    isOpen ? 'transparent' : (props) => props.theme.backgroundColor};
  transition: background-color 0.15s linear;

  &::after,
  &::before {
    content: '';
    height: 4px;
    width: 35px;
    position: absolute;
    left: 0;
    border-radius: 4px;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: ${({ isOpen = false }) =>
        isOpen
          ? 'background-color 0.2s, top 0.1s, transform 0.1s 0.18s'
          : 'background-color 0.2s, top 0.1s 0.18s, transform 0.1s'}
      linear;
  }
  &::after {
    top: ${({ isOpen = false }) => (isOpen ? '0' : '-10px')};
    transform: rotate(${({ isOpen = false }) => (isOpen ? '45' : '0')}deg);
  }
  &::before {
    top: ${({ isOpen = false }) => (isOpen ? '0' : '10px')};
    transform: rotate(${({ isOpen = false }) => (isOpen ? '-45' : '0')}deg);
  }
`;

export const NavigationPoint = styled.ul<{ isOpen?: boolean }>`
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  background-color: ${COLORS.BORDER_AND_SHADOW};
  transform: translateX(${({ isOpen = false }) => (isOpen ? 0 : 100)}%);
  transition: transform 0.2s linear;

  @media (min-width: 1024px) {
    width: 520px;
    flex-direction: row;
    top: 3rem;
    right: 3rem;
    background-color: transparent;
    transform: none;
  }
`;

export const NavigationList = styled.li`
  width: 100%;
  list-style-type: none;
  text-align: start;

  @media (min-width: 1024px) {
    text-align: center;
  }
`;

export const NavigationLink = styled.a<{ isShow?: boolean }>`
  display: block;
  padding: 15px;
  font-size: 20px;
  border: none;
  text-decoration: none;
  color: ${COLORS.WHITE};
  background-color: transparent;

  :active {
    background-color: ${COLORS.BLACK};
    transition: background-color 0.1s linear;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    padding: 0;
    color: ${(props) => props.theme.color};
    transition: ${(props) => props.theme.transitionColor};

    :active {
      color: ${(props) => props.theme.underlined};
      background-color: transparent;
      transition: none;
    }

    ::after {
      content: '';
      height: 3px;
      width: 10px;
      position: absolute;
      bottom: -3px;
      border-radius: 50px;
      background-color: ${COLORS.PRIMARY};
      transition: width 0.2s, background-color 0.2s linear;
    }

    :hover::after {
      width: 50px;
      transition: width 0.2s linear;
    }
  }
`;
