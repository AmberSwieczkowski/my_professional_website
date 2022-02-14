/** @format */

import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { NavbarData } from './data/NavbarData';
import { ProjectsData } from './data/ProjectsData';
import GlobalStyle from './globalStyles';
import About from './components/About';
import Projects from './components/Projects';
import './css/Dropdown.css';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar {...NavbarData} toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Main isOpen={isOpen} toggle={toggle}/>
    </>
  );
}

export default App;
