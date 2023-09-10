import React, { useEffect, useState } from "react";
import "../styles/Events.css";
import { events } from "../utilities/EventsData";
import { Link } from "react-router-dom";

export default function Events() {
  const [iframeActive, setIframeActive] = useState(false);
  useEffect(() => {
    const H = window.innerHeight;
    window.scrollTo(0, 0);
    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const aml = document.getElementById("aml");
    const content = document.getElementById("events-content");
    const eventCards = document.querySelectorAll(".event-card-holder");
    const event_info = document.getElementsByClassName("events-info");
    const iframes = document.getElementsByClassName("content-iframe");
    for (let index = 0; index < iframes.length; index++) {
      const iframe = iframes[index];
      iframe.onmouseover = () => {
        handleHover(0)
      }
    }
    event_info[0].onmouseenter = () => {
      handleHover(0);
    };

    event_info[0].onmouseout = () => {
      handleExit(0);
    };

    //document.onmo
    for (let index = 0; index < event_info.length; index++) {
      const element = event_info[index];
      element.addEventListener("mouseenter", () => {
        console.log(index);
      });

      // element.addEventListener("mouseexit", ()=>{
      //   handleExit(index)
      // })
    }
    // event_info.forEach((element, index) => {
    //   element.addEventListener("hover",  () => {
    //     handleHover(index)
    //   })
    // });

    const handleScroll = () => {
      const scroll = window.scrollY;
      eventCards[0].style.top = "0vh";
      eventCards[0].style.bottom = "0vh";

      if (scroll < H) {
        const s1 = 1 - scroll / (0.5 * H);
        const s2 = 1 - scroll / (0.5 * H);
        const s3 = 1 - scroll / (0.5 * H);

        L1.forEach((l) => {
          l.style.transform = `scale(${s1})`;
        });
        L2.forEach((l) => {
          l.style.transform = `scale(${s2})`;
        });
        aml.style.opacity = s3;
        content.style.opacity = 1 - s3;
      } else {
        aml.style.opacity = 0;
        content.style.opacity = 1;
      }
      if (0.55 * H < scroll) {
        L2.forEach((l) => {
          l.style.transform = "scale(0)";
        });
      }
      if (0.75 * H < scroll) {
        const j = Math.floor((scroll - 0.75 * H) / (2 * H)) + 1;
        const top = (1 - ((scroll - 0.75 * H) % (2 * H)) / (2 * H)) * 100;

        if (0 < j && j < 4) {
          eventCards[j].style.top = `${top}vh`;
          eventCards[j].style.bottom = `-${top}vh`;
        }
        for (let i = 1; i < j && j < 4; i++) {
          eventCards[i].style.top = "0vh";
          eventCards[i].style.bottom = "0vh";
        }
        for (let i = j + 1; i < 4; i++) {
          eventCards[i].style.top = "100vh";
          eventCards[i].style.bottom = "-100vh";
        }
      }
      if (scroll < 0.75 * H) {
        for (let i = 1; i < 4; i++) {
          eventCards[i].style.top = "100vh";
          eventCards[i].style.bottom = "-100vh";
        }
      }
      if (8.75 * H < scroll) {
        eventCards.forEach((ec) => {
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
        <img className="aml-bg-1 L1" src="./Images/AML-BG-1.png" alt="" />
        <img className="aml-bg-2 L1" src="./Images/AML-BG-2.png" alt="" />
        <img className="aml-bg-3 L2" src="./Images/AML-BG-3.png" alt="" />
        <img className="aml-bg-4 L2" src="./Images/AML-BG-4.png" alt="" />
        <img className="aml-bg-5" src="./Images/AML-BG-5.png" alt="" />
        <img className="aml-bg-8 L2" src="./Images/AML-BG-6.png" alt="" />
        <img className="aml-bg-6" src="./Images/AML-BG-5.png" alt="" />
        <img className="aml-bg-7 L2" src="./Images/AML-BG-6.png" alt="" />
        <div id="events-content">
          {events.map((event, index) => {
            event["index"] = index;
            return <EventCard key={event.name} {...event} />;
          })}
          <h3 className="content-title-0 disable-left">
            Robowars Video Release
          </h3>
          {events.map((event) => {
            return <EventVisualContent key={event.name} {...event} />;
          })}
        </div>
      </div>
    </div>
  );
}

const EventVisualContent = (event) => {
  return (
    <div className={`contxents-visual`}>
      {event.contents.map((content, index) => {
        return (
            <iframe
              className={`content-iframe content-iframe-${index} ${
                index < 4 ? "disable-left" : "disable-right"
              } contents-for-${event.name}`}
              height="25%"
              width="25%"
              src={content}
              title="Iframe Example"
            ></iframe>
        );
      })}
    </div>
  );
};
const EventCard = (event) => {
  const isMobile = window.screen.width < 500 ? true : false;

  return (
    <div className="event-card-holder">
      <div className="event-card">
        <img
          src={
            event.name === "coming soon" && isMobile
              ? "./Images/coming_soon_mobile.png"
              : event.imgSrc
          }
          style={{
            height: event.name === "coming soon" && isMobile ? "95vh" : "",
          }}
          alt={event.name}
        ></img>
        <span
          className={`events-info events-info-${event._index}`}
          style={{ display: event.name === "coming soon" ? "none" : "block" }}
        >
          <div className="content-placeholder">
            <div className="content"></div>
            <div className="events-text-holder">
              <h1 className="oswald">{event.name}</h1>
              <p className="montserrat">{event.description}</p>
            </div>
            <div className="events-buttons-holder montserrat">
              <div></div>
              <Link to={`/register/robowars`}>
                <button>Register</button>
              </Link>
              <button>Rulebook</button>
              <div></div>
            </div>
          </div>
          <div className="content"></div>
        </span>
      </div>
    </div>
  );
};

const handleHover = (index) => {
  var handleHoverElements = document.getElementsByClassName(
    `contents-for-${events[index].name}`
  );
  var handleHoverTitle = document.getElementsByClassName(`contents-0-${index}`);
  for (let index = 0; index < handleHoverElements.length; index++) {
    const element = handleHoverElements[index];
    element.classList.remove("disable-left");
  }
  document.onmouseover = () => {
    handleHover(0);
  };
};

const handleExit = (index) => {
  var handleHoverElements = document.getElementsByClassName(
    `contents-for-${events[index].name}`
  );
  for (let index = 0; index < handleHoverElements.length; index++) {
    const element = handleHoverElements[index];
    element.classList.add("disable-left");
  }
  console.log("Called");
};
