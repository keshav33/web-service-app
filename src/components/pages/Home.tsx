import React from "react";
import "../../style/home.css";
import WhyUS from "./WhyUs";
import { useNavigate } from "react-router-dom";
import OurServices from "./OurServices";

const Home = () => {
  const navigate = useNavigate();

  const scrollToOurServices = () => {
    const projectsElement = document.getElementById("our-services");
    projectsElement?.scrollIntoView({ behavior: "smooth" });
  };

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
        </div>
        <div className="home-gradient-splash" />
        <div className="home-projects-button-container marginTop100">
          <button
            className="home-view-projects-button"
            onClick={() => navigate("/projects")}
          >
            Have a glimpse of our work
          </button>
          <div className="home-projects-button-divider">
            {"-OR-"}
          </div>
          <div className="scroll-mouse" onClick={scrollToOurServices}></div>
        </div>
      </div>
      <div className="marginTop80">
        <OurServices />
      </div>
      <div className="marginTop80">
        <WhyUS />
      </div>
      <div className="marginTop80">
        <h2 className="join-us-heading">
          Are you ready to roll with us?
        </h2>
        <button
          className="home-pricing-button marginBottom80"
          onClick={() => navigate("/pricing")}
        >
          Check out our pricing
        </button>
      </div>
    </div>
  );
};

export default Home;
