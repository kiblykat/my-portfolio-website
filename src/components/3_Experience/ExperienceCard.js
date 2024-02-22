import React from "react";
import { stockLogo } from "../../assets/images";
import "./ExperienceCard.css";
import OutputSkills from "./ExperienceOutputSkills";

export default function ExperienceCard({
  src,
  alt,
  line1,
  line2,
  isCurrent,
  header,
  skills,
}) {
  return (
    <div className="detailsContainer">
      <img src={src} alt={alt} className="icon" />
      <h3 className="textLoadingContainer">
        {header}
        {isCurrent ? (
          <img className="loading" src={stockLogo.blackDot} alt="ongoing" />
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
