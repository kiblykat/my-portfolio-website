import React from "react";
import "./About.css";
import Card from "./Card";
import { stockLogo } from "../assets/images";

const skillSet = {
  c: false,
  cpp: false,
  blender: false,
  js: false,
  react: false,
};
//Update skills here
const NTUSkills = { ...skillSet, cpp: true, c: true };
const SCTPSkills = { ...skillSet, js: true, react: true };
const contiSkills = { ...skillSet, cpp: true, blender: true };

console.log(NTUSkills);

export default function About() {
  return (
    <div>
      {" "}
      <section id="about">
        <p class="section__text__p1"></p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
          <div class="about-details-container">
            <div class="about-containers">
              <Card
                src={stockLogo.edImg}
                alt="Education icon"
                className="icon"
                header="NTU Mech. Eng. (Robotics and Mechatronics)"
                isCurrent={false}
                line1=" Grade: Distinction"
                line2="Aug 2018-Aug 2022"
                skills={NTUSkills}
              />
              <Card
                src={stockLogo.edImg}
                alt="Education icon"
                className="icon"
                header="NTU SCTP (Software Engineering)"
                isCurrent={true}
                line1=""
                line2="Nov 2023 - May 2024"
                skills={SCTPSkills}
              />

              <Card
                src={stockLogo.workImg}
                alt="Experience icon"
                className="icon"
                header="Continental Automotive (SWE)"
                isCurrent={true}
                line1="2 years"
                line2="Jul 2022 - Current"
                skills={contiSkills}
              />
            </div>
            <div class="text-container">
              <p>
                Having a background in Mechanical Engineering, my passion lies
                in creating practical solutions to real world problems. Although
                I have not chosen to pursue this field, I am still a problem
                solver at heart. As a self-directed learner, I am actively
                looking for avenues to improve myself in terms of hard skills
                needed within the software development industry.
                <br />
                <br />
                <hr />
                <br />I enjoy creating genuine connections with people,
                regardless of age or background. I strongly feel there is always
                something you can learn from someone else as no two life
                experiences are identical. However, while usually associated as
                being amiable and having a jovial personality, there is no
                compromise when it comes to serious work.
              </p>
            </div>
          </div>
        </div>
        <img
          src={stockLogo.arrowImg}
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#experience'"
        />
      </section>
    </div>
  );
}
