import React from 'react';
import { ContactForm } from './Form/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <Section title="Phone book">
      <ContactForm />
      <ContactList title="Contacts" />
    </Section>
  );
};
