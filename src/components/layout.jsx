import React from "react";
import { NavLink } from "react-router-dom";
import "../components/style.css"

function Layout() {
  return (
    <div className="container">
      <ul className="nav-list">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/blogs" className="nav-link">Blogs</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
      </ul>
    </div>
  );
}

export default Layout;
