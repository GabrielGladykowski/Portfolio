import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const HomeDarkMode = styled.button`
  width: max-content;
  height: max-content;
  background-color: transparent;
  display: flex;
  position: absolute;
  top: 6rem;
  border: none;
  padding: 0 0 3px 2px;
  font-size: 20px;
  font-family: Montserrat;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: color 0.2s linear;
  z-index: 1;

  @media (min-width: 1024px) {
    top: 3rem;
    left: 20rem;
  }
`;

export const HomeWrapperMode = styled.div`
  display: flex;
  flex-direction: column;

  ::before {
    content: '';
    position: absolute;
    bottom: 3px;
    height: 23px;
    width: 60px;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background-color 0.2s linear;
    z-index: 1;
  }
`;

export const HomeLight = styled.span<{ isMode?: boolean }>`
  font-size: 20px;
  transform: translateY(${({ isMode = false }) => (isMode ? 100 : 0)}%);
  transition: transform 0.2s linear;
`;
export const HomeDark = styled.span<{ isMode?: boolean }>`
  font-size: 20px;
  transform: translateY(${({ isMode = false }) => (isMode ? -100 : 0)}%);
  transition: transform 0.2s linear;
`;
