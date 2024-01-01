import React from "react";
import "../../style/home.css";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div className="home-container justifyCenter alignCenter">
        <div className="home-heading-container">
          <h1 className="home-heading">
            Transforming web the way it should be.
          </h1>
          <h2 className="home-subheading">
            TeknoMonk crafts your ideas to reality with ease so that you can
            take a fresh breeze
          </h2>
          <button className="home-get-in-touch-button">Get in touch</button>
        </div>
        <div className="home-gradient-splash" />
      </div>
      <Projects />
    </div>
  );
};

export default Home;
