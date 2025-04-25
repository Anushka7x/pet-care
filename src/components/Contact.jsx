// src/components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section className="py-16 px-4 text-white" id="contact">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10" data-aos="fade-up">
          Contact Us
        </h2>
        <form
          className="bg-white text-gray-800 p-8 rounded-lg shadow-md space-y-4"
          data-aos="zoom-in-up"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
