import React from "react";
import MyImage from "../assets/me-crop.jpg";
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
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            className="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
  );
}
