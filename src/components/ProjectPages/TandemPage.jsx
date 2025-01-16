import React from 'react';
import Navbar from '../TopNav';

function Tandem() {
  return (
    <div className="bg-LLlightBlue min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-16">
        <div className='prose max-w-none'>
            {/* Header */}
            <h1 className="text-6xl mb-4 text-slate-900">Tandem.</h1>

            {/* Tags */}
            <div className="space-x-4 mb-6">
              <span className="badge bg-LLdarkBlue badge-lg text-white text-md font-bold">Passion Project</span>
              <span className="badge bg-LLOrange badge-lg text-white text-md font-bold">Figma Prototype</span>
            </div>

            {/* Description */}
            <p className='text-xl text-slate-900 mb-8'>
              Tandem was created as a passion project as a potential Idea for further development, and to refine my skills in figma prototyping. The concept is centered around
              meeting interesting, like-minded Travellers whilst exploring a different country. It's purpose is to close the gap between solo travellers, and provide access to unique experiences.
              <br/><br/>
              The design decisions were inspired by the warm climates of the Gold Coast, as well as those of Portugal and Spain where I plan to travel. 
              <br/><br/>
              This project is being continuously refined and expanded, and has the potential to become a legitimate product.  
            </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/Tandem_Landing.png"
            className="rounded-lg shadow-md object-cover w-2/3 h-auto"
          />

          <img
            src="/Tandem_Login.png"
            className="rounded-lg shadow-md object-cover w-2/3 h-auto"
          />

          <img
            src="/Tandem_Home.png"
            className="rounded-lg shadow-md object-cover w-2/3 h-auto"
          />
          
          <img
            src="/Tandem_Profile.png"
            className="rounded-lg shadow-md object-cover w-2/3"
          />

          <img
            src="/Tandem_discover.png"
            className="rounded-lg shadow-md object-cover w-2/3 auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Tandem;
