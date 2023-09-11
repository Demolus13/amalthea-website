import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const Toggle = () => {
    setActive(!isActive);
  };
  if (isActive) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
  const Links = document.getElementsByClassName("linkEventListener");
  for (let index = 0; index < Links.length; index++) {
    const link = Links[index];
    link.addEventListener("click", () => {
      Toggle();
    });
  }

  return (
    <div id="navbar" className="poppins">
      <div className="amalthea">
        <Link to="/">AMALTHEA'23</Link>
      </div>
      <div className="nav-items">
        <div className="item"><Link to="/events-23">EVENTS</Link></div>
        <div className="item"><Link to="/conclave-23">CONCALVE</Link></div>
        <div className="item"><Link to="/symposium-23">SYMPOSIUM</Link></div>
        <div className="item"><Link to="/tech-expo-23">TECH EXPO</Link></div>
        <div className="item"><Link to="/sponsors-23">SPONSORS</Link></div>
        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`ham-menu ${isActive ? "active" : ""}`}>
          <div className="ham-container">
            <li className="ham-item">
              <Link to="/" className="ham-link linkEventListener">
                Home
              </Link>
            </li>
            <li className="ham-item">
              <Link to="/events-23" className="ham-link linkEventListener">Events</Link>
            </li>
            <li className="ham-item">
              <Link to="/conclave-23" className="ham-link linkEventListener">Conclave</Link>
            </li>
            <li className="ham-item">
              <Link to="/symposium-23" className="ham-link linkEventListener">Symposium</Link>
            </li>
            <ul>
              <li className="subham-item">
                <Link to="/women-in-tech-23" className="ham-link linkEventListener">Women in Tech</Link>
              </li>
            </ul>
            <li className="ham-item">
              <Link to="/tech-expo-23" className="ham-link linkEventListener">Tech Expo</Link>
            </li>
            <li className="ham-item">
              <Link to="/sponsors-23" className="ham-link linkEventListener">Sponsors</Link>
            </li>
            <ul>
              <li className="subham-item">
                <Link to="/about-23" className="ham-link linkEventListener">About Us</Link>
              </li>
              <li className="subham-item">
                <Link to="/team-23" className="ham-link linkEventListener">Our Team</Link>
              </li>
              <li className="subham-item">
                <Link to="/how-to-reach-23" className="ham-link linkEventListener">How to reach</Link>
              </li>
              <li className="subham-item">
                <Link to="/gallery-23" className="ham-link linkEventListener">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={`backdrop ${isActive ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
