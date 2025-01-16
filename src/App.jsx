import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/TopNav';
import SpellBound from './components/ProjectPages/SpellboundPage';
import Medipal from './components/ProjectPages/MediPalPage';
import StoryPath from './components/ProjectPages/StoryPathPage';
import Tandem from './components/ProjectPages/TandemPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Define the route for the home page (/) */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* This will render everything for the homepage */}
          
          {/* Define individual routes for each project page */}
          <Route path="/spellbound" element={<SpellBound />} />
          <Route path="/medipal" element={<Medipal />} />
          <Route path="/storypath" element={<StoryPath />} />
          <Route path="/tandem" element={<Tandem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
