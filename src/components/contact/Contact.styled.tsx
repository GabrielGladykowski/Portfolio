import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const ContactWrapper = styled.footer`
  height: 183px;
  width: 100%;
  background-color: ${COLORS.BLACK};

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const ContactContainer = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 20px;

  @media (min-width: 1024px) {
    align-items: flex-start;
    left: 20px;
  }
`;

export const ContactTitle = styled.h2`
  padding: 10px;
  top: 15px;
  font-size: 30px;
  font-weight: 600;
  color: ${COLORS.WHITE};
`;

export const ContactLinksWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  color: ${COLORS.WHITE};

  :active {
    color: ${COLORS.PRIMARY};
  }

  ::after {
    content: '';
    height: 3px;
    width: 50px;
    position: absolute;
    bottom: -3px;
    border-radius: 50px;
    background-color: ${COLORS.PRIMARY};
    transition: width 0.2s linear;
  }

  @media (min-width: 1024px) {
    ::after {
      width: 10px;
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
