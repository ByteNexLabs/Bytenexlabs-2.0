
import React from 'react';
import { techStackData } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Technology Stack</h2>
          <p className="text-lg text-gray-text mt-4 max-w-2xl mx-auto">
            We use a curated set of modern, powerful tools to build robust and scalable solutions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {techStackData.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 text-gray-500 group-hover:text-white transition-colors duration-300 transform group-hover:scale-110">
                {tech.icon}
              </div>
              <p className="mt-2 text-sm text-gray-text group-hover:text-primary font-medium transition-colors duration-300">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
