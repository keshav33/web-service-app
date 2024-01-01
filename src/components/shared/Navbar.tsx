import React from "react";
import "../../style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
    projectsElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="navbar-container flexSpaceAround">
      <div className="navbar-brand-container">TeknoMonk</div>
      <div className="navbar-link-container">
        <div className="navbar-link" onClick={scrollToProjects}>
          Projects
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
