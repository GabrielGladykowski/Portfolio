import React, { useState } from 'react';
import { HomeDark, HomeDarkMode, HomeLight, HomeWrapperMode } from './DarkMode.styled';

export const DarkMode = ({ toggleTheme }: any) => {
  const [isMode, setIsMode] = useState(false);

  const ModeChange = () => {
    setIsMode(!isMode);
    toggleTheme();
  };

  return (
    <HomeDarkMode onClick={ModeChange}>
      <HomeWrapperMode>
        <HomeLight isMode={isMode}>Ligth&nbsp;</HomeLight>{' '}
        <HomeDark isMode={isMode}>Dark&nbsp;</HomeDark>
      </HomeWrapperMode>
      Mode
    </HomeDarkMode>
  );
};
