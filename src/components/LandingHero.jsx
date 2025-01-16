import { useState } from 'react'
import React from 'react';
import PortraitPanel from './SelfPortraitPanel';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <>
    <div className='fixed top-0 left-0 w-screen'>
    <div className="grid grid-cols-2  w-screen h-screen">
      
      <div className="col-span-1 bg-LLlightPink rounded-lg">
        <div className='ml-16 mt-48'>
          <article className='prose'>
            <h1 className='text-8xl mb-4'>Hi There! I'm Liam.</h1>

            <h3 className='text-slate-500 w-3/4 mb-6'>
              A budding <span className='text-LLAmber font-bold'>UX Designer </span> 
              and <span className='text-LLmidBlue font-bold'>Web Developer</span>, ready to take on the world.
            </h3>
          </article>

          <Link to={'/#Projects'}>
            <button className='btn btn-primary mt-5 btn-lg text-slate-50'>See My work!</button>
          </Link>

          <article className='prose mt-14 space-y-0'>
          <h2 className='mb-1'>Contact Me!</h2><h3 className='text-slate-500'>Locherliam@gmail.com</h3>
          </article>

        </div>

        <div className='flex justify-center items-center w-full'>
          <Link to={'/#About'}>
            <button className='btn bg-LLmidBlue rounded-2xl mt-5 btn-lg text-slate-50 '>Get To Know Me...</button>
          </Link>
        </div>

      </div>


      <div className=" bg-LLOrange rounded-lg"><PortraitPanel/></div>
    </div>
    </div>
    </>
  )
}

export default Hero;

