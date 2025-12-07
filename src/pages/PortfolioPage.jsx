import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import ContactCTA from '../components/home/ContactCTA';

const PortfolioPage = () => {
  return (
    <PageTransition>
      <PortfolioHero />
      <PortfolioGrid />
      <ContactCTA />
    </PageTransition>
  );
};

export default PortfolioPage;