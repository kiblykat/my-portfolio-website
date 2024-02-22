import React from "react";
import ProjectsCard from "./ProjectsCard";
import parkWhereLogo from "../../assets/stock/parkWhereLogo.png";
import carIconLogo from "../../assets/carIcon.jfif";
import cardyBotLogo from "../../assets/stock/cardyBotLogo.png";
import { stockLogo } from "../../assets/images";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Past</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="aboutContainers">
            <ProjectsCard
              imgSrc={carIconLogo}
              projectName="parkNow"
              desc="A React application bootstrapped with Chakra UI to display real-time data for 
            parking lots retrieved from a data.gov publicly listed API, integrated with Google Maps"
              githubSrc="https://github.com/kiblykat/parking-app-chakra"
              demoSrc="https://parknow.netlify.app/"
            />
            <ProjectsCard
              imgSrc={cardyBotLogo}
              projectName="steamBot"
              githubSrc="https://github.com/kiblykat/steamBot"
              desc="A steam bot that automatically manages 
            game currency within storage and auto-trades 
            with other steam users based on a pricelist pre-defined. The bot is
            configured to trade Counter-Strike cases, Steam Cards, Game 
            Backgrounds and emoticons at designated prices"
              demoSrc="https://steamcommunity.com/id/CardyBot/"
            />
            {/* <ProjectsCard imgSrc="" projectName="" githubSrc="" demoSrc="" /> */}
          </div>
        </div>
        {/* <a href="#contact">
          <img
            src={stockLogo.arrowImg}
            alt="Arrow icon"
            className="icon arrow"
          />
        </a> */}
      </section>
    </div>
  );
}
