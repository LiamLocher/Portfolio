import { useState } from 'react'
import React from 'react';

function PortraitPanel() {

  return (
    <>
    <div className="hero min-h-screen">
        <img
            src="public/ProfilePhoto.png"
            className="h-auto w-2/3" />
    </div>
    </>
  )
}

export default PortraitPanel;


/*
style={{
    backgroundImage: "url(lowpoly_hero_environment.jpeg)",
}}
*/