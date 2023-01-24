import React, { FC, useState } from 'react';
import { HomeDark, HomeDarkMode, HomeLight, HomeWrapperMode } from './DarkMode.styled';
import { FiSun } from '@react-icons/all-files/fi/FiSun';
import { FiMoon } from '@react-icons/all-files/fi/FiMoon';
import { IconContext } from '@react-icons/all-files/lib/esm/iconContext';
import { getValueFromStorage } from '../../utils/getValueFromStorage';

type DarkModeProps = {
  toggleTheme: () => void;
};

export const DarkMode: FC<DarkModeProps> = ({ toggleTheme }) => {
  const [isMode, setIsMode] = useState<boolean>(getValueFromStorage('isDarkMode', false));

  const ModeChange = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('isDarkMode', !isMode ? 'true' : 'false');
    }
    setIsMode(!isMode);
    toggleTheme();
  };

  return (
    <IconContext.Provider value={{ size: '25px' }}>
      <HomeDarkMode onClick={ModeChange}>
        <HomeWrapperMode>
          <HomeLight isMode={isMode}>
            <FiSun />
          </HomeLight>
          <HomeDark isMode={isMode}>
            <FiMoon />
          </HomeDark>
        </HomeWrapperMode>
      </HomeDarkMode>
    </IconContext.Provider>
  );
};
