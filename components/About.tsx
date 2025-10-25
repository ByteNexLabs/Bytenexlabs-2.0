
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-dark-card">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Who We Are
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-text mb-6">
            ByteNex Labs is a collective of passionate technologists, creative designers, and visionary thinkers dedicated to pushing the boundaries of what's possible. Our mission is to harness the power of artificial intelligence and modern software engineering to solve complex challenges and create lasting value for our partners.
          </p>
          <p className="text-lg text-gray-text">
            We believe in a collaborative, transparent, and agile approach. From concept to deployment, we work closely with our clients to ensure every solution is not just technologically sound, but also perfectly aligned with their strategic goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
