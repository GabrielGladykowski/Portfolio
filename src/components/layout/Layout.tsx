import React, { FC, useState, ReactNode } from 'react';
import { Contact } from '../contact/Contact';
import { Cookies } from '../cookies/Cookies';
import { Navigation } from '../navigation/Navigation';
import { darkTheme, lightTheme } from '../dark_mode/DarkMode.data';
import { PortfolioStyled } from './Layout.styled';
import { ThemeProvider } from 'styled-components';
import { DarkMode } from '../dark_mode/DarkMode';
import { getValueFromStorage } from '../../utils/getValueFromStorage';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isTheme, setIsTheme] = useState<'dark' | 'light'>(
    getValueFromStorage('isDarkMode', false) ? 'dark' : 'light'
  );
  const isDarkTheme = isTheme === 'dark';

  const toggleTheme = () => {
    setIsTheme(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <PortfolioStyled>
        <Navigation />
        <DarkMode toggleTheme={toggleTheme} />
        {children}
        <Contact />
        <Cookies />
      </PortfolioStyled>
    </ThemeProvider>
  );
};
