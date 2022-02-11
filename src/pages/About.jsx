/** @format */

import React, { useState } from 'react';
import '../css/About.css';

const About = () => {
  const [showAbout1, setShowAbout1] = useState(false);
  // const [showAbout2, setShowAbout2] = useState(false)
  // const [showAbout3, setShowAbout3] = useState(false)
  // const [showAbout4, setShowAbout4] = useState(false)

  const show = showAbout1 ? 'showAbout' : '';
//   const show2 = showAbout2 ? 'showAbout' : '';
  // const show3 = showAbout3 ? 'showAbout' : '';
  // const show4 = showAbout4 ? 'showAbout' : '';

  let classLeft = `about left ${show}`;
  let classCenter = `about center ${show}`
  let classRight = `about right ${show}`
  // let class4 = `about ${show4}`

  return (
    <div className='aboutSection'>
      <div className='aboutWrapper'>
        <div className={classLeft} onMouseOver={() => setShowAbout1(true)}>
          JavaScript
        </div>
        <div className={classCenter} onMouseEnter={() => setShowAbout1(true)}>
          React
        </div>
        <div className={classRight} onMouseEnter={() => setShowAbout1(true)}>
          Git
        </div>
        <div className={classLeft} onMouseEnter={() => setShowAbout1(true)}>
          MySQL
        </div>
        <div className={classCenter} onMouseEnter={() => setShowAbout1(true)}>
          Website Design
        </div>
        <div className={classRight} onMouseEnter={() => setShowAbout1(true)}>
          Node
        </div>
        <div className={classLeft} onMouseEnter={() => setShowAbout1(true)}>
          Sass
        </div>
        <div className={classCenter} onMouseEnter={() => setShowAbout1(true)}>
          jQuery
        </div>
        <div className={classRight} onMouseEnter={() => setShowAbout1(true)}>
          CSS
        </div>
      </div>
    </div>
  );
};

export default About;
