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
    <div class="details-container">
      <div class="article-container">
        <img src={imgSrc} alt="ProjectImg" class={styles.projectImg} />
      </div>
      <h2 class="experience-sub-title project-title">{projectName}</h2>
      <p>{desc}</p>
      <div class="btn-container">
        <a href={githubSrc}>
          <button class="btn btn-color-2 project-btn">Github</button>
        </a>
        <a href={demoSrc}>
          <button class="btn btn-color-2 project-btn">Live Demo</button>
        </a>
      </div>
    </div>
  );
}
