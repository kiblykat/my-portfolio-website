import React from "react";
import { stockLogo } from "../../assets/images";
import styles from "./AboutCard.module.css";
import OutputSkills from "./AboutOutputSkills";

export default function AboutCard({
  src,
  alt,
  line1,
  line2,
  isCurrent,
  header,
  skills,
}) {
  return (
    <div className="details-container">
      <img src={src} alt={alt} className="icon" />
      <h3 className={styles.textLoadingContainer}>
        {header}
        {isCurrent ? (
          <img
            className={styles.loading}
            src={stockLogo.blackDot}
            alt="ongoing"
          />
        ) : null}
      </h3>
      <p>
        {line1} <br />
        {line2}
      </p>
      <OutputSkills skills={skills} />
    </div>
  );
}
