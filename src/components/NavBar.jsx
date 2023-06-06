import React from 'react';
import { FaSearch, FaEnvelope, FaCog, FaBell, FaUser  } from 'react-icons/fa';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="search-bar">
          <input type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="navbar-right">
        <FaUser className="icon" />
        <FaEnvelope className="icon" />
        <FaCog className="icon" />
        <FaBell className="icon" />
      </div>
    </nav>
  );
}

export default NavBar;
