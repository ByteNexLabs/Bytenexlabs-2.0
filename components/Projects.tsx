
import React from 'react';
import { projectsData } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Innovations</h2>
          <p className="text-lg text-gray-text mt-4 max-w-2xl mx-auto">
            A glimpse into the solutions we've crafted.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project) => (
            <div 
              key={project.title} 
              className="bg-dark-card rounded-lg overflow-hidden group border border-gray-800/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-gray-800 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
