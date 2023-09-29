import React, { useEffect } from "react";
import "../styles/About.css";
import { CoordData, CoreData, TechTeamData } from "../utilities/AboutData";

export default function About() {
  useEffect(() => {
    const H = window.innerHeight;
    window.scrollTo(0, 0);

    const body = document.querySelector(".about-body");
    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const aml = document.getElementById("aml");
    const content = document.getElementById("speakers-content");
    const h = content.offsetHeight;
    body.style.height = `${H + h}px`;

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < 0.7 * H) {
        const s1 = 1 - scroll / (0.5 * H);
        const s2 = 1 - scroll / (0.65 * H);

        L1.forEach(l => {
          l.style.transform = `scale(${s1})`;
        });
        L2.forEach(l => {
          l.style.transform = `scale(${s2})`;
        });
        aml.style.opacity = s2;
        content.style.opacity = 1 - s2;
        content.style.top = `${0}px`;
      } else {
        aml.style.opacity = 0;
        content.style.opacity = 1;
        const top = -scroll + H;
        L1.forEach(l => {
          l.style.transform = "scale(0)";
        });
        L2.forEach(l => {
          l.style.transform = "scale(0)";
        });
        if (top < 0) {
          content.style.top = `${top}px`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="about">
      <div className="about-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            ABOUT US
          </h1>
        </div>
        <img className="aml-bg-1 L1" src="./Images/AML-BG-1.webp" alt="" />
        <img className="aml-bg-2 L1" src="./Images/AML-BG-2.webp" alt="" />
        <img className="aml-bg-3 L2" src="./Images/AML-BG-3.webp" alt="" />
        <img className="aml-bg-4 L2" src="./Images/AML-BG-4.webp" alt="" />
        <img className="aml-bg-5" src="./Images/AML-BG-5.webp" alt="" />
        <img className="aml-bg-8 L2" src="./Images/AML-BG-6.webp" alt="" />
        <img className="aml-bg-6" src="./Images/AML-BG-5.webp" alt="" />
        <img className="aml-bg-7 L2" src="./Images/AML-BG-6.webp" alt="" />
        <div id="speakers-content">
          <h1 className="oswald">CORES</h1>
          <div>
            {CoreData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="oswald">COORDINATORS</h1>
          <div>
            {CoordData.map((about, index) => {
              return <Card key={index} about={about} />;
            })}
          </div>
          <h1 className="oswald">TECH TEAM</h1>
          <div>
            {TechTeamData.map((about, index) => {
              return <Card key={index} about={about} github={true} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ about, github = false }) => {
  return (
    <div className="about-card">
      <img src={about.imgSrc} alt={about.name} />

      <h3 className="poppins">{about.name}</h3>

      <span className="montserrat" >{about.designation}</span>

      <span className="montserrat" style={{ fontSize: "0.85rem" }}>
        {about.number}
      </span>

      <div className="about-links-container">
        <a href={about.linkedin} rel="noreferrer" target="_blank">
          <img
            alt="linkedIn profile link"
            src="/Images/linkedin.svg"
            className="about-links"
          />
        </a>
        <a href={about.insta} rel="noreferrer" target="_blank">
          <img
            alt="instagram profile link"
            src="/Images/instagram.svg"
            className="about-links"
          />
        </a>
        {github === true ? (
          <a href={about.github} rel="noreferrer" target="_blank">
            <img
              alt="github profile link"
              src="/Images/github.svg"
              className="about-links"
            />
          </a>
        ) : (
          <a href={`mailto:${about.email}`} rel="noreferrer" target="_blank">
            <img
              alt="mail id"
              src="/Images/envelope.svg"
              className="about-links"
            />
          </a>
        )}
      </div>
    </div>
  );
};
