import { styled } from '@linaria/react';
import { COLORS } from '../../const/COLORS';

export const HomeStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  color: ${COLORS.FONT_COLOR};
`;

export const NameAndLastName = styled.p`
  display: flex;
  position: absolute;
  font-size: 20px;
  top: 2.5rem;
  align-items: center;
  justify-content: center;
`;

export const Underscore = styled.div`
  position: absolute;
  height: 2px;
  width: 200px;
  background-color: ${COLORS.PRIMARY};
  border-radius: 50px;
  bottom: -3px;
`;

export const Logo = styled.div`
  display: flex;
  position: absolute;
  height: 273px;
  width: 273px;
  background-color: ${COLORS.PRIMARY};
  top: 10rem;
  border-radius: 50%;
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
  position: absolute;
  text-align: center;
  width: 100%;
  top: 33rem;
`;

export const Tittle = styled.h1`
  font-size: 40px;
  color: ${COLORS.PRIMARY};
  font-weight: 600;
`;

export const LittleTittle = styled(Tittle)`
  font-size: 32px;
  color: ${COLORS.FONT_COLOR};
`;
