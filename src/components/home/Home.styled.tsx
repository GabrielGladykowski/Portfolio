import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const HomeStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 844px;
  position: relative;
`;

export const NameAndLastName = styled.p`
  display: flex;
  position: absolute;
  font-size: 20px;
  top: 3rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 180px;
    background-color: ${COLORS.PRIMARY};
    border-radius: 50px;
    bottom: -3px;
  }

  @media (min-width: 1024px) {
    left: 5rem;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 80%;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  display: flex;
  position: absolute;
  height: 273px;
  width: 273px;
  background-color: ${COLORS.PRIMARY};
  top: 8rem;
  border-radius: 50%;

  @media (min-width: 1024px) {
    left: 0;
    top: 0;
    position: relative;
  }
`;

export const LetteringLogo = styled.span`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 60px;
  font-family: Niconne;
  font-size: 70px;
  color: ${COLORS.FONT_COLOR_DARK_MODE};
`;

export const TittleWraper = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  top: 12rem;

  @media (min-width: 1024px) {
    text-align: start;
    justify-content: center;
    align-items: flex-start;
    width: max-content;
    top: 0;
    margin-left: 10px;
  }
`;

export const Tittle = styled.h1`
  font-size: 40px;
  color: ${COLORS.PRIMARY};

  font-weight: 600;
`;

export const LittleTittle = styled(Tittle)`
  font-size: 32px;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};
`;
