import React, { useState, useEffect, useRef } from 'react';
import { MENU_LIST } from './Navigation.data';
import {
  NavigationLink,
  NavigationList,
  NavigationPoint,
  NavigationStyled,
  NavigatorButton,
  NavigatorHamburger,
} from './Navigation.styled';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler);

    return () => {
      document.removeEventListener('click', handler);
    };
  });

  const NavigationHidden = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationStyled>
      <NavigatorButton onClick={NavigationHidden} ref={menuRef}>
        <NavigatorHamburger isOpen={isOpen} />
      </NavigatorButton>
      <NavigationPoint aria-hidden={isOpen} isOpen={isOpen}>
        {MENU_LIST.map((element) => (
          <NavigationList>
            <NavigationLink
              tabIndex={isOpen ? undefined : -1}
              href={element.href}
              onClick={NavigationHidden}
            >
              {element.title}
            </NavigationLink>
          </NavigationList>
        ))}
      </NavigationPoint>
    </NavigationStyled>
  );
};
