
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg border-t border-gray-800/50 py-6">
      <div className="container mx-auto px-6 text-center text-gray-text">
        <p>&copy; {new Date().getFullYear()} ByteNex Labs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
