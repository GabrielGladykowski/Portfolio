import React from 'react';
import {
  HomeStyled,
  HomeWrapper,
  LetteringLogo,
  LittleTittle,
  Logo,
  NameAndLastName,
  Tittle,
  TittleWraper,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeStyled id="home">
      <NameAndLastName>Gabriel Gładykowski</NameAndLastName>

      <HomeWrapper>
        <Logo>
          <LetteringLogo>GG</LetteringLogo>
        </Logo>
        <TittleWraper>
          <Tittle>Hello!</Tittle>
          <LittleTittle>I'm Gabriel, a</LittleTittle>
          <LittleTittle>Front-end Developer</LittleTittle>
        </TittleWraper>
      </HomeWrapper>
    </HomeStyled>
  );
};
