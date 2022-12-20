import styled from 'styled-components';

export const AboutMeWrapper = styled.article`
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
  padding: 3%;
  text-align: center;
  color: ${(props) => props.theme.color};
  transition: ${(props) => props.theme.transitionColor};
`;

export const AboutMeTitle = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

export const AboutDescription = styled.p`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;

  @media (min-width: 768px) {
    margin: 20px 15%;
  }

  @media (min-width: 1024px) {
    margin: 20px 25%;
  }
`;
