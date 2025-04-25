// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';
import RequestDashboard from './components/RequestDashboard';

// Form Components
import AnimalRequestForm from './components/AnimalRequestForm';
import DonationForm from './components/DonationForm';
import CareRequestForm from './components/CareRequestForm';
import FeederRequestForm from './components/FeederRequestForm';
import Contact from './components/Contact';

import BackToTopButton from './components/BackToTopButton';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div
                className="bg-fixed bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1583337130417-3346a1a4e27c?auto=format&fit=crop&w=1950&q=80')",
                }}
              >
                <div className="bg-black bg-opacity-60 backdrop-blur-sm">
                  <Services />
                  <WhyChooseUs />
                  <Packages />
                  <Gallery />
                  <Blog />
                  <Contact />
                </div>
              </div>
            </>
          }
        />
        <Route path="/request" element={<AnimalRequestForm />} />
        <Route path="/donate" element={<DonationForm />} />
        <Route path="/care" element={<CareRequestForm />} />
        <Route path="/feeder" element={<FeederRequestForm />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/dashboard" element={<RequestDashboard />} />
      </Routes>
      <BackToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
