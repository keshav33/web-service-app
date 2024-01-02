import React from "react";
import "../../style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container flexSpaceAround">
      <div className="navbar-brand-container">
        <Link to="/">TeknoMonk</Link>
      </div>
      <div className="navbar-link-container">
        <div className="navbar-link">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="navbar-link">
          <Link to="/pricing">Pricing</Link>
        </div>
        <div className="navbar-link">
          <Link to="/about-us">About Us</Link>
        </div>
        <div className="navbar-link">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
