import React, { useEffect } from "react";
import "../styles/Sponsors.css";
// import Footer from "./Footer.js";

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
        const s2 = 1 - scroll / (1.25 * H);
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
        L1.forEach(l => {
          l.style.transform = `scale(0.5)`;
        });
        L2.forEach(l => {
          l.style.transform = `scale(0.6)`;
        });
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
      <div className="center">
        <h1 id="aml" className="oswald">
          SPONSORS
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
      <section className="nav-home"></section>
      <div className="spons-content">
        <div className="main">
          <h2 className="myheading divider line glow oswald">
            CURRENT SPONSORS
          </h2>
          <h2 className="myheading divider line glow oswald">
            DIAMOND SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div className="sponsor-card diamond-sponsor">
              <div className="sponsor-img">
                <img src="./Images/Gujsail.webp" alt="GUJSAIL logo" />
              </div>
              <h5>GUJSAIL</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">
            BRONZE SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div className="sponsor-card bronze-sponsor">
              <div className="sponsor-img">
                <img src="./Images/metro.webp" alt="Metro logo" />
              </div>
              <h5>Gujarat Metro</h5>
            </div>
            <div className="sponsor-card bronze-sponsor">
              <div className="sponsor-img">
                <img src="./Images/Union Bank.svg" alt="Union Bank" />
              </div>
              <h5>Union Bank of India</h5>
            </div>
            <div className="sponsor-card bronze-sponsor" id="ac-consult">
              <div className="sponsor-img">
                <img src="./Images/GEDA.webp" alt="AC logo" />
              </div>
              <h5 className="req-adjust">GEDA</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">EVENT PARTNERS</h2>
          <div className="sponsor-section montserrat">
            <div className="sponsor-card event-partners">
              <div className="sponsor-img">
                <img src="./Images/Gujsail.webp" alt="GUJSAIL logo" />
              </div>
              <h5>GUJSAIL</h5>
            </div>
          </div>
          <h2
            className="myheading divider line glow oswald"
            id="design-and-head">
            MEDIA PARTNERS
          </h2>
          <div className="sponsor-section montserrat">
            <div className="sponsor-card design-innovation-partners">
              <div className="sponsor-img">
                <img src="./Images/ProMFG.webp" alt="ProMFG logo" />
              </div>
              <h5>ProMFG</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">
            PAST SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
          <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/jsw.webp" alt="JSW logo" />
              </div>
              <h5>JSW</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/indextb.webp" alt="indextb logo" />
              </div>
              <h5>iNDEXTb</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/gsdma.webp" alt="GSDMA logo" />
              </div>
              <h5>GSDMA</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/CPwhite.webp" alt="cp logo" />
              </div>
              <h5>GCPL</h5>
            </div>
            <div className="sponsor-card past-sponsors" id="aditya-birla">
              <div className="sponsor-img">
                <img src="./Images/adityabirla.webp" alt="Aditya Birla logo" />
              </div>
              <h5>Aditya Birla</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img
                  src="./Images/./gujaratmaritimeboard.webp"
                  alt="Gujarat Maritime Board logo"
                />
              </div>
              <h5>Gujarat Maritime Board</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/vrajgroupwhite.webp" alt="Vraj Group logo" />
              </div>
              <h5 className="req-adjust">Vraj Group</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/GP.webp" alt="GP logo" />
              </div>
              <h5>Gujarat State Petronet</h5>
            </div>
            <div className="sponsor-card past-sponsors" id="ac-consult">
              <div className="sponsor-img">
                <img src="./Images/AC.webp" alt="AC logo" />
              </div>
              <h5 className="req-adjust">Alstonia Consulting</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/ITC.webp" alt="ITC logo" />
              </div>
              <h5>ITC</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/nutanix.webp" alt="nutanix logo" />
              </div>
              <h5>Nutanix</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/Reliance.webp" alt="reliance logo" />
              </div>
              <h5>Reliance Ltd.</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/crazylabs.webp" alt="crazylabs logo" />
              </div>
              <h5>Crazy Labs</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/redbull.webp" alt="redbull logo" />
              </div>
              <h5>Red Bull</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img
                  src="./Images/tatachemicals.webp"
                  alt="tata chemicals logo"
                />
              </div>
              <h5>Tata Chemicals</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/codechef.webp" alt="codechef logo" />
              </div>
              <h5>Code Chef</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/wazirx.webp" alt="wazrix logo" />
              </div>
              <h5>Wazirx</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/adani.webp" alt="adani logo" />
              </div>
              <h5>Adani Group</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/beamable.webp" alt="beamable logo" />
              </div>
              <h5>Beamable</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img
                  src="./Images/jklakshmi.webp"
                  alt="JK Lakshmi cement logo"
                />
              </div>
              <h5>JK Lakshmi Cement</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/apple.webp" alt="apple logo" />
              </div>
              <h5>Apple</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/isro.webp" alt="isro logo" />
              </div>
              <h5>ISRO</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/microsoft.webp" alt="microsoft logo" />
              </div>
              <h5>Microsoft</h5>
            </div>
            <div className="sponsor-card past-sponsors">
              <div className="sponsor-img">
                <img src="./Images/htc.webp" alt="htc logo" />
              </div>
              <h5>HTC</h5>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
