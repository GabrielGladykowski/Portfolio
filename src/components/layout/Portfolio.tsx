import React, { useState } from 'react';
import { Contact } from '../contact/Contact';
import { Cookies } from '../cookies/Cookies';
import { Home } from '../home/Home';
import { Navigation } from '../navigation/Navigation';
import { darkTheme, lightTheme } from '../dark_mode/DarkMode.data';
import { PortfolioStyled } from './Portfolio.styled';
import { Work } from '../work/Work';
import { ThemeProvider } from 'styled-components';
import { DarkMode } from '../dark_mode/DarkMode';
import { AboutMe } from '../about_me/AboutMe';

export const Portfolio = () => {
  const [isTheme, setIsTheme] = useState('light');
  const isDarkTheme = isTheme === 'dark';

  const toggleTheme = () => {
    setIsTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PortfolioStyled>
        <Navigation />
        <DarkMode toggleTheme={toggleTheme} />
        <Home />
        <Work />
        <AboutMe />
        <Contact />
        <Cookies />
      </PortfolioStyled>
    </ThemeProvider>
  );
};
