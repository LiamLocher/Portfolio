import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed top-4 right-4 z-10 bg-white/60 backdrop-blur-lg shadow-lg rounded-full px-6 py-1">
      <div className="flex space-x-4">
        <Link to="/" className="text-lg font-medium text-gray-800 hover:bg-slate-800 hover:text-LLlightBlue rounded-full py-3 px-4 transition duration-200">
          Home
        </Link>
        <Link to="/#About" className="text-lg font-medium text-gray-800 hover:bg-slate-800 hover:text-LLlightBlue rounded-full py-3 px-4 transition duration-200">
          About
        </Link>
        <Link to="/#Projects" className="text-lg font-medium text-gray-800 hover:bg-slate-800 hover:text-LLlightBlue rounded-full py-3 px-4 transition duration-200">
          Projects
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
