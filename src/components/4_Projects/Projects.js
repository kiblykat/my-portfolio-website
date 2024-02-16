import React from "react";
import ProjectsCard from "./ProjectsCard";
import parkWhereLogo from "../../assets/stock/parkWhereLogo.png";
import cardyBotLogo from "../../assets/stock/cardyBotLogo.png";
import { stockLogo } from "../../assets/images";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <ProjectsCard
              imgSrc={parkWhereLogo}
              projectName="parkWhere"
              desc="A barebones application retrieves real-time API for 
            parking lots from data.gov, integrated with Google Maps"
              githubSrc="https://github.com/kiblykat/ParkWhere"
              demoSrc="https://parkwhere.netlify.app/"
            />
            <ProjectsCard
              imgSrc={cardyBotLogo}
              projectName="steamBot"
              githubSrc="https://github.com/kiblykat/steamBot"
              desc="A steam bot that automatically manages 
            game currency within my backpack and auto-trades 
            with other steam users based on a pricelist pre-defined. The bot is
            configured to trade Counter-Strike cases, Steam Cards, Game 
            Backgrounds and emoticons at designated prices."
              demoSrc="https://steamcommunity.com/id/CardyBot/"
            />
            {/* <ProjectsCard imgSrc="" projectName="" githubSrc="" demoSrc="" /> */}
          </div>
        </div>
        <a href="#about">
        <img
          src={stockLogo.arrowImg}
          alt="Arrow icon"
          className="icon arrow"
        /> 
        </a>
      </section>
    </div>
  );
}
