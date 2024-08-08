import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/">Home</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/about">About</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/contact">Contact</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/gallery">Gallery</Link>
        </li>
        <li className='navbar-item'>
          <Link className='navbar-link' to="/services">Services</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
