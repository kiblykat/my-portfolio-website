import React from "react";
import { skillsLogo } from "../../assets/images";
import "./ExperienceOutputSkills.css";

export default function OutputSkills({ skills }) {
  return (
    <div className="logoContainer">
      {skills.html ? (
        <img className="logoFixHeight" src={skillsLogo.htmlImg} alt="skill" />
      ) : null}
      {skills.css ? (
        <img className="logoFixHeight" src={skillsLogo.cssImg} alt="skill" />
      ) : null}
      {skills.js ? (
        <img className="logoFixHeight" src={skillsLogo.jsImg} alt="skill" />
      ) : null}
      {skills.react ? (
        <img className="logoFixHeight" src={skillsLogo.reactImg} alt="skill" />
      ) : null}
      {skills.java ? (
        <img className="logoFixHeight" src={skillsLogo.javaImg} alt="skill" />
      ) : null}
      {skills.c ? (
        <img className="logoFixHeight" src={skillsLogo.cImg} alt="skill" />
      ) : null}
      {skills.cpp ? (
        <img className="logoFixHeight" src={skillsLogo.cppImg} alt="skill" />
      ) : null}
      {skills.googletest ? (
        <img
          className="logoFixHeight"
          src={skillsLogo.googletestImg}
          alt="skill"
        />
      ) : null}
      {skills.solidworks ? (
        <img
          className="logoFixWidth"
          src={skillsLogo.solidworksImg}
          alt="skill"
        />
      ) : null}
      {skills.ros ? (
        <img className="logoFixWidth" src={skillsLogo.rosImg} alt="skill" />
      ) : null}
      {skills.blender ? (
        <img
          className="logoFixHeight"
          src={skillsLogo.blenderImg}
          alt="skill"
        />
      ) : null}
    </div>
  );
}
