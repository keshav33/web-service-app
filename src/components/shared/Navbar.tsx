import React from "react";
import "../../style/navbar.css";

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
        <div className="navbar-link">About Us</div>
        <div className="navbar-link">Contact Us</div>
      </div>
    </div>
  );
};

export default Navbar;
