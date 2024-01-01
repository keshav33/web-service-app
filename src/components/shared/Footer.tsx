import React from "react";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import linkedInIcon from "../../assets/icons/linkedin-icon.svg";
import "../../style/footer.css";

const Footer = () => {
  return (
    <>
      <hr className="footer-separator" />
      <div className="footer-container">
        <div className="footer-copyright-container">
          @2024 TeknoMonk. All Rights Reserved.
        </div>
        <div className="social-media-icon-container">
          <img
            className="footer-social-media-icon"
            src={instagramIcon}
            alt="Instagram"
          />
          <img
            className="footer-social-media-icon"
            src={linkedInIcon}
            alt="LinkedIn"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
