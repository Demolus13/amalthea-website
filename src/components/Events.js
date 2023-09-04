import React, { useEffect } from "react";
import "../styles/Events.css";
import { events } from "../EventsData";

export default function Events() {
  useEffect(() => {
    const H = window.innerHeight;
    console.log(H);
    window.scrollTo(0, 0);

    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const aml = document.getElementById("aml");
    const content = document.getElementById("events-content");
    const eventCards = document.querySelectorAll(".event-card");
    for (let i = 0; i < eventCards.length; i++) {
      eventCards[i].style.zIndex = i;
    }
    eventCards[0].style.top = "0px";

    console.log(eventCards);

    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll < 0.5 * H) {
        const s1 = 1 - scroll / H;
        const s2 = 1 - scroll / H;
        const s3 = 1 - scroll / (0.5 * H);

        L1.forEach(l => {
          l.style.transform = `scale(${s1})`;
        });
        L2.forEach(l => {
          l.style.transform = `scale(${s2})`;
        });
        aml.style.opacity = s3;
        content.style.opacity = 1 - s3;
      } else {
        aml.style.opacity = 0;
        content.style.opacity = 1;
      }

      if (scroll > H) {
        const rem = (scroll + H) / 3;
        const count = Number.parseInt((rem / H).toPrecision(1));
        console.log(count);
        for (let i = 0; i <= count && i < eventCards.length; i++) {
          eventCards[i].style.top = "0px";
        }
        for (let i = eventCards.length - 1; i > count; i--) {
          eventCards[i].style.top = "100vh";
        }
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
        <img className="aml-bg-1 L1" src="./Images/AML-BG-1.png" alt="" />
        <img className="aml-bg-2 L1" src="./Images/AML-BG-2.png" alt="" />
        <img className="aml-bg-3 L2" src="./Images/AML-BG-3.png" alt="" />
        <img className="aml-bg-4 L2" src="./Images/AML-BG-4.png" alt="" />
        <img className="aml-bg-5" src="./Images/AML-BG-5.png" alt="" />
        <img className="aml-bg-8 L2" src="./Images/AML-BG-6.png" alt="" />
        <img className="aml-bg-6" src="./Images/AML-BG-5.png" alt="" />
        <img className="aml-bg-7 L2" src="./Images/AML-BG-6.png" alt="" />
        <div id="events-content">
          <div id="events-cards-holder">
            {events.map(event => {
              return <EventCard key={event.name} {...event} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const EventCard = event => {
  const isMobile = window.screen.width < 500 ? true : false;

  return (
    <div className="event-card">
      <img
        src={
          event.name === "coming soon" && isMobile
            ? "./images/coming_soon_mobile.png"
            : event.imgSrc
        }
        style={{
          height: event.name === "coming soon" && isMobile ? "95vh" : "",
        }}
        alt={event.name}></img>
      <span
        className="events-info"
        style={{ display: event.name === "coming soon" ? "none" : "block" }}>
        <div className="events-buttons-holder">
          <button>Register</button>
          <button>Rulebook</button>
        </div>
      </span>
    </div>
  );
};
