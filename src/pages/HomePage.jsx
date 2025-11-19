import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import AboutPreview from '../components/home/AboutPreview';
import ContactCTA from '../components/home/ContactCTA';

const HomePage = () => {
  return (
    <PageTransition>
      <AboutPreview />
      <ContactCTA />
    </PageTransition>
  );
};

export default HomePage;