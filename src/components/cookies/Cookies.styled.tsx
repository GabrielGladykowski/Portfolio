import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const CookiesStyled = styled.aside`
  height: max-content;
  width: 90%;
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
  padding: 10px;
  bottom: 25px;
  border-radius: 10px;
  background-color: ${COLORS.PRIMARY};

  @media (min-width: 1024px) {
    width: 600px;
    flex-direction: row;
    right: 10px;
  }
`;

export const CoookieWrapperText = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    left: 10px;
  }
`;

export const CookiesHeader = styled.h2`
  color: ${COLORS.WHITE};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`;

export const CookieText = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${COLORS.WHITE};

  @media (min-width: 1024px) {
    text-align: start;
  }
`;

export const CookiesButton = styled.button`
  height: 40px;
  width: max-content;
  margin-top: 10px;
  padding: 0 5px;
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
  color: ${COLORS.PRIMARY};
  background-color: ${COLORS.WHITE};
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
