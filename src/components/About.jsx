/** @format */

import React, { useState } from 'react';
import '../css/About.css';
import { AboutData } from '../data/AboutData';

const About = () => {

  return (
    <div className='aboutSection'>
      <div className='aboutWrapper'>
        {AboutData.map((about, index) => (
          <>
          <h1>Hi,</h1>
          <div>My name is {about.name}.</div>
          <div>I have an {about.degree} degree</div>
          <div>and I am a {about.job}.</div>
          <div>My attractiveness rating is a {about.sexyRating}</div>
          <div>And I voted for {about.vote}</div>
          </>
        ))}
      </div>
    </div>
  );
};

export default About;
