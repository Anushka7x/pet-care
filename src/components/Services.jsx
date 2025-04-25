// src/components/Services.jsx
import React from 'react';
import { FaPaw, FaDonate, FaHandsHelping, FaBone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <FaPaw size={32} className="text-orange-500 mb-2" />,
    title: 'Locate Animal',
    path: '/request',
    description: 'Report a street animal needing medical help or found dead in your area.',
  },
  {
    icon: <FaDonate size={32} className="text-orange-500 mb-2" />,
    title: 'Donate',
    path: '/donate',
    description: 'Support animals by donating food, money, medicine, or shelter materials.',
  },
  {
    icon: <FaHandsHelping size={32} className="text-orange-500 mb-2" />,
    title: 'Pet Care',
    path: '/care',
    description: 'Request our team to take care of your pet and take them to play zones or shelters.',
  },
  {
    icon: <FaBone size={32} className="text-orange-500 mb-2" />,
    title: 'Feeder Build',
    path: '/feeder',
    description: 'Request to build a local feeder in your area and support stray animal feeding.',
  },
];

function Services() {
  return (
    <section className="py-16 px-4 text-white" id="services">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-10"
          data-aos="fade-up"
        >
          Our Services
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg p-6 shadow-lg hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm mb-4">{service.description}</p>
              <Link
                to={service.path}
                className="mt-auto inline-block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Go to Form
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
