import React from "react";
import "./About.css";
import AboutCard from "./AboutCard";
import { stockLogo } from "../assets/images";

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

export default function About() {
  return (
    <section id="about">
      <p class="section__text__p1"></p>
      <h1 class="title">About Me</h1>
      <div class="about-details-container">
        <div class="about-containers">
          <AboutCard
            src={stockLogo.edImg}
            alt="Education icon"
            header="NTU Mech. Eng. (Robotics and Mechatronics)"
            isCurrent={false}
            line1=" Grade: Distinction"
            line2="Aug 2018-Aug 2022"
            skills={NTUSkills}
          />
          <AboutCard
            src={stockLogo.workImg}
            alt="Experience icon"
            header="Transforma Robotics (SWE)"
            isCurrent={false}
            line1=""
            line2="May 2021 - Sept 2021"
            skills={transformaSkills}
          />
          <AboutCard
            src={stockLogo.edImg}
            alt="Education icon"
            header="NTU SCTP (Software Engineering)"
            isCurrent={true}
            line1=""
            line2="Nov 2023 - May 2024"
            skills={SCTPSkills}
          />
          <AboutCard
            src={stockLogo.workImg}
            alt="Experience icon"
            header="Continental Automotive (SWE)"
            isCurrent={true}
            line1="2 years"
            line2="Jul 2022 - Current"
            skills={contiSkills}
          />
        </div>
        <div class="text-container">
          <p>
            Having a background in Mechanical Engineering, my passion lies in
            creating practical solutions to real world problems. As a
            self-directed learner, I am actively looking for avenues to improve
            myself in terms of hard skills needed within the software
            development industry.
            <br />
            <br />
            <hr />
            <br />I enjoy creating genuine connections with people, regardless
            of age or background. I strongly feel there is always something you
            can learn from someone else as no two life experiences are
            identical.
          </p>
        </div>
      </div>
      <img
        src={stockLogo.arrowImg}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>
  );
}
