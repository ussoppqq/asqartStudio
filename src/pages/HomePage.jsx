import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import AboutPreview from '../components/home/AboutPreview';
import ServicesOverview from '../components/home/ServicesOverview';   
import ContactCTA from '../components/home/ContactCTA';
import Hero from '../components/home/Hero';

const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <ContactCTA />
    </PageTransition>
  );
};

export default HomePage;