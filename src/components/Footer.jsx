import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12">
      <p className="text-sm">&copy; {new Date().getFullYear()} PetCare Platform. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
