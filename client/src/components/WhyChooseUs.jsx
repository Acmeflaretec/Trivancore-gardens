import React from 'react';
import { motion } from 'framer-motion';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: 'handshake',
      title: 'Expert Guidance',
      description: 'At Travancore Gardens, we do more than just sell plants—we share our passion and expertise with you. Our knowledgeable team is always ready to provide personalized advice, whether you are a beginner or an experienced gardener. From selecting the right plants to offering care tips, we are here to help your garden thrive.',
    },
    {
      icon: 'leaf',
      title: ' Eco-Friendly Commitment',
      description: 'Sustainability is at the core of everything we do. We are dedicated to offering products that are kind to the environment, from organic fertilizers to sustainably sourced plants. By choosing Travancore Gardens, you are not only beautifying your space but also making a positive impact on the planet.',
    },
    {
      icon: 'award',
      title: 'Quality You Can Trust',
      description: 'We take pride in the quality of our products. Every plant, tool, and garden accessory is carefully selected to ensure it meets our high standards. With Travancore Gardens, you can trust that you are getting the best, whether you are purchasing a rare plant or essential gardening supplies.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          className="row"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} className="col-lg-4 col-md-6" variants={itemVariants}>
              <div className="reason-card">
                <div className="icon-wrapper">
                  <i className={`fas fa-${reason.icon}`}></i>
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;