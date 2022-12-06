import React from 'react';
import { ContactLink, ContactLinksWrapper, ContactTitle, ContactWrapper } from './Contact.styled';

export const Contact = () => (
  <ContactWrapper>
    <ContactTitle>Contact</ContactTitle>
    <ContactLinksWrapper>
      <ContactLink>Email</ContactLink>
      <ContactLink>Github</ContactLink>
      <ContactLink>LinkedIn</ContactLink>
      <ContactLink>Useme</ContactLink>
    </ContactLinksWrapper>
  </ContactWrapper>
);
