/** @format */

import React from 'react';
import '../css/Navbar.css'


const Navbar = ({ toggle }) => {
  return (
    <div className='nav'>
      <div className='navLink' to='/'>
        <div className="label">PROJECTS</div>
        </div>
      <div className='navLink' to='/'><div className="label">ABOUT</div>
      </div>
      <div className='navLink' to='/'><div className="label">CONTACT</div>
      </div>
      </div>
  );
};

export default Navbar;
