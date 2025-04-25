// src/components/WhyChooseUs.jsx
import React from 'react';

const reasons = [
  {
    title: '24/7 Support',
    desc: 'We’re available any time to help or respond to animal emergencies in your area.',
  },
  {
    title: 'Verified Team',
    desc: 'Our volunteers and partners are trained to handle and care for street animals.',
  },
  {
    title: 'Safe & Loving Environment',
    desc: 'We ensure rescued animals are treated with compassion and care.',
  },
  {
    title: 'Free of Cost',
    desc: 'All services are absolutely free, powered by donations and volunteer support.',
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
