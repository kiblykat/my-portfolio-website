import React from "react";
import { stockLogo } from "../assets/images";
import styles from "./Card.module.css";
import OutputSkills from "./OutputSkills";

export default function Card({
  src,
  alt,
  className,
  line1,
  line2,
  isCurrent,
  header,
  skills,
}) {
  return (
    <div className="details-container">
      <img src={src} alt={alt} className={className} />
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
