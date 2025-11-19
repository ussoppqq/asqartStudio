import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

const ContactCTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 bg-gradient-to-br from-asq-pink/20 to-asq-light-grey/50 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-asq-green/5 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-asq-pink/10 rounded-full translate-y-32 translate-x-32"></div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-asq-green/10 rounded-full px-4 py-2 mb-6 text-sm font-medium text-asq-green"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Ready to Get Started?
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-asq-green mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Create Something
            <br />
            <span className="text-asq-pink">Beautiful Together</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-asq-dark-grey mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to capture your special moments? Let's discuss how we can bring your vision to life and create memories that will last forever.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link 
              to="/contact" 
              className="group bg-asq-green text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-asq-green/90 hover:shadow-xl hover:scale-105 active:scale-95 inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a 
              href="tel:0856-6940-4960" 
              className="group bg-white text-asq-green px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 border-2 border-asq-green/20 hover:border-asq-green/40 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Call Us Now
            </a>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
              <Phone className="h-8 w-8 text-asq-green mx-auto mb-3" />
              <h3 className="font-semibold text-asq-green mb-2">Call Us</h3>
              <p className="text-asq-dark-grey text-sm">0856-6940-4960</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
              <Mail className="h-8 w-8 text-asq-green mx-auto mb-3" />
              <h3 className="font-semibold text-asq-green mb-2">Email Us</h3>
              <p className="text-asq-dark-grey text-sm">mburhanudin316@gmail.com</p>
            </div>
            
            <div className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl">
              <MessageCircle className="h-8 w-8 text-asq-green mx-auto mb-3" />
              <h3 className="font-semibold text-asq-green mb-2">Quick Response</h3>
              <p className="text-asq-dark-grey text-sm">Within 24 hours</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;