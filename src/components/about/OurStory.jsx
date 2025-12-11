import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Heart, Users, Camera } from 'lucide-react';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  return (
    <section className="py-20 bg-white relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 relative">
        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#1F3D3C]/5 rounded-full px-4 py-2 mb-4">
              <Camera className="w-3.5 h-3.5 text-[#FF6B9D]" />
              <span className="text-xs font-medium text-[#1F3D3C] uppercase tracking-wide">Our Story</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-[#1F3D3C] mb-5 leading-tight">
              Where Passion Meets
              <br />
              <span className="text-[#FF6B9D]">Perfection</span>
            </h2>

            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                Asqart Studio was founded by M. Burhanudin in 2018, a passionate photographer and visual artist with years of experience capturing life's most precious moments. With a deep commitment to quality and client satisfaction, he has built a reputation for authentic, artistic storytelling through the lens.
              </p>
              <p>
                Based in Tulang Bawang Barat, Lampung, Burhanudin leads a dedicated team of creatives who value sincerity, attention to detail, and emotional storytelling in every project. From intimate portraits to grand celebrations, we believe every photograph and every frame should preserve not just an image, but a feeling.
              </p>
              <p>
                Our dedication to the craft ensures that every shoot is not just a job, but a meaningful journey to capture and preserve your beautiful memories for generations to come.
              </p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-br from-[#1F3D3C]/10 to-[#FF6B9D]/10 rounded-3xl"
                animate={{
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/7147657/pexels-photo-7147657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Asqart Studio team"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating badge */}
              {/* <motion.div
                className="absolute -bottom-6 -left-6 bg-[#1F3D3C] text-white p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#FF6B9D] rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#FF6B9D]">2018</div>
                    <div className="text-sm text-white/80">Est. with Passion</div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group-hover:border-[#FF6B9D]/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1F3D3C] to-[#2a5755] rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-[#1F3D3C] mb-1">{stat.number}</div>
                  <div className="text-xs text-gray-600 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div> */}

        {/* Mission & Values*/}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

            {/* Logo Image */}
            <img
              src="/src/assets/LOGO ASQART 25_ hijau.png"
              alt="Asqart Logo"
              className="w-30 h-auto mb-8 opacity-90"
            />

            {/* Quote */}
            <p className="text-xl md:text-2xl text-[#1F3D3C] font-light leading-relaxed italic max-w-3xl mx-auto">
              " A million feelings. A thousand thoughts. A hundred memories.<br />
              All for one person. "
            </p>


            {/* Author */}
            <span className="mt-5 block text-sm text-gray-500">— Lil Wayne</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;