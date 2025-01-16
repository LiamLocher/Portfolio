import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from './LandingHero';
import About from './About';
import Projects from './Projects';
import Journey from './developmentJourney';

function Home() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <div id="Home">
      <Hero />
      <div className="relative bg-LLlightBlue mt-[100vh] z-8 shadow-inner">
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default Home;
