import { styled } from '@linaria/react';
import { COLORS } from '../../const/COLORS';

export const AboutMeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  bottom: -59rem;
  flex-direction: column;
  padding: 13px;
  color: ${COLORS.FONT_COLOR};
`;

export const AboutMeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
`;
