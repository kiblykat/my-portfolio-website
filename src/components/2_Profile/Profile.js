import React from "react";
import MyImage from "../../assets/me-crop.jpg";
// import Resume from "../../assets/resume/IzzatResume200224.pdf";
import Resume from "../../assets/resume/18-5-24-resume.pdf";
import "./Profile.css";
import { stockLogo } from "../../assets/images";
import contiLogo from "../../assets/stock/contiLogo.png";

export default function Profile() {
  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img className="profile-pic" src={MyImage} alt="Izzat dp" />
        </div>
        <div className="section__text">
          <h1 className="title">Izzat Fadzlon</h1>
          <p className="section__text__p2">
            Software Developer
            <p
              style={{
                color: "orange",
                textAlign: "center",
                textWrap: "nowrap",
              }}
            >
              Continental
              <img
                className="icon"
                src={contiLogo}
                alt="contiLogo"
                style={{ margin: 0 }}
              ></img>
            </p>
          </p>
          <div className="btn-container">
            <button
              onClick={() => window.open(Resume, "_blank")}
              className="gb gb-bordered hover-slide hover-fill gb-rounded"
              id="gb7"
            >
              Download CV
            </button>
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/izzat-fadzlon-75615b171/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="icon rotate-y"
                src={stockLogo.LinkedIn}
                alt="My LinkedIn profile"
              />
            </a>
            <a
              href="https://github.com/kiblykat"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={stockLogo.Github}
                alt="My Github profile"
                className="icon rotate-y"
              />
            </a>
          </div>
        </div>
        <a
          href="#experience"
          style={{ position: "absolute", right: "0%", bottom: "0rem" }}
        >
          <img
            src={stockLogo.arrowImg}
            alt="Arrow icon"
            className="icon arrow"
          />
        </a>
      </section>
    </div>
  );
}
