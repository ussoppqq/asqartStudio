import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Video, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesList = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      title: 'Photography',
      description: 'Professional photography services to capture your special moments beautifully.',
      icon: <Camera className="h-12 w-12 text-asq-green" />,
      features: [
        'Unlimited shots during the event',
        'Edited photos by professional team',
        'Same day edit for social media (Diamond and Platinum packages)',
        'Max service time until 18:00 WIB (Gold, Diamond, Platinum)',
      ],
      pricing: {
        silver: 'IDR 1,900,000',
        gold: 'IDR 2,200,000',
        diamond: 'IDR 2,700,000',
        platinum: 'IDR 3,500,000',
      },
      deliverables: [
        'Silver: 100 edited photos, Magnetic album (100 photos), 1 Framed photo 10R (20x25), Flashdisc 16GB, All JPEG unedited',
        'Gold: All edited photos, Magnetic album (120 photos), 1 Framed photo 16R (30x40), Flashdisc 16GB',
        'Diamond: All edited photos, 1 Premium HC album, 1 Framed photo 20R (40x50), Flashdisc 16GB',
        'Platinum: All edited photos, 2 Premium HC Albums, 1 Framed photo 16R (30x40), 1 Framed photo 20R (40x50), Flashdisc 16GB',
        'All files delivered via Google Drive (except Flashdisc deliverables)',
      ],
      timeline: 'Speak peek/edit for social media: 1-3 days, Edited photos by Email: 3-7 days, Album and printing: 30 days',
      additionalNotes: [
        'Prices exclude transportation, accommodation, and lodging for out-of-town events.',
        'Minimum 30% down payment (DP) for booking (non-refundable).',
        'Full payment due within 3 days after the event.',
        'Editing and printing timeline starts after full payment.',
        'Additional shipping fees apply for printed deliverables if the client cannot pick up in person.',
      ],
    },
    {
      id: 2,
      title: 'Videography',
      description: 'Cinematic videography services to document your event with stunning visuals.',
      icon: <Video className="h-12 w-12 text-asq-green" />,
      features: [
        'Cinematic video production by professional videographers',
        '1-minute teaser video (Diamond and Platinum packages, 1-3 days editing)',
        '2 videographers for Platinum package',
        'Service time: 6-9 hours depending on the package',
      ],
      pricing: {
        silver: 'IDR 1,300,000',
        gold: 'IDR 1,600,000',
        diamond: 'IDR 1,900,000',
        platinum: 'IDR 3,000,000',
      },
      deliverables: [
        'Silver: 1-2 minutes cinematic video (15-25 days editing)',
        'Gold: 2-3 minutes cinematic video (15-25 days editing)',
        'Diamond: 2-3 minutes cinematic video (15-25 days editing), 1-minute teaser (1-3 days editing)',
        'Platinum: 2-3 minutes cinematic video (15-25 days editing), 1-minute teaser (1-3 days editing)',
        'All files delivered via Google Drive',
      ],
      timeline: 'Teaser: 1-3 days (Diamond & Platinum), Cinematic video editing: 15-25 days, Full documentation video editing: 15-25 days',
      additionalNotes: [
        'Prices exclude transportation, accommodation, and lodging for out-of-town events.',
        'Minimum 30% down payment (DP) for booking (non-refundable).',
        'Full payment due within 3 days after the event.',
        'Editing timeline starts after full payment.',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div 
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              variants={itemVariants}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 bg-asq-light-grey bg-opacity-30">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-asq-green">{service.title}</h3>
                  <p className="text-asq-dark-grey mb-6">{service.description}</p>
                  
                  <h4 className="text-lg font-semibold mb-3 text-asq-green">What's Included:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-asq-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-asq-dark-grey">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h4 className="text-lg font-semibold mb-3 text-asq-green">Deliverables:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-asq-green mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-asq-dark-grey">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div>
                    <span className="text-lg font-semibold text-asq-green">Typical Timeline: </span>
                    <span className="text-asq-dark-grey">{service.timeline}</span>
                  </div>

                  {service.additionalNotes && (
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold mb-3 text-asq-green">Additional Notes:</h4>
                      <ul className="space-y-2">
                        {service.additionalNotes.map((note, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-asq-dark-grey text-sm">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="p-8 lg:p-12">
                  <h4 className="text-xl font-semibold mb-6 text-asq-green">Pricing Options</h4>
                  
                  <div className="space-y-6">
                    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-asq-green hover:shadow-md">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-semibold text-asq-green">Silver Package</h5>
                        <span className="text-lg font-bold text-asq-dark-grey">{service.pricing.silver}</span>
                      </div>
                      <p className="text-sm text-asq-dark-grey">
                        Basic package for essential coverage with quality results.
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-asq-green hover:shadow-md">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-semibold text-asq-green">Gold Package</h5>
                        <span className="text-lg font-bold text-asq-dark-grey">{service.pricing.gold}</span>
                      </div>
                      <p className="text-sm text-asq-dark-grey">
                        Enhanced package with additional deliverables.
                      </p>
                    </div>
                    
                    <div className="bg-asq-pink bg-opacity-20 p-6 rounded-lg border-2 border-asq-green transition-all duration-300 hover:shadow-md">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-semibold text-asq-green">Diamond Package</h5>
                        <span className="text-lg font-bold text-asq-dark-grey">{service.pricing.diamond}</span>
                      </div>
                      <p className="text-sm text-asq-dark-grey">
                        Comprehensive solution with added features and enhanced deliverables.
                      </p>
                      <div className="mt-3 inline-block bg-asq-green text-white text-xs py-1 px-3 rounded-full">
                        Most Popular
                      </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-asq-green hover:shadow-md">
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="font-semibold text-asq-green">Platinum Package</h5>
                        <span className="text-lg font-bold text-asq-dark-grey">{service.pricing.platinum}</span>
                      </div>
                      <p className="text-sm text-asq-dark-grey">
                        The ultimate solution with all available features and premium deliverables.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <p className="text-sm text-asq-dark-grey mb-4">
                      Need a custom package? Contact us for a tailored solution.
                    </p>
                    <Link to="/contact" className="btn-primary inline-block">
                      Request a Quote
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesList;