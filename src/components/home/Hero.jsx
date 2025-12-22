import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import GridMotion from '../utils/GridMotion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* GridMotion Background with SUBTLE GRADIENT */}
      <GridMotion
        items={[
          'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/4098999/pexels-photo-4098999.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=800',
        ]}
        gradientColor="rgba(31, 61, 60, 0.55)"  
        speed={0.1} 
        scale={1.1} 
      />

      {/* SUBTLE Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F3D3C]/60 via-[#1F3D3C]/40 to-[#FF6B9D]/20 z-10"></div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 rounded-full bg-[#FF6B9D]/20 blur-3xl z-10"
        animate={{
          y: [0, 30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-white/10 blur-3xl z-10"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 text-white/90"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B9D]" />
              <span className="text-xs font-medium tracking-wide">PROFESSIONAL PHOTOGRAPHY & VIDEOGRAPHY</span>
            </motion.div>

            {/* Main Heading - Lebih Kecil & Rapi */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your Story.
              <br />
              <span className="text-[#FF6B9D]">Beautifully</span> Captured.
            </motion.h1>

            {/* Subtitle - Lebih Ringkas */}
            <motion.p
              className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Artistic photography and cinematic videography for your most precious moments
            </motion.p>

            {/* CTA Buttons - Lebih Compact */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/portfolio"
                className="group relative bg-[#FF6B9D] text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,107,157,0.5)] hover:scale-105 active:scale-95 flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">View Our Work</span>
                <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B9D] to-[#ff8db3] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>

              <Link
                to="/contact"
                className="group bg-white/10 backdrop-blur-md border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/20 hover:border-white/50 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;