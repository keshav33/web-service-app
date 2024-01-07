import React from "react";
import "../../style/projectCard.css";

type ProjectCardProps = {
  index: number;
  projectName: string;
  description: string;
  backgroundImage: string;
};

const ProjectCard = ({
  index,
  projectName,
  description,
  backgroundImage,
}: ProjectCardProps) => {
  const isImagePanToLeft = (index: number) => {
    return index % 2 === 0;
  }
  if (isImagePanToLeft(index)) {
    return (
      <div className="project-card project-card-image-pan-right project-card-hidden">
        <div className="project-card-content">
          <div className="project-card-content-name">{projectName}</div>
          <div className="project-card-content-description">{description}</div>
          <button className="project-card-view-more-details-button">
            View More Details
          </button>
        </div>
        <div className="project-card-background-container">
          <img
            className="project-card-background"
            src={backgroundImage}
            alt="Project Info"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="project-card project-card-image-pan-left project-card-hidden">
      <div className="project-card-background-container">
        <img
          className="project-card-background"
          src={backgroundImage}
          alt="Project Info"
        />
      </div>
      <div className="project-card-content">
        <div className="project-card-content-name">{projectName}</div>
        <div className="project-card-content-description">{description}</div>
        <button className="project-card-view-more-details-button">
          View More Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
