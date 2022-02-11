/** @format */

import React, { useState } from 'react';
import '../css/Projects.css';

function Clicked() {
  // window.open('https://www.google.com/', '_blank');
  console.log('clicked');
}


const Projects = () => {
  const [showBtn1, setShowBtn1] = useState(false)
  const [showBtn2, setShowBtn2] = useState(false)
  const [showBtn3, setShowBtn3] = useState(false)
  const [showBtn4, setShowBtn4] = useState(false)
  
  const show1 = showBtn1 ? 'showBtn' : '';
  const show2 = showBtn2 ? 'showBtn' : '';
  const show3 = showBtn3 ? 'showBtn' : '';
  const show4 = showBtn4 ? 'showBtn' : '';
  
  let class1 = `btn ${show1}`
  let class2 = `btn ${show2}`
  let class3 = `btn ${show3}`
  let class4 = `btn ${show4}`
  
  return (
    <div className='projectsSection'>
      Scroll To Begin
      <div className='projectsWrapper'>
        <button onClick={Clicked} type='button' className={class1} onMouseOver={() => setShowBtn1(true)}>
          Games
          <p>JavaScript</p>
        </button>
        <button onClick={Clicked} type='button' className={class2} onMouseEnter={() => setShowBtn2(true)}>
          Animations
          <p>Canvas</p>
        </button>
        <button onClick={Clicked} type='button' className={class3} onMouseEnter={() => setShowBtn3(true)}>
          Websites
          <p>React</p>
        </button>
        <button onClick={Clicked} type='button' className={class4} onMouseEnter={() => setShowBtn4(true)}>
          GitHub
          <p>TypeScript</p>
        </button>
        <button onClick={Clicked} type='button' className={class4} onMouseEnter={() => setShowBtn4(true)}>
          Applications
          <p>Python</p>
        </button>
        <button onClick={Clicked} type='button' className={class4} onMouseEnter={() => setShowBtn4(true)}>
          Blog
          <p></p>
        </button>
      </div>
    </div>
  );
};

export default Projects;
