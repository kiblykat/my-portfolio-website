import React from "react";
import ExperienceCard from "./ExperienceCard";
import { stockLogo } from "../../assets/images";
import "./Experience.css";

const skillSet = {
  c: false,
  cpp: false,
  blender: false,
  js: false,
  react: false,
  ros: false,
  solidworks: false,
  googletest: false,
};

//UPDATE SKILLS HERE
const NTUSkills = { ...skillSet, cpp: true, c: true, solidworks: true };
const SCTPSkills = {
  ...skillSet,
  html: true,
  css: true,
  js: true,
  react: true,
  java: true,
};
const contiSkills = {
  ...skillSet,
  cpp: true,
  blender: true,
  c: true,
  googletest: true,
};
const transformaSkills = { ...skillSet, cpp: true, c: true, ros: true };

export default function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1"></p>
      <h1 className="title">Experience</h1>
      <div className="about-details-container">
        <div className="about-containers">
          <ExperienceCard
            src={stockLogo.edImg}
            alt="Education icon"
            header="NTU Mech. Eng. (Robotics and Mechatronics)"
            isCurrent={false}
            line1="Grade: Distinction"
            line2="Aug 2018-Aug 2022"
            skills={NTUSkills}
          />
          <ExperienceCard
            src={stockLogo.workImg}
            alt="Experience icon"
            header="Transforma Robotics (SWE)"
            isCurrent={false}
            line1=" "
            line2="May 2021 - Sept 2021"
            skills={transformaSkills}
          />
          <ExperienceCard
            src={stockLogo.edImg}
            alt="Education icon"
            header="NTU SCTP (Software Engineering)"
            isCurrent={true}
            line1=" "
            line2="Nov 2023 - May 2024"
            skills={SCTPSkills}
          />
          <ExperienceCard
            src={stockLogo.workImg}
            alt="Experience icon"
            header="Continental Automotive (SWE)"
            isCurrent={true}
            line1="2 years"
            line2="Jul 2022 - Current"
            skills={contiSkills}
          />
        </div>
        <div className="text-container">
          <p>
            Having a background in Mechanical Engineering, my passion lies in
            creating practical solutions to real world problems.
            <br />
            <br />
            <hr />
            <br />I am actively looking for avenues to improve myself in terms
            of hard skills needed within the software development industry. 😁
          </p>
        </div>
      </div>
      <a
        href="#projects"
        style={{ position: "absolute", right: "0%", bottom: "0rem" }}
      >
        <img src={stockLogo.arrowImg} alt="Arrow icon" className="icon" />
      </a>
    </section>
  );
}
