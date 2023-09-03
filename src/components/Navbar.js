import React, { useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [isActive, setActive] = useState(false);
  const Toggle = () => {
    setActive(!isActive)
  }
  if (isActive) {
    document.body.style.overflowY = "hidden";
  }
  else {
    document.body.style.overflowY = "scroll";
  }

  return (
    <div id="navbar" className="poppins">
      <div className="amalthea"><a href="/">AMALTHEA'23</a></div>
      <div className="nav-items">
        <div className="item"><a href="/events">EVENTS</a></div>
        <div className="item"><a href="/conclave">CONCALVE</a></div>
        <div className="item"><a href="/symposium">SYMPOSIUM</a></div>
        <div className="item"><a href="/tech-expo">TECH EXPO</a></div>
        <div className="item"><a href="/sponsors">SPONSORS</a></div>
        <div className={`hamburger ${isActive ? "active" : ""}`} onClick={Toggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <div className={`ham-menu ${isActive ? "active" : ""}`}>
          <div className="ham-container">
            <li className="ham-item">
              <a href="/" className="ham-link">Home</a>
            </li>
            <li className="ham-item">
              <a href="/events" className="ham-link">Events</a>
            </li>
            <li className="ham-item">
              <a href="/conclave" className="ham-link">Conclave</a>
            </li>
            <li className="ham-item">
              <a href="/symposium" className="ham-link">Symposium</a>
            </li>
            <li className="ham-item">
              <a href="/tech-expo" className="ham-link">Tech Expo</a>
            </li>
            <li className="ham-item">
              <a href="/sponsors" className="ham-link">Sponsors</a>
            </li>
            <ul>
              <li className="subham-item">
                <a href="/about" className="ham-link">About Us</a>
              </li>
              <li className="subham-item">
                <a href="/team" className="ham-link">Our Team</a>
              </li>
              <li className="subham-item">
                <a href="/how-to-reach" className="ham-link">How to reach</a>
              </li>
              <li className="subham-item">
                <a href="/gallery" className="ham-link">Gallery</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`backdrop ${isActive ? "active" : ""}`}></div>
      </div>
    </div>
  );
}
