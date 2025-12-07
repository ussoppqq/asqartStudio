import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Baby, 
  Users, 
  GraduationCap, 
  Camera,
  Video,
  ArrowRight
} from 'lucide-react';

const ServicesOverview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'Wedding Photography',
      description: 'Capture your special day with timeless elegance and artistic vision.',
      icon: <Heart className="h-8 w-8" />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 2,
      title: 'Maternity Sessions',
      description: 'Beautiful portraits celebrating the miracle of new life.',
      icon: <Baby className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Family Portraits',
      description: 'Preserve precious family moments with professional photography.',
      icon: <Users className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 4,
      title: 'Graduation Photos',
      description: 'Commemorate academic achievements with memorable portraits.',
      icon: <GraduationCap className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 5,
      title: 'Professional Photography',
      description: 'High-quality photography services for all your needs.',
      icon: <Camera className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      title: 'Cinematic Videography',
      description: 'Tell your story through stunning cinematic video production.',
      icon: <Video className="h-8 w-8" />,
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-asq-light-grey/30 to-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-asq-green/5 rounded-full -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-asq-pink/10 rounded-full translate-y-32 translate-x-32"></div>

      <div className="container-custom relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center bg-asq-green/10 rounded-full px-4 py-2 mb-6 text-sm font-medium text-asq-green"
          >
            <Camera className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-asq-green mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Photography & Videography Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-asq-dark-grey max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            From intimate moments to grand celebrations, we offer a complete range of visual storytelling services tailored to capture your unique story.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              variants={itemVariants}
            >
              <div className="relative">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-asq-green group-hover:text-asq-green/80 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-asq-dark-grey mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center text-asq-green font-medium group-hover:text-asq-green/80 transition-colors">
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover effect background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            to="/services" 
            className="group inline-flex items-center bg-asq-green text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-asq-green/90 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            View Detailed Services & Pricing
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;