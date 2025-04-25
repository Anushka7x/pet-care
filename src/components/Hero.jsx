// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: "url('https://themewagon.github.io/petsitting/images/bg_1.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold drop-shadow-xl leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We Care for <br className="hidden md:block" /> Street Animals
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-lg md:text-xl mt-4 mb-6 text-gray-100 drop-shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Donate, request help, or support with feeders. Let’s make a change together!
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#services"
          className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-8 rounded-full font-semibold shadow-lg transition-all duration-300 inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;
