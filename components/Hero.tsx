
import React from 'react';

interface HeroProps {
  greeting: string;
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ greeting, isLoading }) => {
    
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden px-4">
       <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900/50 to-dark-bg z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
       </div>
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-dark-bg to-transparent z-10"></div>
       <div className="absolute bottom-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
       <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>

      <div className="z-20 container mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
          Engineering the Future <br /> with <span className="text-primary">Code & AI</span>
        </h1>
        <div className="h-8 md:h-10 my-4 flex items-center justify-center">
          {isLoading ? (
            <div className="w-full max-w-lg bg-gray-700/50 rounded-md p-4 overflow-hidden">
                <div className="relative h-6 bg-gray-600 rounded-md">
                    <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-shimmer"></div>
                </div>
            </div>
          ) : (
            <p className="text-xl md:text-2xl text-secondary font-semibold italic">
              "{greeting}"
            </p>
          )}
        </div>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-text mt-6 mb-10">
          ByteNex Labs is an innovation hub where ideas transform into powerful digital solutions. We specialize in building intelligent, scalable, and beautiful applications that drive progress.
        </p>
        <a 
          href="#projects"
          onClick={scrollToProjects}
          className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
