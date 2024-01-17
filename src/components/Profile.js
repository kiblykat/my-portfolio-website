import React from "react";
import MyImage from "../assets/me-crop.jpg";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";
import Resume from "../assets/IzzatResume160124.pdf";
import "./Profile.css";

export default function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img className="profile-pic" src={MyImage} alt="Izzat dp" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hi, I'm</p>
        <h1 className="title">Izzat Fadzlon</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button
            onClick={() => window.open(Resume, "_blank")}
            className="btn btn-color-2"
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick="location.href='./#contact'"
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/izzat-fadzlon-75615b171/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="My LinkedIn profile" className="icon" />
          </a>
          <a
            href="https://github.com/kiblykat"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="My Github profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
