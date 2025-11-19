import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Award, Users, Camera } from 'lucide-react';

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-asq-pink/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-asq-green/5 rounded-full translate-y-32 -translate-x-32"></div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-asq-green/10 to-asq-pink/10 rounded-3xl"
                animate={{
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="src/assets/FotoKeluargaEra.png"
                  alt="Our creative team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asq-green/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-2xl font-bold mb-1">M. Burhanudin</div>
                  <div className="text-asq-pink">Founder & Lead Photographer</div>
                </div>
              </div>
              
              <motion.div
                className="absolute -bottom-8 -right-8 bg-asq-green text-white p-6 rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-asq-pink">2018</div>
                  <div className="text-sm">Founded</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center bg-asq-pink/20 rounded-full px-4 py-2 mb-6 text-sm font-medium text-asq-green"
            >
              <Camera className="w-4 h-4 mr-2" />
              About Asqart Studio
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-asq-green mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Crafting Visual Stories That Last Forever
            </motion.h2>

            <motion.div
              className="space-y-4 mb-8 text-lg text-asq-dark-grey leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>
                A visual storytelling studio based in Tulang Bawang Barat, Lampung. 
                We specialize in capturing timeless moments through professional photography 
                and cinematic videography.
              </p>
              <p>
                With a strong passion for creating emotionally engaging visuals, we serve 
                a wide range of events — from engagements and weddings to personal portraits. 
                We believe that every photo and every frame should speak for itself, telling 
                stories that last for a lifetime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Link 
                to="/about" 
                className="group inline-flex items-center bg-asq-green text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-asq-green/90 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;