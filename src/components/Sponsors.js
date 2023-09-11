import React, { useEffect } from "react";
import "../styles/Sponsors.css";
import Footer from "./Footer.js";

export default function Sponsors() {
  useEffect(() => {
    const H = window.innerHeight;
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };

    const L1 = document.querySelectorAll(".L1");
    const L2 = document.querySelectorAll(".L2");
    const aml = document.getElementById("aml");

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
      } else {
        aml.style.opacity = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="circle"></div>
      </div>
      <div className="center" style={{ zIndex: 1 }}>
        <h1 id="aml" className="oswald">
          SPONSORS
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
      <section className="nav-home"></section>
      <div className="content">
        <div className="main">
          <h2 className="myheading divider line glow">PAST SPONSORS</h2>
          <h2 className="myheading divider line glow">PLATINUM SPONSORS</h2>
          <div className="sponsor-section">
            <div className="sponsor-card platinum-sponsor">
              <img src="./Images/jsw.png" alt="JSW logo" />
              <h5>JSW</h5>
            </div>
            <div className="sponsor-card platinum-sponsor">
              <img
                src="./Images/indextb.png"
                style={{ border: "20px solid white" }}
                alt="indextb logo"
              />
              <h5>Industrial Extension Beurau</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow">DIAMOND SPONSORS</h2>
          <div className="sponsor-section">
            <div className="sponsor-card diamond-sponsor">
              <img
                src="./Images/gsmda.jpeg"
                alt="GSMDA logo"
                style={{
                  borderLeft: "30px solid white",
                  borderRight: "30px solid white",
                }}
              />

              <h5>GSDMA</h5>
            </div>
            <div className="sponsor-card diamond-sponsor">
              {/* Replace the image source with the logo of your platinum sponsor */}
              <img
                src="./Images/CPwhite.png"
                alt="cp logo"
                style={{
                  borderLeft: "30px solid white",
                  borderRight: "30px solid white",
                  borderTop: "10px solid white",
                }}
              />
              <h5>GCPL</h5>
            </div>
          </div>
          {/* HTML code for the gold sponsors section of the web page */}
          <h2 className="myheading divider line glow">GOLD SPONSORS</h2>
          <div className="sponsor-section">
            {/* HTML code for each gold sponsor card */}
            <div className="sponsor-card gold-sponsor">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img src="./Images/adityabirla.png" alt="Aditya Birla logo" />
              <h5>Aditya Birla</h5>
            </div>
            <div className="sponsor-card gold-sponsor">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img
                src="./Images/./gujaratmaritimeboard.png"
                alt="Gujarat Maritime Board logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "10px solid white",
                  borderBottom: "10px solid white",
                }}
              />
              <h5>Gujarat Maritime Board</h5>
            </div>
            <div className="sponsor-card gold-sponsor">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img
                src="./Images/metro.png"
                alt="Metro logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "10px solid white",
                  borderBottom: "10px solid white",
                }}
              />
              <h5>Gujarat Metro</h5>
            </div>
          </div>
          {/* HTML code for the silver sponsors section of the web page */}
          <h2 className="myheading divider line glow">SILVER SPONSORS</h2>
          <div className="sponsor-section">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card silver-sponsor">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/vrajgroupwhite.png"
                alt="Vraj Group logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "10px solid white",
                  borderBottom: "10px solid white",
                }}
              />
              <h5 className="req-adjust">Vraj Group</h5>
            </div>
            <div className="sponsor-card silver-sponsor">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img src="./Images/GP.png" alt="GP logo" />
              <h5>Gujarat State Petronet</h5>
            </div>
            <div className="sponsor-card silver-sponsor">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img src="./Images/AC.png" alt="AC logo" />
              <h5 className="req-adjust">Alstonia Consulting</h5>
            </div>
          </div>
          {/* HTML code for the other sponsors section of the web page */}
          <h2 className="myheading divider line glow">EVENT PARTNERS</h2>
          <div className="sponsor-section">
            {/* HTML code for each other sponsor card */}
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/ITC.png"
                alt="ITC logo"
                style={{
                  borderLeft: "80px solid white",
                  borderRight: "80px solid white",
                  borderTop: "20px solid white",
                  borderBottom: "20px solid white",
                }}
              />
              <h5>ITC</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/nutanix.png"
                alt="nutanix logo"
                style={{
                  borderLeft: "80px solid white",
                  borderRight: "80px solid white",
                  borderTop: "60px solid white",
                  borderBottom: "60px solid white",
                }}
              />
              <h5>Nutanix</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/Reliance.png"
                alt="reliance logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "20px solid white",
                  borderBottom: "20px solid white",
                }}
              />
              <h5>Reliance Ltd.</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img src="./Images/crazylabs.png" alt="crazylabs logo" />
              <h5>Crazy Labs</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/redbull.png"
                alt="redbull logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "20px solid white",
                  borderBottom: "20px solid white",
                }}
              />
              <h5>Red Bull</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/tatachemicals.png"
                alt="tata chemicals logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                }}
              />
              <h5>Tata Chemicals</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/codechef.png"
                alt="codechef logo"
                style={{
                  borderLeft: "40px solid white",
                  borderRight: "40px solid white",
                  borderTop: "20px solid white",
                  borderBottom: "20px solid white",
                }}
              />
              <h5>Code Chef</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/wazirx.png"
                alt="wazrix logo"
                style={{
                  borderLeft: "80px solid white",
                  borderRight: "80px solid white",
                  borderTop: "20px solid white",
                  borderBottom: "20px solid white",
                }}
              />
              <h5>Wazirx</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/adani.png"
                alt="adani logo"
                style={{
                  borderLeft: "50px solid white",
                  borderRight: "50px solid white",
                  borderTop: "60px solid white",
                  borderBottom: "60px solid white",
                }}
              />
              <h5>Adani Group</h5>
            </div>
            <div className="sponsor-card event-parters">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="./Images/beamable.png"
                alt="beamable logo"
                style={{
                  borderLeft: "50px solid white",
                  borderRight: "50px solid white",
                  borderTop: "60px solid white",
                  borderBottom: "60px solid white",
                }}
              />
              <h5>Beamable</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow">CONCLAVE PARTNER</h2>
          <div className="sponsor-section ">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card conclave-partners">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/jklakshmi.png"
                alt="JK Lakshmi cement logo"
                style={{
                  borderLeft: "20px solid white",
                  borderRight: "20px solid white",
                  borderTop: "40px solid white",
                  borderBottom: "40px solid white",
                }}
              />
              <h5>JK Lakshmi Cement</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow" id="design-and-head">
            DESIGN AND INNOVATION PARTNERS
          </h2>
          <div className="sponsor-section">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card design-innovation-partners">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/htc.png"
                alt="htc logo"
                style={{
                  borderLeft: "30px solid white",
                  borderRight: "30px solid white",
                  borderTop: "30px solid white",
                  borderBottom: "30px solid white",
                }}
              />
              <h5>HTC</h5>
            </div>
            <div className="sponsor-card design-innovation-partners">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/isro.png"
                alt="isro logo"
                style={{
                  borderLeft: "50px solid white",
                  borderRight: "50px solid white",
                  borderTop: "5px solid white",
                  borderBottom: "5px solid white",
                }}
              />
              <h5>ISRO</h5>
            </div>
            <div className="sponsor-card design-innovation-partners">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/apple.png"
                alt="apple logo"
                style={{
                  borderLeft: "90px solid white",
                  borderRight: "90px solid white",
                  borderTop: "15px solid white",
                  borderBottom: "15px solid white",
                }}
              />
              <h5>Apple</h5>
            </div>
            <div className="sponsor-card design-innovation-partners">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="./Images/microsoft.png"
                alt="microsoft logo"
                style={{
                  borderLeft: "15px solid white",
                  borderRight: "15px solid white",
                  borderTop: "50px solid white",
                  borderBottom: "50px solid white",
                  height: "100%",
                }}
              />
              <h5>Microsoft</h5>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
