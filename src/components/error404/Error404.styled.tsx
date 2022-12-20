import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const Error404Styled = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  color: ${COLORS.BLACK};
  transform: translateY(50%);
`;

export const Error404Tittle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  color: ${COLORS.PRIMARY};
`;

export const Error404Description = styled.p`
  text-align: center;
  font-size: 20px;
`;

export const Error404Link = styled.a`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 0;
  bottom: -20px;
  text-decoration: none;
  font-size: 20px;
  color: ${COLORS.BLACK};

  :active {
    color: ${COLORS.PRIMARY};
  }

  ::before {
    content: '';
    height: 3px;
    width: 10px;
    position: absolute;
    bottom: -3px;
    border-radius: 50px;
    background-color: ${COLORS.PRIMARY};
    transition: width 0.2s, background-color 0.2s linear;
  }

  :hover::before {
    width: 50px;
    transition: width 0.2s linear;
  }
`;
