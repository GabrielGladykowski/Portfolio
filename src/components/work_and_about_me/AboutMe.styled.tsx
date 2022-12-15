import styled from 'styled-components';
import { COLORS } from '../../const/COLORS';

export const AboutMeWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  padding: 3%;
  margin: 5% 0;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};
`;

export const AboutMeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const AboutDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin: 20px 15%;
  }

  @media (min-width: 1024px) {
    margin: 20px 25%;
  }
`;
