
import React from 'react';
import { socialLinks } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Build Together</h2>
        <p className="text-lg text-gray-text max-w-2xl mx-auto mb-8">
          Have an idea or a project? We'd love to hear from you. Reach out and let's create something amazing.
        </p>
        <a 
          href="mailto:contact@bytenexlabs.com" 
          className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30 mb-12"
        >
          contact@bytenexlabs.com
        </a>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => (
            <a 
              key={social.name} 
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-text hover:text-primary transition-colors duration-300"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
