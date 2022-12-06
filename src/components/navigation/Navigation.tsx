import React from 'react';
import { NavigationButton, NavigationList } from './Navigation.styled';

export const Navigation = () => (
  <nav hidden>
    <NavigationList>
      <NavigationButton>Home</NavigationButton>
      <NavigationButton>Work</NavigationButton>
      <NavigationButton>About</NavigationButton>
      <NavigationButton>Constact</NavigationButton>
    </NavigationList>
  </nav>
);
