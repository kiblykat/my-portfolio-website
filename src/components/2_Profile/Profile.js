import React from "react";
import MyImage from "../../assets/me-crop.jpg";
import Resume from "../../assets/resume/IzzatResume200224.pdf";
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
          <p className="section__text__p1">Hi, I'm</p>
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
            {/* <button
            className="btn btn-color-1"
            onClick="location.href='./#contact'"
          >
            Contact Info
          </button> */}
          </div>
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/izzat-fadzlon-75615b171/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={stockLogo.LinkedIn}
                alt="My LinkedIn profile"
                className="icon"
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
                className="icon"
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
