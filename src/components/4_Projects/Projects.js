import React from "react";
import ProjectsCard from "./ProjectsCard";
import parkWhereLogo from "../../assets/stock/parkWhereLogo.png";
import carIconLogo from "../../assets/carIcon.jfif";
import cardyBotLogo from "../../assets/stock/cardyBotLogo.png";
import ScrappyBot from "../../assets/ScrappyBot.jpg";

import { stockLogo } from "../../assets/images";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <p className="section__text__p1">Browse My Past</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <ProjectsCard
              imgSrc={carIconLogo}
              projectName="parkNow"
              desc="(2024) An application bootstrapped with Chakra UI to display real-time data for 
            parking lots retrieved from a data.gov publicly listed API, integrated with Google Maps"
              githubSrc="https://github.com/kiblykat/parking-app-chakra"
              demoSrc="https://parknow.netlify.app/"
            />
            <ProjectsCard
              imgSrc={cardyBotLogo}
              projectName="steamBot"
              githubSrc="https://github.com/kiblykat/steamBot"
              desc="(2023)A steam bot that automatically manages 
            game currency and auto-trades with other users based 
            on a pricelist pre-defined. The bot is configured to 
            trade different game items at designated prices"
              demoSrc="https://steamcommunity.com/id/CardyBot/"
            />
            <ProjectsCard
              imgSrc={ScrappyBot}
              projectName="MA4012 ScrappyBot"
              githubSrc="https://github.com/kiblykat/MA4012-competition"
              desc="(2022) A physical robot built from scratch for our MA4012 module, where I was assigned 
              lead software developer. The bot is multithreaded, being able to detect boundaries of 
              play area, avoid opponents, collect tennis balls and finally deliver them to the collection point"
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
