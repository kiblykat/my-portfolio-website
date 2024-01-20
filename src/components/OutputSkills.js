import React from "react";
import { skillsLogo } from "../assets/images";
import styles from "./OutputSkills.module.css";

export default function OutputSkills({ skills }) {
  return (
    <div className={styles.logoContainer}>
      {skills.html ? (
        <img className={styles.logo} src={skillsLogo.htmlImg} alt="skill" />
      ) : null}
      {skills.css ? (
        <img className={styles.logo} src={skillsLogo.cssImg} alt="skill" />
      ) : null}
      {skills.blender ? (
        <img className={styles.logo} src={skillsLogo.blenderImg} alt="skill" />
      ) : null}
      {skills.c ? (
        <img className={styles.logo} src={skillsLogo.cImg} alt="skill" />
      ) : null}
      {skills.cpp ? (
        <img className={styles.logo} src={skillsLogo.cppImg} alt="skill" />
      ) : null}
      {skills.js ? (
        <img className={styles.logo} src={skillsLogo.jsImg} alt="skill" />
      ) : null}
      {skills.react ? (
        <img className={styles.logo} src={skillsLogo.reactImg} alt="skill" />
      ) : null}
    </div>
  );
}
