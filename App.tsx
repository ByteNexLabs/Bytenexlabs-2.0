
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { generateGreeting } from './services/geminiService';

const App: React.FC = () => {
  const [aiGreeting, setAiGreeting] = useState<string>('');
  const [isGreetingLoading, setIsGreetingLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGreeting = async () => {
      try {
        setIsGreetingLoading(true);
        const greeting = await generateGreeting();
        setAiGreeting(greeting);
      } catch (error) {
        console.error("Failed to generate greeting:", error);
        setAiGreeting("Pioneering Tomorrow's Technology, Today.");
      } finally {
        setIsGreetingLoading(false);
      }
    };

    fetchGreeting();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg font-sans">
      <Header />
      <main>
        <Hero greeting={aiGreeting} isLoading={isGreetingLoading} />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
