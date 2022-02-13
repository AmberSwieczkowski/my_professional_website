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

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar {...NavbarData}/>
      <Dropdown />
      <Main />
    </>
  );
}

export default App;
