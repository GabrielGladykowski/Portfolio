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
  /* bottom: -59rem; */
  flex-direction: column;
  padding: 3%;
  margin: 5% 0;
  color: ${COLORS.FONT_COLOR};
`;

export const AboutMeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const AboutDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;

// export const AboutMeLink = styled.a`
//   text-decoration: none;
//   color: ${COLORS.FONT_COLOR};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: relative;
// `;

// export const AboutMeUnderscore = styled.div`
//   position: absolute;
//   height: 2px;
//   width: 100px;
//   background-color: ${COLORS.PRIMARY};
//   border-radius: 50px;
//   bottom: -3px;
// `;
