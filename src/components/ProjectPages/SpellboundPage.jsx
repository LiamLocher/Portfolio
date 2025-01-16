import React from 'react';
import Navbar from '../TopNav';

function SpellBound() {
  return (
    <div className="bg-LLlightBlue min-h-screen">
      <Navbar />
      <div className="px-4 md:px-6 lg:px-8 container mx-auto pt-16">
        <div className="prose max-w-none">
          {/* Header */}
          <h1 className="text-6xl mb-4 text-slate-900">Spellbound</h1>

          {/* Tags */}
          <div className="space-x-4 mb-6">
            <span className="badge bg-LLdarkBlue badge-lg text-white text-md font-bold">University Project</span>
            <span className="badge bg-LLOrange badge-lg text-white text-md font-bold">Group Work</span>
            <span className="badge bg-LLdarkBlue badge-lg text-white text-md font-bold">Next.js</span>
          </div>

          {/* Description */}
          <p className="text-xl text-slate-900 mb-8">
            SpellBound was created for a University group project based around intuitively utilizing an existing API for the betterment of a target user group. The final product was an online multiplayer versus spelling bee that included power-ups, streaks, a timer and Lives. 
            <br /><br />
            My role in the project was front-end development and design, meaning I was responsible for creating and implementing the assets, layout, theme and colour scheme, as well as certain gameplay mechanics. 
            <br /><br />
            The development process involved wireframing, creating user personas, pitching an MVP, and user-testing/ Interviews. 
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/homeMVP.png"
            alt="Home MVP"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="/LobbyFinal.png"
            alt="Lobby Final"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="/lowfiProto.png"
            alt="Low Fidelity Prototype"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="/versusFinal.png"
            alt="Versus Final"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}

export default SpellBound;
