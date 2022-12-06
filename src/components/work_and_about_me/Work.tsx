import React, { FC } from 'react';
import {
  WorkDescription,
  WorkImage,
  WorkLink,
  WorkStyled,
  WorkSubtitle,
  WorkTitle,
  WorkUnderscore,
  WorkWrapper,
} from './Work.styled';
import screenshot from '../../images/watch_portfolio.png';
import { AboutMe } from './AboutMe';

export const Work: FC = () => (
  <WorkStyled>
    <WorkWrapper>
      <WorkTitle>Watch</WorkTitle>
      <WorkSubtitle>Modeled Design</WorkSubtitle>
      <WorkDescription>
        This is a modeled design of the Rolex Datejust 41 that was created in React with typescript.
      </WorkDescription>
      <WorkImage src={screenshot} alt="" />
      <WorkLink href="https://react-watch-datejust.netlify.app">
        View Project
        <WorkUnderscore />
      </WorkLink>
    </WorkWrapper>
  </WorkStyled>
);
