import React from "react";
import { skillsLogo } from "../assets/images";
import styles from "./OutputSkills.module.css";

export default function OutputSkills({ skills }) {
  return (
    <div className={styles.logoContainer}>
      {skills.blender ? (
        <img className={styles.logo} src={skillsLogo.blenderImg}></img>
      ) : null}{" "}
      {skills.c ? (
        <img className={styles.logo} src={skillsLogo.cImg}></img>
      ) : null}
      {skills.cpp ? (
        <img className={styles.logo} src={skillsLogo.cppImg}></img>
      ) : null}
      {skills.js ? (
        <img className={styles.logo} src={skillsLogo.jsImg}></img>
      ) : null}
      {skills.react ? (
        <img className={styles.logo} src={skillsLogo.reactImg}></img>
      ) : null}
    </div>
  );
}
