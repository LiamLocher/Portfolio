import React from 'react';
import Navbar from '../TopNav';

function StoryPath() {
  return (
    <div className="bg-LLlightBlue min-h-screen">
      <Navbar />
      <div className="container mx-auto pt-16">
        <div className='prose max-w-none'>
            {/* Header */}
            <h1 className="text-6xl mb-4 text-slate-900">StoryPath</h1>

            {/* Tags */}
            <div className="space-x-4 mb-6">
              <span className="badge bg-LLdarkBlue badge-lg text-white text-md font-bold">University Project</span>
              <span className="badge bg-LLOrange badge-lg text-white text-md font-bold">Individual work</span>
              <span className="badge bg-LLmidBlue badge-lg text-white text-md font-bold">Developed In React</span>
            </div>

            {/* Description */}
            <p className='text-xl text-slate-900 mb-8'>
              Spellbound was developed for a project designed to build skills in React, Javascript, and CSS frameworks, with no restrictions on the design choices as long as the website included all essential features.
              <br/><br/>
              The web version of Spellbound is primarily a platform for users to CREATE treasure hunts and tours, providing users with the tools to insert their own content, adjust the rules, locations and interaction methods. 
              <br/><br/>
              Later in the term, a complementary app was built using React Native designed for users to "Play" the treasure hunts made on StoryPath.
            </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/StoryPath_Locations.png"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="/StoryPath_preview.png"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
          <img
            src="/StoryPath_Projects.png"
            className="rounded-lg shadow-md object-cover w-full h-64"
          />
        </div>
      </div>
    </div>
  );
}

export default StoryPath;
