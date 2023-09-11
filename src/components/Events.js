import React, { createRef, useEffect, useState } from "react";
import "../styles/Events.css";
import { events } from "../utilities/EventsData";
import { Link } from "react-router-dom";

export default function Events() {
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

    if (event_info[0].clientHeight >= window.innerHeight * 0.2) {
      console.log("Called");
      for (let i = 0; i < iframes.length; i++) {
        const element = iframes[i];
        element.style.left = "2.5%";
      }
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
        const top = (1 - ((scroll - 0.75 * H) % (2 * H)) / (2 * H)) * 120;
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
          {/* {events.map((event) => {
            return <EventVisualContent key={event.name} {...event} />;
          })} */}
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
            src={content.src}
            title="Iframe Example"
            allow="fullscreen"
            autoplay="false"
          ></iframe>
        );
      })}
    </div>
  );
};

const iFrame = (src) => {
  return (
    <>
      <iframe className="fullScreenIframe" src={src} />
      <button className="fullScreenIframeClose">Close</button>
    </>
  );
};
const EventCard = (event) => {
  const isMobile = window.screen.width < 500 ? true : false;

  // const useRefDimensions = (ref) => {
  //   const [dimensions, setDimensions] = useState({ width: 1, height: 2 });
  //   React.useEffect(() => {
  //     console.log(ref.current);
  //     if (ref.current) {
  //       const { current } = ref;
  //       const boundingRect = current.getBoundingClientRect();
  //       const { width, height } = boundingRect;
  //       setDimensions({ width: width, height: height });
  //     }
  //   }, [ref]);
  //   return dimensions;
  // };
  // const divRef = createRef();
  // const dimensions = useRefDimensions(divRef);

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

        <h5
          className={`content-title-0 content-title-for-${event.name} ${
            //dimensions.height <= window.innerHeight * 0.6 ? "disable-left" : ""
            "disable-left"
          }`}
        >
          {event.contentTitle}
        </h5>
        <EventVisualContent key={event.name} {...event} />
        <span
          className={`events-info events-info-${event._index}`}
          style={{
            background: event.spanBg,
            display: event.name === "coming soon" ? "none" : "block",
            borderColor: event.accentColor,
            boxShadow: "0 0 15px 3px " + event.accentColor,
          }}
          // ref={divRef}
        >
          <div className="content-placeholder">
            <div className="content"></div>
            <div
              className="events-text-holder"
              style={{ color: event.textColor }}
            >
              <h1 className="oswald">{event.name}</h1>
              <p className="montserrat" style={{ fontWeight: event.weight }}>{event.description}</p>
            </div>
            <div className="events-buttons-holder montserrat">
              <Link to={`/register/${event.name.toLowerCase()}`}>
                <button style={{ background: event.accentColor }}>
                  Register
                </button>
              </Link>
              <button
                onClick={() => {
                  window.open(event.rulebookPath);
                }}
                style={{ background: event.accentColor }}
              >
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

const handleHover = (index) => {
  const event_info = document.getElementsByClassName("events-info");
  var handleHoverElements = document.getElementsByClassName(
    `contents-for-${events[index].name}`
  );
  //var title = document.getElementsByClassName(`content-title-for-${events[index].name}`)
  for (let index = 0; index < handleHoverElements.length; index++) {
    const element = handleHoverElements[index];
    //element.classList.remove("disable-left");
  }
  //title[index].classList.remove("disable-left")
  document.onmouseover = () => {
    handleHover(0);
  };
  console.log("Hovering");
};

const handleExit = (index) => {
  var handleHoverElements = document.getElementsByClassName(
    `contents-for-${events[index].name}`
  );
  //var title = document.getElementsByClassName(`content-title-for-Robowars`);
  for (let index = 0; index < handleHoverElements.length; index++) {
    const element = handleHoverElements[index];
    //element.classList.add("disable-left");
  }
  //title[0].classList.add("disable-left")
  console.log("Called");
};

const handleThumbnailClick = (src) => {};
