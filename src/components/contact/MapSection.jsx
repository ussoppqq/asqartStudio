import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MapSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 bg-asq-light-grey" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-[16/9] md:aspect-[21/9] bg-white rounded-lg overflow-hidden shadow-sm"
        >
          {/* This is a placeholder for an actual map. In a real application, you'd implement Google Maps or similar */}
          <div className="w-full h-full bg-asq-light-grey flex items-center justify-center">
            <p className="text-asq-dark-grey text-center p-8">
              Interactive map would be displayed here.<br />
              For implementation, you would use Google Maps API or similar service.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;