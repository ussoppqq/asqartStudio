import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

const PortfolioGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = ['All', 'Wedding', 'Maternity', 'Newborn', 'Family', 'Graduation'];
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Eternal Vows',
      category: 'Wedding',
      description: 'Romantic wedding ceremony in a tropical garden setting.',
      imageUrl: 'https://images.pexels.com/photos/4098999/pexels-photo-4098999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 2,
      title: 'Blissful Beginnings',
      category: 'Maternity',
      description: 'Gentle maternity session celebrating new life.',
      imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 3,
      title: 'Tiny Miracles',
      category: 'Newborn',
      description: 'Delicate newborn portraits in soft natural light.',
      imageUrl: 'https://images.pexels.com/photos/6474475/pexels-photo-6474475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 4,
      title: 'Family Legacy',
      category: 'Family',
      description: 'Warm family portraits at golden hour.',
      imageUrl: 'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 5,
      title: 'Academic Triumph',
      category: 'Graduation',
      description: 'Celebratory graduation photos with campus backdrop.',
      imageUrl: 'https://images.pexels.com/photos/5691626/pexels-photo-5691626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 6,
      title: 'Seaside Ceremony',
      category: 'Wedding',
      description: 'Beach wedding with sunset vows and ocean waves.',
      imageUrl: 'https://images.pexels.com/photos/7345139/pexels-photo-7345139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 7,
      title: 'Golden Years',
      category: 'Family',
      description: 'Multi-generational family reunion portraits.',
      imageUrl: 'https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 8,
      title: 'Spring Awakening',
      category: 'Maternity',
      description: 'Floral maternity session in blooming gardens.',
      imageUrl: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 9,
      title: 'Campus Glory',
      category: 'Graduation',
      description: 'Dynamic graduation shots with academic regalia.',
      imageUrl: 'https://images.pexels.com/photos/8977848/pexels-photo-8977848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: { 
      opacity: 0, 
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-asq-green text-white'
                  : 'bg-asq-light-grey text-asq-dark-grey hover:bg-asq-pink hover:text-asq-green'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="portfolio-item overflow-hidden rounded-lg"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="relative aspect-[4/3] group">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-asq-green bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <span className="text-asq-pink text-sm font-medium mb-2 block">{project.category}</span>
                      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-white text-sm mb-4 opacity-80">{project.description}</p>
                      <button className="inline-flex items-center text-asq-pink hover:text-white transition-colors">
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGrid;