import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const WorkStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WorkBorder = styled.div`
  border-radius: 15px;
  box-shadow: 0 0 20px ${COLORS.BORDER_AND_SHADOW};
  padding: 20px 0;
  margin: 20px;
  height: auto;
  width: auto;

  color: ${COLORS.FONT_COLOR};

  @media (min-width: 1024px) {
    justify-content: center;
    align-content: center;
    text-align: start;
    padding: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const WorkWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const WorkTextWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
    flex-direction: row;
  }
`;

export const WorkTitleWrapper = styled.header`
  @media (min-width: 1024px) {
    text-align: start;
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 20px;
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
  font-size: 20px;
  line-height: 30px;
  padding: 10px 50px;

  @media (min-width: 1024px) {
    padding: 0;
    width: 400px;
  }
`;

export const WorkImage = styled.picture`
  width: auto;
  height: 400px;
  border: 5px solid ${COLORS.FONT_COLOR};
  box-shadow: 0 5px 10px ${COLORS.FONT_COLOR};
  border-radius: 5px;
  object-fit: cover;
  display: flex;
  margin: 10px 50px;

  @media (min-width: 1024px) {
    width: 740px;
    display: flex;
    position: static;
    margin: 65px 50px 10px 50px;
  }
`;

export const WorkLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${COLORS.FONT_COLOR};

  ::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 20px;
    background-color: ${COLORS.PRIMARY};
    border-radius: 50px;
    bottom: -3px;
    transition: width 0.2s linear;
  }
  :hover::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100px;
    background-color: ${COLORS.PRIMARY};
    border-radius: 50px;
    bottom: -3px;
    transition: width 0.2s linear;
  }

  @media (min-width: 1024px) {
    position: absolute;
    top: 105px;
  }
`;
