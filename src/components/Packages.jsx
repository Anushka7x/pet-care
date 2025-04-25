// src/components/Packages.jsx
import React from 'react';

const plans = [
  {
    name: 'Personal',
    price: 49,
    features: ['5 Dog Walks', '3 Vet Visits', '3 Pet Spa', 'Free Support'],
  },
  {
    name: 'Business',
    price: 79,
    features: ['5 Dog Walks', '3 Vet Visits', '3 Pet Spa', 'Free Support'],
  },
  {
    name: 'Ultimate',
    price: 109,
    features: ['5 Dog Walks', '3 Vet Visits', '3 Pet Spa', 'Free Support'],
  },
];

function Packages() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Affordable Packages
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg shadow-xl hover:shadow-2xl p-8 transition-transform transform hover:-translate-y-2"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <h3 className="text-xl font-bold text-center mb-4">{plan.name}</h3>
              <div className="text-center text-4xl font-bold text-orange-500 mb-6">
                ${plan.price}
                <span className="text-base text-gray-500 font-normal">/mos</span>
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-center justify-center">
                    ✔️ {f}
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-sm transition">
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Packages;
