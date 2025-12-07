import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import ContactCTA from '../components/home/ContactCTA';

const ServicesPage = () => {
  return (
    <PageTransition>
      <ServicesHero />
      <ServicesList />
      <ContactCTA />
    </PageTransition>
  );
};

export default ServicesPage;