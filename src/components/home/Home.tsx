import React from 'react';
import {
  HomeStyled,
  HomeWrapper,
  LetteringLogo,
  Logo,
  NameAndLastName,
  SubTittle,
  Tittle,
  TittleDecoration,
  TittleWraper,
} from './Home.styled';

export const Home = () => {
  return (
    <HomeStyled id="home">
      <NameAndLastName href="/" rel="noopener">
        Gabriel Gładykowski
      </NameAndLastName>
      <HomeWrapper>
        <Logo>
          <LetteringLogo>GG</LetteringLogo>
        </Logo>
        <TittleWraper>
          <Tittle>
            Hello!<TittleDecoration> I'm Gabriel, a</TittleDecoration>
          </Tittle>
          <SubTittle>Front-end Developer</SubTittle>
        </TittleWraper>
      </HomeWrapper>
    </HomeStyled>
  );
};
