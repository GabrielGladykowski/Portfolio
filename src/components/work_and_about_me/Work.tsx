import React, { FC } from 'react';
import {
  WorkBorder,
  WorkDescription,
  WorkImage,
  WorkLink,
  WorkStyled,
  WorkSubtitle,
  WorkTextWrapper,
  WorkTitle,
  WorkTitleWrapper,
  WorkWrapper,
} from './Work.styled';
import { StaticImage } from 'gatsby-plugin-image';

export const Work: FC = () => {
  return (
    <WorkStyled id="work">
      <WorkBorder>
        <WorkWrapper>
          <WorkTextWrapper>
            <WorkTitleWrapper>
              <WorkTitle>Watch</WorkTitle>
              <WorkSubtitle>Modeled Design</WorkSubtitle>
            </WorkTitleWrapper>
            <WorkDescription>
              This is a modeled design of the Rolex Datejust 41 that was created in React with
              typescript.
            </WorkDescription>
          </WorkTextWrapper>
          <WorkImage>
            <StaticImage src="../../images/watch_portfolio.png" alt="lalala" />
          </WorkImage>
          <WorkLink href="https://react-watch-datejust.netlify.app" target="_blank" rel="noopener">
            View Project
          </WorkLink>
        </WorkWrapper>
      </WorkBorder>
    </WorkStyled>
  );
};
