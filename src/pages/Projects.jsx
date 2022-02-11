/** @format */

import React, { useState } from 'react';
import Button from '../components/Button';
import '../css/Projects.css';
import { ProjectsData } from '../data/ProjectsData';

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
      <div className='projectsWrapper'>
        {ProjectsData.map((project, index) => (
          <button onClick={Clicked} className='btn'>{project.title}</button>
        ))}
        <Button onClick={Clicked} className={class1} onMouseEnter={() => setShowBtn1(true)}>
          Games
          <p>JavaScript</p>
        </Button>
        <button onClick={Clicked} className={class2} onMouseEnter={() => setShowBtn2(true)}>
          Animations
          <p>Canvas</p>
        </button>
        <Button onClick={Clicked} className={class3} onMouseEnter={() => setShowBtn3(true)}>
          Websites
          <p>React</p>
        </Button>
        <Button onClick={Clicked} className={class4} onMouseEnter={() => setShowBtn4(true)}>
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default Projects;
