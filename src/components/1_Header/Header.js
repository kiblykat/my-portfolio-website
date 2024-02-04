import { FaBars, FaTimes } from "react-icons";
import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isBurger, setIsBurger] = useState(false);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo"></div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="hamburger-menu">
          <div className="hamburger-icon-container">
            <div
              onClick={() => setIsBurger(!isBurger)}
              className="hamburger-icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {isBurger ? (
            <div className="menu-links">
              <ul>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
}
