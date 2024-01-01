import React from "react";
import "../../style/contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container justifyCenter alignCenter">
      <div>
        <h1 className="contact-us-heading">Get in touch with us</h1>
        <button className="contact-us-button">Contact us</button>
      </div>
      <div className="contact-us-gradient-splash" />
    </div>
  );
};

export default ContactUs;
