import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const HomeStyled = styled.header`
  height: 844px;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NameAndLastName = styled.a`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 3rem;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};

  ::after {
    content: '';
    height: 3px;
    width: 180px;
    position: absolute;
    bottom: -3px;
    border-radius: 50px;
    background-color: ${COLORS.PRIMARY};
    transition: background-color 0.2s linear;
  }

  @media (min-width: 1024px) {
    left: 5rem;
  }
`;

export const HomeWrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const Logo = styled.div`
  height: 273px;
  width: 273px;
  display: flex;
  position: absolute;
  top: 8rem;
  border-radius: 50%;
  background-color: ${COLORS.PRIMARY};

  @media (min-width: 1024px) {
    position: relative;
    top: 0;
    left: 0;
  }
`;

export const LetteringLogo = styled.span`
  display: flex;
  position: absolute;
  right: 60px;
  bottom: 20px;
  font-family: Niconne;
  font-size: 70px;
  color: ${COLORS.WHITE};
`;

export const TittleWraper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 12rem;
  text-align: center;

  @media (min-width: 1024px) {
    width: max-content;
    justify-content: center;
    align-items: flex-start;
    margin-left: 10px;
    top: 0;
    text-align: start;
  }
`;

export const Tittle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: 600;
  color: ${COLORS.PRIMARY};
`;

export const TittleDecoration = styled.span`
  font-size: 32px;
  font-weight: 500;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};
`;

export const SubTittle = styled.p`
  font-size: 32px;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};
`;
