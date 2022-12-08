import React from 'react';
import { Navigation } from '../navigation/Navigation';
import {
  HomeStyled,
  LetteringLogo,
  LittleTittle,
  Logo,
  NameAndLastName,
  Tittle,
  TittleWraper,
  Underscore,
} from './Home.styled';

export const Home = () => (
  <HomeStyled id="home">
    <NameAndLastName>
      Gabriel Gładykowski
      <Underscore />
    </NameAndLastName>

    <Logo>
      <LetteringLogo>GG</LetteringLogo>
    </Logo>

    <TittleWraper>
      <Tittle>Hello!</Tittle>
      <LittleTittle>I'm Gabriel, a</LittleTittle>
      <LittleTittle>Front-end Developer</LittleTittle>
    </TittleWraper>
  </HomeStyled>
);
