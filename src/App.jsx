/** @format */

import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Main from './components/Main';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Dropdown />
      <Main />
      <Projects />
      <About />
    </>
  );
}

export default App;
