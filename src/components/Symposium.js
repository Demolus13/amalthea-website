import React, { useEffect } from "react";
import "../styles/Symposium.css";
import { symposiumData } from "../utilities/SymposiumData";

export default function Conclave() {

  useEffect(() => {
    const H = window.innerHeight;
    window.scrollTo(0, 0);
    const body = document.querySelector(".symposium-body");
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
    <div id="symposium">
      <div className="symposium-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            SYMPOSIUM
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
          <h1
            style={{ margin: "25px", color: "white", fontSize: "3rem" }}
            className="oswald">
            SPEAKERS
          </h1>
          <div className="SpeakerContainer" style={{ width: "100%" }}>
            <div className="row team-card">
              {symposiumData.map(speaker => (
                <SpeakerCard data={speaker} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpeakerCard = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 symposium-card">
      <div className="our-team" style={{ borderRadius: "10px" }}>
        <div className="picture">
          <img className="img-fluid" src={data.imgSrc} alt="profile pic" />
        </div>
        <div className="team-content">
          <h2 className="name oswald">{data.name}</h2>
          <p className="title poppins" style={{textAlign: "center"}}>{data.title}</p>
          <p className="title poppins" style={{display: data.achievement === "" ? "none" : "block"}}><strong>Achievements:</strong> <br /> {data.achievement}</p>
          <p className="title poppins" style={{display: data.edu === "" ? "none" : "block"}}><strong>Education:</strong> <br /> {data.edu}</p>
        </div>
        <ul className="social">
          <li>
            <a
              href="/symposium-23" target="_blank" rel="noreferrer">
              <img
                alt="linkedIn profile link"
                src="/Images/linkedin.svg"
                className="about-links"
              />
            </a>
          </li>
          <li>
            <a
              href="/symposium-23" target="_blank" rel="noreferrer">
              <img
                alt="instagram profile link"
                src="/Images/instagram.svg"
                className="about-links"
              />
            </a>
          </li>
          <li>
            <a
              href={data.web === "" ? "/symposium-23" : data.web} rel="noreferrer" target="_blank">
                <img
                alt="website profile link"
                src="/Images/world-wide-web.webp"
                className="about-links"
                style={{
                  filter: 'invert(100%)'
                }}
              />
              </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
