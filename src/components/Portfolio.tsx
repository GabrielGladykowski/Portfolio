import React, { useState } from 'react';
import { Contact } from './contact/Contact';
import { Cookies } from './cookies/Cookies';
import { Home } from './home/Home';
import { Navigation } from './navigation/Navigation';
import { darkTheme, lightTheme } from './PageMode.data';
import { PortfolioStyled } from './Portfolio.styled';
import { AboutMe } from './work_and_about_me/AboutMe';
import { Work } from './work_and_about_me/Work';
import { ThemeProvider } from 'styled-components';
import { DarkMode } from './dark_mode/DarkMode';

export const Portfolio = () => {
  const [isTheme, setIsTheme] = useState('light');
  const isDarkTheme = isTheme === 'dark';

  const toggleTheme = () => {
    setIsTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PortfolioStyled>
        <Cookies />
        <Navigation />
        <DarkMode toggleTheme={toggleTheme} />
        <Home />

        <Work />
        <AboutMe />

        <Contact />
      </PortfolioStyled>
    </ThemeProvider>
  );
};
