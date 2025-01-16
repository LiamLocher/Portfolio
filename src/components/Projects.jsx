import { useState } from 'react'
import React from 'react';
import Card from './ProjectCard';

function Projects() {

  return (
    <>
    <div className='m-16 mb-0 pb-32' id='Projects'>
        <div className='prose'>
            <h1 className='text-6xl'>Projects</h1> 
        </div>
            <div className='grid grid-cols-3 gap-4 justify-items-center mt-16'>
                <Card link="spellbound" image={"homeMVP.png"} description={"An online Multiplayer magic-themed spelling bee game, Created for a first-year Uni project"} name={"SpellBound"}/>
                <Card link="tandem" image={"tandem_landing_small.png"} description={"A passion project inspired by an upcoming overseas exchange I am beginning soon"} name={"Tandem"}/>
                <Card link="storypath" image={"StoryPath_Landing.png"} description={"A Platform made for creators to design treasure hunts, museum tours and activities for users to participate in."} name={"Story Path"}/>
                <Card link="medipal" image={"Medipal_Screens.png"} description={"A Pill-tracker Medical assistant app designed for a second-year University Project"} name={"MediPal"}/>
                <Card link="Something" image={""} description={""} name={""}/>
            </div>
    </div>

    </>
  )
}

export default Projects;
