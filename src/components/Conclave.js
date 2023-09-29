import React, { useEffect } from "react";
import "../styles/Conclave.css";
import { conclaveData } from "../utilities/ConclaveData";

export default function Conclave() {
  // const [onMouseHover, setOnMouseHover] = useState(false);

  useEffect(() => {
    const H = window.innerHeight;
    window.scrollTo(0, 0);
    const body = document.querySelector(".conclave-body");
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

    // document.getElementById("conclave-boxes-1").addEventListener("mouseover", () => {
    //   if (!onMouseHover)
    //   {
    //     console.log("Mouse In");
    //     setOnMouseHover(true)
    //   }

    // })

    // document.getElementById("conclave-boxes-1").addEventListener("mouseout", () => {
    //   if(onMouseHover)
    //   {
    //     console.log("Mouse oUT");
    //     setOnMouseHover(false)
    //   }

    // })

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="conclave">
      <div className="conclave-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            CONCLAVE
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
        <div id="speakers-content">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgb(23 0 54)",
              minHeight: "100vh",
            }}>
            <h1
              style={{ margin: "25px", color: "white", fontSize: "3rem" }}
              className="oswald">
              SPEAKERS
            </h1>
            <div className="SpeakerContainer" style={{ width: "80%" }}>
              <div className="row">
                {conclaveData.map(speaker => (
                  <SpeakerCard data={speaker} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpeakerCard = ({ data }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="our-team" style={{ borderRadius: "10px" }}>
        <div className="picture">
          <img className="img-fluid" src={data.imgSrc} alt="profile pic" />
        </div>
        <div className="team-content">
          <h3 className="name">{data.name}</h3>
          <h4 className="title">{data.title}</h4>
          <h4 className="title">Topic: {data.topic}</h4>
          <h4 className="title">{data.time}</h4>
        </div>
        <ul className="social">
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-facebook"
              aria-hidden="true"
            />
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-twitter"
              aria-hidden="true"></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-google-plus"
              aria-hidden="true"></a>
          </li>
          <li>
            <a
              href="https://codepen.io/collection/XdWJOQ/"
              className="fa fa-linkedin"
              aria-hidden="true"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
