import React from "react";
import ProjectsCard from "./ProjectsCard";
import styles from "./Projects.module.css";
import parkWhereLogo from "../assets/stock/parkWhereLogo.png";

export default function Projects() {
  return (
    <section id="projects">
      <p class="section__text__p1">Browse My Recent</p>
      <h1 class="title">Projects</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <ProjectsCard
            imgSrc={parkWhereLogo}
            projectName="parkWhere"
            desc="a barebones application retrieves real-time API for parking lots from data.gov, integrated with Google Maps"
            githubSrc="https://github.com/kiblykat/ParkWhere"
            demoSrc="https://parkwhere.netlify.app/"
          />
          <ProjectsCard imgSrc="" projectName="" githubSrc="" demoSrc="" />
          <ProjectsCard imgSrc="" projectName="" githubSrc="" demoSrc="" />
        </div>
      </div>
      <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#contact'"
      />
    </section>
  );
}
