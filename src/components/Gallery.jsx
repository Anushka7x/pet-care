// src/components/Gallery.jsx
import React from 'react';

const pets = [
  { type: 'Cat', breed: 'Persian Cat', img: 'https://themewagon.github.io/petsitting/images/gallery-1.jpg' },
  { type: 'Dog', breed: 'Pomeranian', img: 'https://themewagon.github.io/petsitting/images/gallery-2.jpg' },
  { type: 'Cat', breed: 'Sphynx Cat', img: 'https://themewagon.github.io/petsitting/images/gallery-3.jpg' },
  { type: 'Cat', breed: 'British Shorthair', img: 'https://themewagon.github.io/petsitting/images/gallery-4.jpg' },
  { type: 'Dog', breed: 'Beagle', img: 'https://themewagon.github.io/petsitting/images/gallery-5.jpg' },
  { type: 'Dog', breed: 'Pug', img: 'https://themewagon.github.io/petsitting/images/gallery-6.jpg' },
];

function Gallery() {
  return (
    <section className="py-16 px-4 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
          Pets Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pets.map((pet, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img src={pet.img} alt={pet.breed} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{pet.type}</h4>
                <p className="text-sm text-gray-600">{pet.breed}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
