
import React from 'react';
import { servicesData } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Expertise</h2>
          <p className="text-lg text-gray-text mt-4 max-w-2xl mx-auto">
            We offer a comprehensive suite of services to bring your digital vision to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.title} 
              className="bg-dark-card p-8 rounded-lg border border-gray-800/50 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
