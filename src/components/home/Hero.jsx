import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import GridMotion from '../utils/GridMotion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* GridMotion Background */}
      <GridMotion
        items={[
          'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4098999/pexels-photo-4098999.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=800',
        ]}
        gradientColor="rgba(31, 61, 60, 0.6)"  
        speed={0.1} 
        scale={1.1} 
      />

      {/* Dark overlay with gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-asq-green/70 via-asq-green/50 to-asq-pink/30 z-10"></div>

      <div className="container-custom relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium mt-12"
            >
              <span className="w-2 h-2 bg-asq-pink rounded-full mr-2 animate-pulse"></span>
              Professional Photography & Videography
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Your Story.
              <br />
              <span className="text-asq-pink">Beautifully</span>
              <br />
              Captured.
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We bring your vision to life through artistic photography, cinematic videography, and meaningful visual design — from engagements to weddings, and beyond.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                to="/portfolio"
                className="group bg-asq-pink text-asq-green px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center"
              >
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/20 border border-white/20 hover:border-white/40 flex items-center justify-center"
              >
                <MessageCircle className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-asq-pink/20 to-white/10 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              {/* Commented out the image and rating section as per your request */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <img
                  src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional photography showcase"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-asq-green rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">★</span>
                    </div>
                    <div>
                      <div className="font-semibold text-asq-green">5.0 Rating</div>
                      <div className="text-asq-dark-grey text-sm">From 200+ Reviews</div>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator (commented out as per your request) */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;