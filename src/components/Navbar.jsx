/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { NavbarData } from '../data/NavbarData';

const Navbar = ({ title, link }) => {
  return (
    <>
      <div className='nav'>
        <div className='navLink' to='/'>
          {NavbarData.map((item, index) => (
            <Link className='label' to={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
