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

    </>
  );
};

export default Projects;
