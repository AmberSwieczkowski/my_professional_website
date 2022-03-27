/** @format */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../css/Projects.css';
import { ProjectsData } from '../data/ProjectsData';

function Clicked() {
  // window.open('https://www.google.com/', '_blank');
  console.log('clicked');
}

const Projects = () => {
  return (
    <>
      <div className='projectsSection'>
        <div className='menuSection'>
        <h1 className='menuSection'>Games & Animations</h1>
          <div className='projectsLinks'>
            {ProjectsData.map((project, index) => (
              <li className='projectsWrapper' key={project.id}>
                <Link to={project.link}>
                  <Button onClick={Clicked} key={project.id}>
                    {project.title}
                    <p>{project.category}</p>
                  </Button>
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className='menuSection'>
        <h1 className='menuSection'>Websites</h1>
          <div className='websiteLinks'>
            {ProjectsData.map((project, index) => (
              <li className='projectsWrapper' key={project.id}>
                <Link to={project.link}>
                  <Button onClick={Clicked} key={project.id}>
                    {project.title}
                  </Button>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
