/** @format */

import React, { useState } from 'react';
import '../css/Dropdown.css';
import About from './About';
import Projects from './Projects';

function Dropdown({isOpen, toggle}) {

  const hidden = isOpen ? 'hide' : '';

  const display = `dropdownBackground ${hidden}`;

  return (
    <>
    <div className={display}>
    <div className='dropdownContainer'>
      <div className='dropdownWrapper'>
        {console.log(isOpen)}
        <Projects />
      </div>
    </div>
    </div>
    </>
  );
}

export default Dropdown;
