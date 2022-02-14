/** @format */

import React, { useState } from 'react';
import '../css/Dropdown.css';
import About from './About';
import Projects from './Projects';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const hidden = isOpen ? '' : 'hide';

  const display = `dropdownContainer ${hidden}`;

  return (
    <>
      <div className={display} onClick={toggle}>
        <Projects />
      </div>
    </>
  );
}

export default Dropdown;
