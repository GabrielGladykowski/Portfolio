import React, { useState } from 'react';
import {
  NavigationLink,
  NavigationList,
  NavigationPoint,
  NavigationStyled,
  NavigatorButton,
  NavigatorHamburger,
} from './Navigation.styled';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen, 'dupa');

  const NavigationHidden = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled>
      <NavigatorButton onClick={NavigationHidden}>
        <NavigatorHamburger />
      </NavigatorButton>

      <NavigationPoint aria-hidden={isOpen} isOpen={isOpen}>
        <NavigationList>
          <NavigationLink tabIndex={isOpen ? 0 : -1} href="#home" onClick={NavigationHidden}>
            Home
          </NavigationLink>
        </NavigationList>
        <NavigationList>
          <NavigationLink tabIndex={isOpen ? 0 : -1} href="#work" onClick={NavigationHidden}>
            Work
          </NavigationLink>
        </NavigationList>
        <NavigationList>
          <NavigationLink tabIndex={isOpen ? 0 : -1} href="#aboutMe" onClick={NavigationHidden}>
            About Me
          </NavigationLink>
        </NavigationList>
        <NavigationList>
          <NavigationLink tabIndex={isOpen ? 0 : -1} href="#contact" onClick={NavigationHidden}>
            Contact
          </NavigationLink>
        </NavigationList>
      </NavigationPoint>
    </NavigationStyled>
  );
};
