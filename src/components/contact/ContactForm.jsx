import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Check, Mail, MapPin, Phone } from 'lucide-react';

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // This is a placeholder for actual EmailJS implementation
      // In a real implementation, you would use:
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   data,
      //   'YOUR_PUBLIC_KEY'
      // );
      
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-asq-green">Send Us a Message</h2>
            
            {submitSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6 flex items-center">
                <Check className="h-5 w-5 mr-2" />
                <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
              </div>
            )}
            
            {submitError && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
                {submitError}
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-asq-dark-grey mb-2">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-asq-dark-grey mb-2">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-asq-dark-grey mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green"
                    {...register('phone')}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-asq-dark-grey mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-asq-dark-grey mb-2">Service You're Interested In</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green bg-white"
                  {...register('service')}
                >
                  <option value="">Select a service</option>
                  <option value="Brand Identity">Brand Identity</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Print Design">Print Design</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Photography">Photography</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-asq-dark-grey mb-2">Your Budget Range</label>
                <select
                  id="budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green bg-white"
                  {...register('budget')}
                >
                  <option value="">Select budget range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                  <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                  <option value="$25,000+">$25,000+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-asq-dark-grey mb-2">Your Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-asq-green ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>
              
              <div>
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-asq-green">Contact Information</h2>
            
            <div className="bg-asq-pink bg-opacity-20 p-8 rounded-lg mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-asq-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-asq-green mb-1">Our Location</h3>
                    <p className="text-asq-dark-grey">
                      RT10, RW.02, Mulya Jaya,<br/> Kec. Tulang Bawang Tengah,<br/>
                      Kab. Tulang Bawang Barat,<br/> Lampung 34793
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-asq-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-asq-green mb-1">Email Us</h3>
                    <p className="text-asq-dark-grey">
                      mburhanudin316@gmail.com<br />
                      asqartvideofoto@gmail.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-asq-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-asq-green mb-1">Call Us</h3>
                    <p className="text-asq-dark-grey">
                      0856-6940-4960<br />
                      0895-4282-38484
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-asq-green">Office Hours</h3>
              <table className="w-full text-asq-dark-grey">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Monday - Friday</td>
                    <td className="py-2 text-right">-</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Saturday</td>
                    <td className="py-2 text-right">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Sunday</td>
                    <td className="py-2 text-right">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;