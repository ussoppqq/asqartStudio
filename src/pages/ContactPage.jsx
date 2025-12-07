import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const ContactPage = () => {
  return (
    <PageTransition>
      <ContactHero />
      <ContactForm />
      <MapSection />
    </PageTransition>
  );
};

export default ContactPage;