import React, { useState } from 'react';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

import logoImage from './cdac.jpg'; // Import the logo image

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "#about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "#analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "#comment",
      name: "Comment",
      icon: <FaCommentAlt />
    },
    {
      path: "#product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "#productList",
      name: "Section",
      icon: <FaThList />
    }
  ];

  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className={`sidebar ${isOpen ? "hovered" : ""}`}
      >
        <div className="top_section">
          <img
            src={logoImage} // Use the imported logo image
            alt="Logo"
            style={{
              marginLeft: isOpen ? "50px" : "0px",
              width: "30px",
              height: "30px"
            }}
            className="logo"
          />
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              <span id='menu-items'>{item.name}</span>
            </div>
          </NavLink>
        ))}
      </div>
      <main className='mini'>{children}</main>
    </div>
  );
};

export default Sidebar;
