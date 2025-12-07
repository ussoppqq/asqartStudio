import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const imageProps = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    opacity: inView ? 1 : 0,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const contentProps = useSpring({
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    opacity: inView ? 1 : 0,
    delay: 200,
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <animated.div style={contentProps}>
            <h2 className="section-title">Our Story</h2>
            <p className="text-lg text-asq-dark-grey mb-6">
              Asqart Studio was founded by M. Burhanudin, a passionate photographer and visual artist with years of experience in the industry.
              With a deep commitment to quality and client satisfaction, he has built a reputation for capturing real emotions in authentic, artistic ways            </p>
            <p className="text-lg text-asq-dark-grey mb-6">
              Based in Lampung, Burhanudin leads a team of creatives who value sincerity, detail, and storytelling in every project.
              His dedication to the craft ensures that every shoot is not just a job, but a journey to preserve beautiful memories.</p>
          </animated.div>

          <animated.div style={imageProps} className="relative order-first lg:order-last">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7147657/pexels-photo-7147657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="asqart studio's founding team"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-asq-green p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-white font-poppins font-semibold">
                Founded in 2018 with a passion for design
              </p>
            </div>
          </animated.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;