import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 bg-asq-pink bg-opacity-20">
      <div className="container-custom">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-asq-green mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Our Studio
          </motion.h1>
          
          <motion.p 
            className="text-xl text-asq-dark-grey mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We're a team of passionate designers and creative thinkers dedicated to crafting meaningful brand experiences that connect and inspire.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;