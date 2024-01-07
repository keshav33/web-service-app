import React from "react";
import "../../style/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import brandLogo from "../../assets/icons/brandLogo.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container flexSpaceAround">
      <div className="navbar-brand-container">
        <img
          className="brand-logo"
          src={brandLogo}
          alt="brandlogo"
          onClick={() => navigate("/")}
        />
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
