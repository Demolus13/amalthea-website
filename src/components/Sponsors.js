import React, { useEffect } from "react";
import "../styles/Sponsors.css";
import Footer from "./Footer/Footer";

export default function Symposium() {
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
      <img className="aml-bg-1 L1" src="../Images/AML-BG-1.png" alt="" />
      <img className="aml-bg-2 L1" src="../Images/AML-BG-2.png" alt="" />
      <img className="aml-bg-3 L2" src="../Images/AML-BG-3.png" alt="" />
      <img className="aml-bg-4 L2" src="../Images/AML-BG-4.png" alt="" />
      <img className="aml-bg-5" src="../Images/AML-BG-5.png" alt="" />
      <img className="aml-bg-8 L2" src="../Images/AML-BG-6.png" alt="" />
      <img className="aml-bg-6" src="../Images/AML-BG-5.png" alt="" />
      <img className="aml-bg-7 L2" src="../Images/AML-BG-6.png" alt="" />
      <section className="nav-home"></section>
      <div className="content">
        <div className="main">
          <h2 className="myheading divider line glow">PAST SPONSORS</h2>
          <h2 className="myheading divider line glow">PLATINUM SPONSORS</h2>
          <div className="sponsor-section">
            <div className="sponsor-card">
              <img src="../Sponsors/jsw.png" alt="JSW logo" />
            </div>
            <div className="sponsor-card">
              <img
                src="../Sponsors/indextb.png"
                style={{ height: "80%" }}
                alt="indextb logo"
              />
            </div>
          </div>
          <h2 className="myheading divider line glow">DIAMOND SPONSORS</h2>
          <div className="sponsor-section">
            <div className="sponsor-card">
              <img
                src="../Sponsors/gsmda.jpeg"
                alt="GSMDA logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your platinum sponsor */}
              <img
                src="../Sponsors/CPwhite.png"
                style={{ width: 200 }}
                alt="cp logo"
              />
            </div>
          </div>
          {/* HTML code for the gold sponsors section of the web page */}
          <h2 className="myheading divider line glow">GOLD SPONSORS</h2>
          <div className="sponsor-section">
            {/* HTML code for each gold sponsor card */}
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img
                src="../Sponsors/adityabirla.png"
                alt="Aditya Birla logo"
                style={{ width: 250 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img
                src="../Sponsors/./gujaratmaritimeboard.png"
                style={{ width: 200 }}
                alt="Gujarat Maritime Board logo"
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your gold sponsor */}
              <img
                src="../Sponsors/metro.png"
                alt="Metro logo"
                style={{ width: 200 }}
              />
            </div>
          </div>
          {/* HTML code for the silver sponsors section of the web page */}
          <h2 className="myheading divider line glow">SILVER SPONSORS</h2>
          <div className="sponsor-section">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/vrajgroupwhite.png"
                alt="Vraj Group logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img src="../Sponsors/GP.png" alt="GP logo" />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/AC.png"
                alt="AC logo"
                style={{ width: 200 }}
              />
            </div>
          </div>
          {/* HTML code for the other sponsors section of the web page */}
          <h2 className="myheading divider line glow">EVENT PARTNERS</h2>
          <div className="sponsor-section">
            {/* HTML code for each other sponsor card */}
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/ITC.png"
                alt="ITC logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/nutanix.png"
                alt="nutanix logo"
                style={{ height: 70 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img src="../Sponsors/Reliance.png" alt="reliance logo" />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img src="../Sponsors/crazylabs.png" alt="crazylabs logo" />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img src="../Sponsors/redbull.png" alt="redbull logo" />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/tatachemicals.png"
                alt="tata chemicals logo"
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img src="../Sponsors/codechef.png" alt="codechef logo" />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/wazirx.png"
                alt="wazrix logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/adani.png"
                alt="adani logo"
                style={{ height: 120 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your other sponsor */}
              <img
                src="../Sponsors/beamable.png"
                alt="beamable logo"
                style={{ height: 70 }}
              />
            </div>
          </div>
          <h2 className="myheading divider line glow">CONCLAVE PARTNER</h2>
          <div className="sponsor-section">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/jklakshmi.png"
                alt="JK Lakshmi cement logo"
                style={{ height: 100 }}
              />
            </div>
          </div>
          <h2 className="myheading divider line glow">
            DESIGN AND INNOVATION PARTNERS
          </h2>
          <div className="sponsor-section">
            {/* HTML code for each silver sponsor card */}
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/htc.png"
                alt="htc logo"
                style={{ height: 150 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/isro.png"
                alt="isro logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/apple.png"
                alt="apple logo"
                style={{ width: 200 }}
              />
            </div>
            <div className="sponsor-card">
              {/* Replace the image source with the logo of your silver sponsor */}
              <img
                src="../Sponsors/microsoft.png"
                alt="microsoft logo"
                style={{ height: 100 }}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
