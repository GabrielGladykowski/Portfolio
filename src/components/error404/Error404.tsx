import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { COLORS } from '../../const/COLORS';
import {
  Error404Description,
  Error404Link,
  Error404Styled,
  Error404Tittle,
} from './Error404.styled';

export const Error404 = () => {
  return (
    <Error404Styled>
      <Error404Tittle>Page not found</Error404Tittle>
      <Error404Description>
        Sorry 😔, we couldn’t find what you were looking for.
      </Error404Description>
      <Error404Link href="/">Go home</Error404Link>
    </Error404Styled>
  );
};
