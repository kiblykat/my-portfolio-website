import React from "react";
import MyImage from "../assets/me-crop.jpg";
import LinkedIn from "../assets/linkedin.png";
import Github from "../assets/github.png";
import "./Profile.css";

export default function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img className="profile-pic" src={MyImage} alt="Izzat dp" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Izzat Fadzlon</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onclick="window.open('./assets/resume-example.pdf')"
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onclick="location.href='./#contact'"
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a href="https://www.linkedin.com/in/izzat-fadzlon-75615b171/">
            <img src={LinkedIn} alt="My LinkedIn profile" className="icon" />
          </a>
          <a href="https://github.com/kiblykat">
            <img src={Github} alt="My Github profile" className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
