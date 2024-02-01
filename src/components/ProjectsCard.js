import React from "react";
import styles from "./ProjectsCard.module.css";

export default function ProjectsCard({
  imgSrc,
  projectName,
  githubSrc,
  demoSrc,
  desc,
}) {
  return (
    <div className="details-container">
      <div className="article-container">
        <img src={imgSrc} alt="ProjectImg" className={styles.projectImg} />
      </div>
      <h2 className="experience-sub-title project-title">{projectName}</h2>
      <p>{desc}</p>
      <div className="btn-container">
        <a href={githubSrc}>
          <button className="btn btn-color-2 project-btn">Github</button>
        </a>
        <a href={demoSrc}>
          <button className="btn btn-color-2 project-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
