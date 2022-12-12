import React, { useState, useEffect } from 'react';
import { setCookie, getCookie } from 'typescript-cookie';
// import { getCookie } from 'typescript-cookie/dist/src/api';
import {
  CookiesButton,
  CookiesHeader,
  CookiesStyled,
  CookieText,
  CoookieWrapperText,
} from './Cookies.styled';

export const Cookies = () => {
  const [isAccpet, setIsAccept] = useState(true);

  const AcceptCookies = () => {
    setIsAccept(true);
    setCookie('isAcceptCookies', 'true', { expires: 2592000000 });
  };

  useEffect(() => {
    const cookie = getCookie('isAcceptCookies');

    if (cookie !== `true`) {
      setIsAccept(false);
    }
  }, []);

  return (
    !isAccpet && (
      <CookiesStyled>
        <CoookieWrapperText>
          <CookiesHeader>Hello, this site uses cookies</CookiesHeader>
          <CookieText>By using the site, you agree to their storage.</CookieText>
        </CoookieWrapperText>
        <CookiesButton onClick={AcceptCookies}>accept</CookiesButton>
      </CookiesStyled>
    )
  );
};
