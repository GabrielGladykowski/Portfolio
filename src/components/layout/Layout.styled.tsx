import styled from 'styled-components';

export const PortfolioStyled = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  transition: ${(props) => props.theme.transitionBackgroundColor};
`;
