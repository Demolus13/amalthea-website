import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div id="navbar" className="poppins">
      <div className="amalthea">
        <a href="/">AMALTHEA'23</a>
      </div>
      <div className="nav-items">
        <div className="item">
          <a href="/events">EVENTS</a>
        </div>
        <div className="item">
          <a href="/conclave">CONCLAVE</a>
        </div>
        <div className="item">
          <a href="/symposium">SYMPOSIUM</a>
        </div>
        <div className="item">
          <a href="/tech-expo">TECH EXPO</a>
        </div>
        <div className="item">
          <a href="/sponsors">SPONSORS</a>
        </div>
      </div>
    </div>
  );
}
