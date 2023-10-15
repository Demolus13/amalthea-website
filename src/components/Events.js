import React, { useEffect, useState } from "react";
import "../styles/Events.css";
import { events } from "../utilities/EventsData";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const H = window.innerHeight;
    const body = document.querySelector(".events-body");
    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const aml = document.getElementById("aml");
    const content = document.getElementById("events-content");
    const eventCards = document.querySelectorAll(".event-card-holder");
    const event_info = document.getElementsByClassName("events-info");
    const iframes = document.getElementsByClassName("content-iframe");
    body.style.height = `${(1.15 + 2 * events.length) * H}px`;

    if (event_info[0].clientHeight >= window.innerHeight * 0.2) {
      console.log("Called");
      for (let i = 0; i < iframes.length; i++) {
        const element = iframes[i];
        element.style.left = "2.5%";
      }
    }
    const handleScroll = () => {
      const scroll = window.scrollY;
      eventCards[0].style.top = "0vh";
      eventCards[0].style.bottom = "0vh";

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
      } else {
        aml.style.opacity = 0;
        content.style.opacity = 1;
        L1.forEach(l => {
          l.style.transform = "scale(0)";
        });
        L2.forEach(l => {
          l.style.transform = "scale(0)";
        });
      }
      if (0.9 * H < scroll) {
        const j = Math.floor((scroll - 0.9 * H) / (2 * H)) + 1;
        const top = (1 - ((scroll - 0.9 * H) % (2 * H)) / (2 * H)) * 120;
        if (0 < j && j < events.length) {
          eventCards[j].style.top = `${top}vh`;
          eventCards[j].style.bottom = `-${top}vh`;
        }
        for (let i = 1; i < j && j < events.length; i++) {
          eventCards[i].style.top = "0vh";
          eventCards[i].style.bottom = "0vh";
        }
        for (let i = j + 1; i < events.length; i++) {
          eventCards[i].style.top = "120vh";
          eventCards[i].style.bottom = "-120vh";
        }
      }
      if (scroll < 0.9 * H) {
        for (let i = 1; i < events.length; i++) {
          eventCards[i].style.top = "120vh";
          eventCards[i].style.bottom = "-120vh";
        }
      }
      if ((0.9 + 2 * events.length) * H < scroll) {
        eventCards.forEach(ec => {
          ec.style.top = "0vh";
          ec.style.bottom = "0vh";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="events">
      <div className="events-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            EVENTS
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
        <div id="events-content">
          {events.map((event, index) => {
            event["index"] = index;
            return <EventCard key={event.name} {...event} />;
          })}
        </div>
      </div>
    </div>
  );
}

const EventVisualContent = event => {
  return (
    <div className={`contxents-visual`}>
      {event.contents.map((content, index) => {
        return (
          <video
            className={`content-iframe content-iframe-${index} ${index % 2 === 0 ? "disable-left" : "disable-right"
              } contents-for-${event.name}`}
            id={`content-iframe-${index}-${event.name}`}
            height="40%"
            width="40%"
            src={content.src}
            title={content.desc}
            allow="fullscreen"
            controls="true"
            autoStart="false"></video>
        );
      })}
    </div>
  );
};

const EventCard = event => {
  const isMobile = window.screen.width < 500 ? true : false;
  const [open, setOpen] = useState(false);

  function handleClick(event_index) {
    const event_info = document.getElementById(`events-info-${event_index}`);
    const desc_info = document.getElementById(
      `events-text-holder-${event_index}`
    );
    for (let index = 0; index < event.contents.length; index++) {
      const iframe = document.getElementById(
        `content-iframe-${index}-${event.name}`
      );
      if (open) {
        iframe.style.transitionDelay = "0s";
      } else {
        iframe.style.transitionDelay = "0s";
      }
      index % 2 === 0
        ? iframe.classList.toggle("disable-left")
        : iframe.classList.toggle("disable-right");
    }
    document.querySelectorAll("video").forEach(element => {
      element.pause();
    });
    event_info.classList.toggle("event-card-lock-hover");
    desc_info.classList.toggle("events-text-holder-lock-hover");
    setOpen(!open);
  }
  return (
    <div className="event-card-holder">
      <div className="event-card" style={{ background: event.cardBg }}>
        <img
          src={
            event.name === "coming soon" && isMobile
              ? "./Images/coming_soon_mobile.webp"
              : event.imgSrc
          }
          style={{
            height: event.name === "coming soon" && isMobile ? "95vh" : "",
          }}
          alt={event.name}></img>

        <h5
          className={`content-title-0 content-title-for-${event.name} ${"disable-left"
            }`}>
          {event.contentTitle}
        </h5>
        <EventVisualContent key={event.name} {...event} />
        <span
          className="events-info"
          id={`events-info-${event.index}`}
          style={{
            background: event.spanBg,
            display: event.name === "coming soon" ? "none" : "block",
            height: event.name === "Robowars" ? "15%" : "10%",
            borderColor: event.accentColor,
            boxShadow: "0 0 15px 3px " + event.accentColor,
          }}
          >
          <div className="content-placeholder">
            <h3 className="reg montserrat" style={{display: event.name === "Robowars" ? "block" : "none",}}>Registration are free till 20th Oct, afterwards charges will be applied</h3>
            <div className="content"></div>
            <div
              className="events-text-holder"
              id={`events-text-holder-${event.index}`}
              style={{ color: event.textColor }}>
              <h1 className="oswald">{event.name}</h1>
              <p className="montserrat" style={{ fontWeight: event.weight }}>
                {event.description}
              </p>
            </div>
            <div className="events-buttons-holder montserrat">
              <button
                onClick={() => {
                  window.open(event.registerPath);
                  
                }}
                style={{ background: event.accentColor }}>
                Register
              </button>
              <button
                id="hover-eq"
                style={{ background: event.accentColor }}
                onClick={() => {
                  handleClick(event.index);
                }}>
                {open ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
              </button>
              <button
                onClick={() => {
                  window.open(event.rulebookPath);
                }}
                style={{ background: event.accentColor }}>
                Rulebook
              </button>
            </div>
          </div>
          <div className="content"></div>
        </span>
      </div>
    </div>
  );
};
