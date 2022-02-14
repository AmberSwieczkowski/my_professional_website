/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import { NavbarData } from '../data/NavbarData';

const Navbar = ({ title, link, toggle }) => {
  return (
    <>
      <div className='nav'>
          {NavbarData.map((item, index) => (
        <div className='navLink' to='/' key={item.id} onClick={toggle}>
            <Link className='navLabel' to={item.link} key={item.id}>
              {item.title}
            </Link>
        </div>
          ))}
      </div>
    </>
  );
};

export default Navbar;
