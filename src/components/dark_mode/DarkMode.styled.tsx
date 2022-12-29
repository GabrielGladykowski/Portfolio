import styled from 'styled-components';

export const HomeDarkMode = styled.button`
  height: max-content;
  width: max-content;
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 0 5px 3px 5px;
  top: 6rem;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  background-color: transparent;
  transition: color 0.2s linear;

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
    height: 50%;
    width: 100%;
    position: absolute;
    z-index: 1;
    bottom: 3px;
    background-color: ${(props) => props.theme.backgroundColor};
    transition: background-color 0.2s linear;
  }
`;

export const HomeLight = styled.span<{ isMode?: boolean }>`
  transform: translateY(${({ isMode = false }) => (isMode ? 100 : 0)}%);
  transition: transform ${({ isMode = false }) => (isMode ? '0.2s' : '0.2s 0.2s')} linear;
`;
export const HomeDark = styled.span<{ isMode?: boolean }>`
  transform: translateY(${({ isMode = false }) => (isMode ? -100 : 0)}%);
  transition: transform ${({ isMode = false }) => (isMode ? '0.2s 0.2s' : ' 0.2s')} linear;
`;
