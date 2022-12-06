import { styled } from '@linaria/react';
import { COLORS } from '../../const/COLORS';

export const WorkStyled = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const WorkWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0 0 20px ${COLORS.BORDER_AND_SHADOW};
  height: auto;
  width: auto;
  padding: 20px 0;
  margin: 20px;
  top: 54rem;
  color: ${COLORS.FONT_COLOR};
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
`;

export const WorkImage = styled.img`
  width: 312px;
  height: 400px;
  border: 5px solid ${COLORS.FONT_COLOR};
  box-shadow: 0 5px 10px ${COLORS.FONT_COLOR};
  border-radius: 15px;
  object-fit: cover;
  display: flex;
  margin: 5px 0 20px 0;
`;

export const WorkLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const WorkUnderscore = styled.div`
  position: absolute;
  height: 2px;
  width: 100px;
  background-color: ${COLORS.PRIMARY};
  border-radius: 50px;
  bottom: -3px;
`;
