import { useState } from 'react'
import React from 'react';

function About() {

  return (
    <>
    <div className='bg-slate-900 py-32' id='About'>
        <div className='prose mx-16'>
          <h1 className='text-6xl text-LLlightBlue'>About Me</h1>
        </div>

          <div className='grid grid-cols-2 w-full pt-20'>
            <div className='prose justify-self-center'>

              <div className='py-16 pt-0 transition-transform duration-300 hover:scale-105 hover:bg-slate-800 rounded-2xl p-4'>
                <div className='px-8'>
                  <h1 className='text-4xl text-LLlightBlue'>Who I Am</h1>
                  <h3 className='text-xl text-LLlightBlue'>
                    I’m a budding UX designer with a passion for creating intuitive,
                    impactful and meaningful designs. Born and raised on the Sunny Gold
                    Coast, I’m currently pursuing my studies at the University of
                    Queensland in Brisbane, where I’m honing my skills to design for a
                    better tomorrow.
                  </h3>
                </div>
              </div>

              <div className='py-16 transition-transform duration-300 hover:scale-105 hover:bg-slate-800 rounded-2xl'>
                <div className='px-8'>
                  <h1 className='text-4xl text-LLlightBlue'>Creative and Idea-Centred</h1>
                  <h3 className='text-xl text-LLlightBlue'>
                    Creativity fuels everything I do. Whether it’s exploring new ways to
                    solve a problem or dreaming up the next big idea, I thrive on bringing
                    concepts to life that challenge the norm and inspire positive change.
                  </h3>
                </div>
              </div>

            </div>

            <div className='justify-self-center '>
              <div className='transition-transform duration-300 hover:scale-105 flex justify-center'>
                <img
                  src="public/Profile_about.png"
                  className="w-2/3 pb-16" />
              </div>

              <div className='prose text-right transition-transform duration-300 hover:scale-105 hover:bg-slate-800 rounded-2xl '>
              <div className='px-8'>
                <h1 className='text-4xl text-LLlightBlue'>Driven By Purpose</h1>
                <h3 className='text-xl text-LLlightBlue'>
                  Sustainability is at the heart of what I do. I’m committed to bettering
                  the world through thoughtful design that considers not only the user’s
                  experience but also the broader impact on our planet. I believe great
                  design can inspire positive change.
                </h3>
              </div>
              </div>
            </div>


          </div>

        <div className='prose mx-16'>
          <h1 className='text-4xl text-LLlightBlue'>Let's Connect!</h1>
          <h3 className='text-2xl text-LLlightBlue'></h3>
        </div>

    </div>
    
    </>
  )
}

export default About;
