import React, { FC, useState } from 'react';
import { HomeDark, HomeDarkMode, HomeLight, HomeWrapperMode } from './DarkMode.styled';

type DarkModeProps = {
  toggleTheme: () => void;
};

export const DarkMode: FC<DarkModeProps> = ({ toggleTheme }) => {
  const [isMode, setIsMode] = useState(false);

  const ModeChange = () => {
    setIsMode(!isMode);
    toggleTheme();
  };

  return (
    <HomeDarkMode onClick={ModeChange}>
      <HomeWrapperMode>
        <HomeLight isMode={isMode}>Ligth&nbsp;</HomeLight>
        <HomeDark isMode={isMode}>Dark&nbsp;</HomeDark>
      </HomeWrapperMode>
      Mode
    </HomeDarkMode>
  );
};
