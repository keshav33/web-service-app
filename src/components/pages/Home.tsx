import React from "react";
import "../../style/home.css";
import Projects from "./Projects";
import WhyUS from "./WhyUs";

const Home = () => {
  const scrollToProjects = () => {
    const projectsElement = document.getElementById("projects");
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
        <button
          className="home-view-projects-button marginTop100"
          onClick={scrollToProjects}
        >
          Have a glimpse of our work
        </button>
      </div>
      <Projects />
      <div className="marginTop60">
        <WhyUS />
      </div>
      <div className="marginTop80">
        <h2 className="join-us-heading">
          Are you ready to roll with us?
        </h2>
        <button
          className="home-pricing-button marginBottom80"
        >
          Check out our pricing
        </button>
      </div>
    </div>
  );
};

export default Home;
