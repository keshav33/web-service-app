import React from "react";
import "../../style/projectCard.css";

type ProjectCardProps = {
  projectName: string;
  description: string;
  backgroundImage: string;
};

const ProjectCard = ({
  projectName,
  description,
  backgroundImage,
}: ProjectCardProps) => {
  return (
    <div className="project-card project-card-hidden">
      <img
        className="project-card-background"
        src={backgroundImage}
        alt="Project Info"
      />
      <div className="project-card-content-name">{projectName}</div>
      <div className="project-card-content-description">{description}</div>
      <button className="project-card-view-more-details-button">
        View More Details
      </button>
    </div>
  );
};

export default ProjectCard;
