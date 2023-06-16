import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const WorkStyled = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 20px;
  }
`;

export const WorkBorder = styled.div<{ inProgress: boolean }>`
  height: auto;
  width: auto;
  margin: 20px;
  padding: 20px 0;
  border-radius: 15px;
  box-shadow: 0 0 20px ${COLORS.BORDER_AND_SHADOW};
  background-color: ${({ inProgress }) => (inProgress ? '#818181' : '')};
  cursor: ${({ inProgress }) => (inProgress ? 'not-allowed' : '')};
  opacity: ${({ inProgress }) => (inProgress ? '30%' : '')};

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    padding: 30px;
    text-align: start;
  }
`;

export const WorkWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
`;

export const WorkTextWrapper = styled.div`
  @media (min-width: 1024px) {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 10px;
    text-align: start;
  }
`;

export const WorkTitleWrapper = styled.header`
  @media (min-width: 1024px) {
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    text-align: start;
  }
`;

export const WorkTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
`;

export const WorkSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${COLORS.BORDER_AND_SHADOW};
`;

export const WorkDescription = styled.p`
  padding: 10px 50px;
  line-height: 30px;
  font-size: 20px;

  @media (min-width: 1024px) {
    width: 400px;
    padding: 0;
  }
`;

export const WorkImage = styled.picture`
  width: 80%;
  height: 400px;
  display: flex;
  margin: 10px 50px;
  border: 5px solid ${(props) => props.theme.backgroundColorBorder};
  border-radius: 5px;
  box-shadow: 0 5px 10px ${COLORS.BLACK};
  object-fit: cover;
  transition: ${(props) => props.theme.transitionColorBorder};

  @media (min-width: 1024px) {
    width: 740px;
    display: flex;
    position: static;
    margin: 65px 50px 10px 50px;
  }
`;

export const WorkLink = styled.a<{ inProgress: boolean }>`
  display: flex;
  position: relative;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  pointer-events: ${({ inProgress }) => (inProgress ? 'none' : '')};
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};

  :active {
    color: ${(props) => props.theme.underlined};
    transition: none;
  }

  ::after {
    content: '';
    height: 3px;
    width: 100px;
    position: absolute;
    bottom: -3px;
    border-radius: 50px;
    background-color: ${COLORS.PRIMARY};
    transition: width 0.2s, background-color 0.2s linear;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 115px;

    ::after {
      width: 20px;
    }

    :hover::after {
      width: 100px;
      transition: width 0.2s linear;
    }
  }
`;
