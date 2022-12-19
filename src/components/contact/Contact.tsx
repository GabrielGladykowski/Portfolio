import React from 'react';
import {
  ContactContainer,
  ContactLink,
  ContactLinksWrapper,
  ContactTitle,
  ContactWrapper,
} from './Contact.styled';

export const Contact = () => (
  <ContactWrapper id="contact">
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <ContactLinksWrapper>
        <ContactLink href="mailto: gabriel.gladki2003@gmail.com" target="_blank" rel="noopener">
          Email
        </ContactLink>
        <ContactLink href="https://github.com/GabrielGladykowski" target="_blank" rel="noopener">
          Github
        </ContactLink>
        <ContactLink
          href="https://linkedin.com/in/gabriel-gładykowski"
          target="_blank"
          rel="noopener"
        >
          LinkedIn
        </ContactLink>
        <ContactLink href="https://useme.com/pl/dashboard/" target="_blank" rel="noopener">
          Useme
        </ContactLink>
      </ContactLinksWrapper>
    </ContactContainer>
  </ContactWrapper>
);
