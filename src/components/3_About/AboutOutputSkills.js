import React from "react";
import { skillsLogo } from "../../assets/images";
import styles from "./AboutOutputSkills.module.css";

export default function OutputSkills({ skills }) {
  return (
    <div className={styles.logoContainer}>
      {skills.html ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.htmlImg}
          alt="skill"
        />
      ) : null}
      {skills.css ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.cssImg}
          alt="skill"
        />
      ) : null}
      {skills.js ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.jsImg}
          alt="skill"
        />
      ) : null}
      {skills.react ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.reactImg}
          alt="skill"
        />
      ) : null}
      {skills.java ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.javaImg}
          alt="skill"
        />
      ) : null}
      {skills.c ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.cImg}
          alt="skill"
        />
      ) : null}
      {skills.cpp ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.cppImg}
          alt="skill"
        />
      ) : null}
      {skills.googletest ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.googletestImg}
          alt="skill"
        />
      ) : null}
      {skills.solidworks ? (
        <img
          className={styles.logoFixWidth}
          src={skillsLogo.solidworksImg}
          alt="skill"
        />
      ) : null}
      {skills.ros ? (
        <img
          className={styles.logoFixWidth}
          src={skillsLogo.rosImg}
          alt="skill"
        />
      ) : null}
      {skills.blender ? (
        <img
          className={styles.logoFixHeight}
          src={skillsLogo.blenderImg}
          alt="skill"
        />
      ) : null}
    </div>
  );
}
