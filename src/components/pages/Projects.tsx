import React, { useEffect } from "react";
import ProjectCard from "../shared/ProjectCard";
import "../../style/projects.css";

const projects = [
  {
    projectName: "Project 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda possimus ut doloremque reprehenderit veniam sed tempora laborum et tempore quas, similique nihil dolor doloribus incidunt, explicabo iste. Vero, libero quidem.",
    backgroundImage:
      "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5ba80822f49b776649f0e0b6_moment-cs-bg1.jpg",
  },
  {
    projectName: "Project 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda possimus ut doloremque reprehenderit veniam sed tempora laborum et tempore quas, similique nihil dolor doloribus incidunt, explicabo iste. Vero, libero quidem.",
    backgroundImage:
      "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5ba80822f49b776649f0e0b6_moment-cs-bg1.jpg",
  },
  {
    projectName: "Project 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda possimus ut doloremque reprehenderit veniam sed tempora laborum et tempore quas, similique nihil dolor doloribus incidunt, explicabo iste. Vero, libero quidem.",
    backgroundImage:
      "https://uploads-ssl.webflow.com/5b0eb11723332d2455b73469/5ba80822f49b776649f0e0b6_moment-cs-bg1.jpg",
  },
];

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("project-card-show");
        } else {
          entry.target.classList.remove("project-card-show");
        }
      });
    });
    const hiddenProjectCards = document.querySelectorAll(
      ".project-card-hidden"
    );
    hiddenProjectCards.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="alignCenter flexColumn" id="projects">
      <div className="projects-heading-conatiner">
        <h2 className="projects-heading">Some of our crafts!</h2>
      </div>
      {projects.map((projectDetails, index) => {
        return (
          <ProjectCard
            key={projectDetails.projectName}
            index={index}
            projectName={projectDetails.projectName}
            description={projectDetails.description}
            backgroundImage={projectDetails.backgroundImage}
          />
        );
      })}
    </div>
  );
};

export default Projects;
