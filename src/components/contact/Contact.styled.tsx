import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const ContactWrapper = styled.footer`
  width: 100%;
  height: 183px;
  background-color: ${COLORS.BLACK};

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  top: 20px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    left: 20px;
  }
`;

export const ContactTitle = styled.h2`
  /* position: absolute; */
  font-size: 30px;
  font-weight: 600;
  top: 15px;
  color: ${COLORS.WHITE};
  padding: 10px;
`;

export const ContactLinksWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ContactLink = styled.a`
  font-size: 20px;
  font-weight: 500;
  padding: 0 10px;
  text-decoration: none;
  color: ${COLORS.WHITE};

  :active {
    color: ${COLORS.PRIMARY};
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;

    ::after {
      content: '';
      visibility: visible;
      position: absolute;
      height: 2px;
      width: 10px;
      background-color: ${COLORS.WHITE};
      border-radius: 50px;
      bottom: -3px;
      transition: width 0.2s linear;
    }

    :hover::after {
      width: 50px;
      transition: width 0.2s linear;
    }

    :active::after {
      background-color: ${COLORS.PRIMARY};
    }
  }
`;
