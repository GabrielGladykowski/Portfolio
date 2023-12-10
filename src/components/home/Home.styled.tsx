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
  background-color: ${COLORS.PRIMARY};
  animation: blub 15s ease-in-out infinite;
  transition: border-radius 1s ease-in-out;

  @keyframes blub {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }

    10% {
      border-radius: 60% 30% 70% 40%/50% 60% 50% 60%;
    }

    20% {
      border-radius: 30% 60% 70% 40%/50% 60% 60% 50%;
    }

    30% {
      border-radius: 30% 60% 40% 70%/50% 60% 30% 60%;
    }

    40% {
      border-radius: 70% 60% 40% 30%/60% 80% 50% 60%;
    }

    50% {
      border-radius: 70% 40% 60% 30%/60% 80% 50% 60%;
    }

    60% {
      border-radius: 40% 70% 30% 60%/70% 50% 60% 50%;
    }

    70% {
      border-radius: 40% 70% 60% 30%/50% 60% 80% 50%;
    }

    80% {
      border-radius: 60% 30% 70% 40%/50% 60% 50% 60%;
    }

    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }

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
