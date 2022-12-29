import React from 'react';
import {
  ContactContainer,
  ContactLink,
  ContactLinksWrapper,
  ContactTitle,
  ContactWrapper,
} from './Contact.styled';
import { FiMail } from '@react-icons/all-files/fi/FiMail';
import { FiGithub } from '@react-icons/all-files/fi/FiGithub';
import { FiLinkedin } from '@react-icons/all-files/fi/FiLinkedin';

export const Contact = () => (
  <ContactWrapper id="contact">
    <ContactContainer>
      <ContactTitle>Contact</ContactTitle>
      <ContactLinksWrapper>
        <ContactLink href="mailto: gabriel.gladki2003@gmail.com" target="_blank" rel="noopener">
          Email&nbsp;
          <FiMail />
        </ContactLink>
        <ContactLink href="https://github.com/GabrielGladykowski" target="_blank" rel="noopener">
          Github&nbsp;
          <FiGithub />
        </ContactLink>
        <ContactLink
          href="https://linkedin.com/in/gabriel-gładykowski"
          target="_blank"
          rel="noopener"
        >
          LinkedIn&nbsp;
          <FiLinkedin />
        </ContactLink>
      </ContactLinksWrapper>
    </ContactContainer>
  </ContactWrapper>
);
