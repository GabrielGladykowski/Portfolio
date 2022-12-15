import styled from 'styled-components';

export const PortfolioStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transitionBackgroundColor};
`;
