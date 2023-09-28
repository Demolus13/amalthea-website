import React, { useEffect } from "react";
import "../styles/Home.css";
import { home } from "../utilities/HomeData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [windowSize, setWindowSize] = useState({
    innerWidth: window.screen.width,
    innerHeight: window.screen.height,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", handleResize);
    const H = window.innerHeight;
    window.scrollTo(0, 0);

    const body = document.querySelector(".home-body");
    const circle = document.querySelector(".circle");
    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const L3 = document.querySelectorAll(".L3");
    const aml = document.getElementById("aml");
    const waw = document.getElementById("waw");
    const waw_cont = document.getElementById("waw-container");
    const span = document.querySelector(".waw-span");
    const ot = document.getElementById("ot");
    const tt = document.querySelectorAll(".title");
    const event_unit = document.querySelectorAll(".event-unit");
    body.style.height = `${(12.5 + 2 * home.length) * H}px`;

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < 0.5 * H) {
        const s1 = 1 - scroll / H;
        const s2 = 1 - scroll / (1.25 * H);
        const s3 = 1 - scroll / (0.35 * H);
        span.style.height = "100%";

        L1.forEach(l => {
          l.style.transform = `scale(${s1})`;
        });
        L2.forEach(l => {
          l.style.transform = `scale(${s2})`;
        });
        aml.style.opacity = s3;
        waw.style.opacity = 1 - s3;
      } else {
        aml.style.opacity = 0;
        waw.style.opacity = 1;
        span.style.height = "0%";
        L1.forEach(l => {
          l.style.transform = `scale(0.5)`;
        });
        L2.forEach(l => {
          l.style.transform = `scale(0.6)`;
        });
      }

      if (scroll > 0.5 * H && scroll < 2 * H) {
        L3.forEach(l => {
          l.classList.add("active");
        });
      } else {
        L3.forEach(l => {
          l.classList.remove("active");
        });
      }

      if (scroll > 2.5 * H) {
        waw_cont.style.display = "none";
      } else {
        waw_cont.style.display = "flex";
      }

      if (scroll < 2 * H) {
        circle.style.backgroundColor = "rgb(23, 0, 54)";
        circle.style.transform = "scale(3)";
      }

      if (scroll > 2 * H && scroll < 6 * H) {
        const s4 = 3 - (scroll - 2 * H) / H;
        const r = 23 + (scroll - 2 * H) * 0.2;
        const g = 0 + (scroll - 2 * H) * 0.2;
        const b = 54 + (scroll - 2 * H) * 0.2;
        circle.style.transform = s4 < 0 ? "scale(0)" : `scale(${s4})`;
        circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        ot.style.opacity = 1;
      }

      if (6 * H < scroll) {
        circle.style.transform = "scale(0)";
      }

      if (scroll > 6 * H && scroll < 12 * H) {
        ot.style.opacity = 0;
        const i = Math.floor((scroll - 6 * H) / (1.5 * H));
        if (i < 4) {
          tt[i].classList.remove("deactive");
          tt[i].classList.add("active");
        }
        if (i > 0) {
          tt[i - 1].classList.add("deactive");
          tt[i - 1].classList.remove("active");
        }
        if (i < 3) {
          tt[i + 1].classList.add("deactive");
          tt[i + 1].classList.remove("active");
        }
      } else {
        tt.forEach(tt_i => {
          tt_i.classList.add("deactive");
          tt_i.classList.remove("active");
        });
      }

      if (11.5 * H < scroll) {
        const j = Math.floor((scroll - 11.5 * H) / (2 * H));
        const top = (1 - ((scroll - 11.5 * H) % (2 * H)) / (2 * H)) * 120;
        if (-1 < j && j < home.length) {
          event_unit[j].style.top = `${top}vh`;
          event_unit[j].style.bottom = `-${top}vh`;
        }
        for (let i = 0; i < j && j < home.length; i++) {
          const element = event_unit[i];
          element.style.top = "0vh";
          element.style.bottom = "0vh";
        }
        for (let i = j + 1; i < home.length; i++) {
          const element = event_unit[i];
          element.style.top = "120vh";
          element.style.bottom = "-120vh";
        }
      }

      if (scroll < 11.5 * H) {
        event_unit.forEach(eu => {
          eu.style.top = "120vh";
          eu.style.bottom = "-120vh";
        });
      }

      if ((11.5 + 2*home.length) * H < scroll) {
        event_unit.forEach(eu => {
          eu.style.top = "0vh";
          eu.style.bottom = "0vh";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowSize]);
  return (
    <div className="home-body">
      <div className="container">
        <div className="circle"></div>
      </div>
      <div className="center" style={{ zIndex: 1 }}>
        <h1 id="aml" className="oswald">
          AMALTHEA
        </h1>
      </div>
      <img className="aml-bg-1 L1" style={{ zIndex: 3 }} src="./Images/AML-BG-1.webp" alt="" />
      <img className="aml-bg-2 L1" style={{ zIndex: 3 }} src="./Images/AML-BG-2.webp" alt="" />
      <img className="aml-bg-3 L2" src="./Images/AML-BG-3.webp" alt="" />
      <img className="aml-bg-4 L2" src="./Images/AML-BG-4.webp" alt="" />
      <img className="aml-bg-5" src="./Images/AML-BG-5.webp" alt="" />
      <img className="aml-bg-8 L2" style={{ zIndex: 4 }} src="./Images/AML-BG-6.webp" alt="" />
      <img className="aml-bg-6" src="./Images/AML-BG-5.webp" alt="" />
      <img className="aml-bg-7 L2" style={{ zIndex: 4 }} src="./Images/AML-BG-6.webp" alt="" />
      <img className="drone L3" src="./Images/Drone.webp" alt="" />
      <img className="robo L3" src="./Images/Robo.webp" alt="" />
      <div id="waw-container">
        <h2 id="waw" className="oswald">
          WHO ARE WE?
        </h2>
        <div className="waw-text">
          <span className="waw-span"></span>
          <p className="montserrat">
            Amalthea is India's first student-run Annual Technical Summit
            conducted by IIT Gandhinagar. Since its inception in 2010, Amalthea
            has been pushing boundaries and setting high standards. With a
            plethora of exciting events, conclaves and a symposium coupled with
            a tech expo, we are back offline and ready to go beyond the
            impossible and blow away your minds. <br />
            <br />
            Amalthea believes in fostering innovation and creative thinking by
            providing a forum for people to exchange their ideas and thoughts.
            We aim to serve as a bridge between industry and academia in order
            to connect and discuss pivotal technological prospects. Amalthea
            aspires to encourage young minds to ponder upon current issues and
            seek innovative and feasible solutions.
          </p>
        </div>
      </div>
      <div id="ot" className="center oswald" style={{ zIndex: -2 }}>
        <h2>OUR THEME</h2>
      </div>
      <div className="title center oswald" style={{ zIndex: -3 }}>
        <h2>SYNCHRONIZING KNOWLEDGE</h2>
      </div>
      <div className="title center oswald" style={{ zIndex: -3 }}>
        <h2>CONCLAVE & SYMPOSIUM</h2>
      </div>
      <div className="title center oswald" style={{ zIndex: -3 }}>
        <h2>TECH EXPO</h2>
      </div>
      <div className="title center oswald" style={{ zIndex: -3 }}>
        <h2>THE LOCAL EVENTS</h2>
      </div>
      <div>
        {home.map((card, index) => (
          <div className="event-unit" key={index}>
            <div
              className="event"
              style={{
                backgroundImage: `url(${card.cardBg})`,
                border: card.cardBorder,
                boxShadow: card.cardBoxShadow,
              }}>
              <div className="details"
                style={{
                  display: card.name === "COMING SOON" ? "none" : "block",
                }}>
                <h2 className="event-name oswald">{card.name}</h2>
                <div className="actions-even-name">
                  <Link className="apply_rule montserrat"
                    to="/events-23"
                    style={{
                      backgroundColor: card.buttonBgColor,
                      color: card.textColor,
                    }}><h5>More Events</h5></Link>
                  <h5 className="apply_rule montserrat"
                    onClick={() => {
                      window.open(card.rulebookPath);
                    }}
                    style={{
                      backgroundColor: card.buttonBgColor,
                      color: card.textColor,
                    }}>RuleBook</h5>
                </div>
              </div>
              <h3 className="date oswald"
                style={{
                  color: card.dateColor,
                  display: card.name === "COMING SOON" ? "none" : "block",
                }}>
                {card.date}-{card.name === "STOCKRUSH" ? "Oct" : "Nov"} <br /> 2023
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
