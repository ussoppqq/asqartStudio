import React from 'react';
import PageTransition from '../components/utils/PageTransition';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import ContactCTA from '../components/home/ContactCTA';

const AboutPage = () => {
  return (
    <PageTransition>
      <AboutHero />
      <OurStory />
      <ContactCTA />
    </PageTransition>
  );
};

export default AboutPage;