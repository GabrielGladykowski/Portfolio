import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const CookiesStyled = styled.aside`
  width: 90%;
  height: max-content;
  background-color: ${COLORS.PRIMARY};
  z-index: 1;
  position: fixed;
  bottom: 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 600px;
    right: 10px;
  }
`;

export const CoookieWrapperText = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    left: 10px;
    width: 100%;
  }
`;

export const CookiesHeader = styled.h2`
  font-size: 20px;
  color: ${COLORS.FONT_COLOR_DARK_MODE};
  font-weight: 500;
  text-align: center;
`;

export const CookieText = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${COLORS.FONT_COLOR_DARK_MODE};

  @media (min-width: 1024px) {
    text-align: start;
  }
`;

export const CookiesButton = styled.button`
  width: max-content;
  height: 40px;
  background-color: ${COLORS.FONT_COLOR_DARK_MODE};
  border-radius: 10px;
  border: none;
  padding: 0 5px;
  margin-top: 10px;
  font-size: 20px;
  color: ${COLORS.PRIMARY};
  text-transform: uppercase;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s linear;

  @media (min-width: 1024px) {
    margin: 0;

    :hover {
      transform: scale(1.05);
      transition: transform 0.2s linear;
    }
  }
`;
