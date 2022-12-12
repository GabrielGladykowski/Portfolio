import React from 'react';
import { Contact } from './contact/Contact';
import { Cookies } from './cookies/Cookies';
import { Home } from './home/Home';
import { Navigation } from './navigation/Navigation';
import { PortfolioStyled } from './Portfolio.styled';
import { AboutMe } from './work_and_about_me/AboutMe';
import { Work } from './work_and_about_me/Work';

export const Portfolio = () => (
  <PortfolioStyled>
    <Cookies />
    <Navigation />
    <Home />

    <Work />
    <AboutMe />

    <Contact />
  </PortfolioStyled>
);
