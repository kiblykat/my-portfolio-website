import React from "react";
import "./ProjectsCard.css";

export default function ProjectsCard({
  imgSrc,
  projectName,
  githubSrc,
  demoSrc,
  desc,
}) {
  return (
    <div className="detailsContainer">
      <div className="article-container">
        <img src={imgSrc} alt="ProjectImg" className="projectImg" />
      </div>
      <h2 className="experience-sub-title project-title">{projectName}</h2>
      <p>{desc}</p>
      <div>
        <a href={githubSrc}>
          <button
            class="gb gb-bordered hover-slide hover-fill gb-rounded"
            id="gb7"
          >
            Github
          </button>
        </a>
        <a href={demoSrc}>
          <button className="btn btn-color-2 project-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
