import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-500 font-[Pacifico]">PetCare</h1>
        <ul className="flex space-x-6 font-medium">
          <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
          <li><Link to="/RequestDashboard" className="hover:text-orange-500 transition">Requests</Link></li>
          <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;