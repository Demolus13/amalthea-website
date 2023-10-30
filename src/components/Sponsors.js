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

        L1.forEach((l) => {
          l.style.transform = `scale(${s1})`;
        });
        L2.forEach((l) => {
          l.style.transform = `scale(${s2})`;
        });
        aml.style.opacity = s3;
      } else {
        aml.style.opacity = 0;
        L1.forEach((l) => {
          l.style.transform = `scale(0.5)`;
        });
        L2.forEach((l) => {
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
            CURRENT SPONSORS & PARTNERS
          </h2>
          <h2 className="myheading divider line glow oswald">
            PLATINUM SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card platinum-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gujsail.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/Gujsail.webp" alt="GUJSAIL logo" />
              </div>
              <h5>GUJSAIL</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">GOLD SPONSORS</h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card gold-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gpcl.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/GPCL.webp" alt="GPCL logo" />
              </div>
              <h5>GPCL</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">
            SILVER SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card silver-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://indextb.com/home");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/indextb.webp" alt="iNDEXTb logo" />
              </div>
              <h5>iNDEXTb</h5>
            </div>
            <div
              className="sponsor-card silver-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gpofms.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img
                  src="./Images/./gujaratmaritimeboard.webp"
                  alt="Gujarat Maritime Board logo"
                />
              </div>
              <h5>Gujarat Maritime Board</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">
            BRONZE SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card bronze-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.gujaratmetrorail.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/metro.webp" alt="Metro logo" />
              </div>
              <h5>Gujarat Metro</h5>
            </div>
            <div
              className="sponsor-card bronze-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.unionbankofindia.co.in/english/home.aspx");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/Union Bank.svg" alt="Union Bank" />
              </div>
              <h5>Union Bank of India</h5>
            </div>
            <div
              className="sponsor-card bronze-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://geda.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/GEDA.webp" alt="AC logo" />
              </div>
              <h5 className="req-adjust">GEDA</h5>
            </div>
            <div
              className="sponsor-card bronze-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gil.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/GIL.webp" alt="GIL logo" />
              </div>
              <h5 className="req-adjust">GIL</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">
            ASSOCIATE SPONSORS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card associate-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.rrkabel.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/RR.webp" alt="RR logo" />
              </div>
              <h5>RR Kabel</h5>
            </div>
            <div
              className="sponsor-card associate-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.opalindia.in/index.php");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/OPAL.webp" alt="OPAL logo" />
              </div>
              <h5>OPAL</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">EVENT PARTNERS</h2>
            <div className="sponsor-section montserrat">
              <div
                className="sponsor-card event-partner"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://gujsail.gujarat.gov.in/");
                }}
              >
                <div className="sponsor-img">
                  <img src="./Images/Gujsail.webp" alt="GUJSAIL logo" />
                </div>
                <h5>GUJSAIL</h5>
              </div>
            </div>
          <h2
            className="myheading divider line glow oswald"
            id="design-and-head"
          >
            NETWORKING DINNER PARTNERS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card partner"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://iotiantech.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/Iotian.webp" alt="IOTian logo" />
              </div>
              <h5>IOTian</h5>
            </div>
          </div>
          <h2
            className="myheading divider line glow oswald"
            id="design-and-head"
          >
            MEDIA PARTNERS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card partner"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://promfgmedia.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/ProMFG.webp" alt="ProMFG logo" />
              </div>
              <h5>ProMFG</h5>
            </div>
          </div>
          <h2
            className="myheading divider line glow oswald"
            id="design-and-head"
          >
            HEALTH CARE PARTNERS
          </h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card partner"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.alembicusa.com/Default.aspx");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/Alembic.webp" alt="Alembic logo" />
              </div>
              <h5>Alembic</h5>
            </div>
          </div>
          <h2 className="myheading divider line glow oswald">PAST SPONSORS</h2>
          <div className="sponsor-section montserrat">
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://jsw.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/jsw.webp" alt="JSW logo" />
              </div>
              <h5>JSW</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://indextb.com/home");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/indextb.webp" alt="indextb logo" />
              </div>
              <h5>iNDEXTb</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gsdma.org/");
                            }}
            >
              <div className="sponsor-img">
                <img src="./Images/gsdma.webp" alt="GSDMA logo" />
              </div>
              <h5>GSDMA</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gcpl.net/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/CPwhite.webp" alt="cp logo" />
              </div>
              <h5>GCPL</h5>
            </div>
            <div className="sponsor-card past-sponsor" id="aditya-birla"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.adityabirla.com/");
            }}
          >
              <div className="sponsor-img">
                <img src="./Images/adityabirla.webp" alt="Aditya Birla logo" />
              </div>
              <h5>Aditya Birla</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gpofms.gujarat.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img
                  src="./Images/./gujaratmaritimeboard.webp"
                  alt="Gujarat Maritime Board logo"
                />
              </div>
              <h5>Gujarat Maritime Board</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://vrajgroup.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/vrajgroupwhite.webp" alt="Vraj Group logo" />
              </div>
              <h5 className="req-adjust">Vraj Group</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gspcgroup.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/GP.webp" alt="GP logo" />
              </div>
              <h5>Gujarat State Petronet</h5>
            </div>
            <div className="sponsor-card past-sponsor" id="ac-consult"
            onClick={(e) => {
                e.preventDefault();
                window.open("https://www.alstoniaconsulting.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/AC.webp" alt="AC logo" />
              </div>
              <h5 className="req-adjust">Alstonia Consulting</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://itcportal.com");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/ITC.webp" alt="ITC logo" />
              </div>
              <h5>ITC</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://nutanix.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/nutanix.webp" alt="nutanix logo" />
              </div>
              <h5>Nutanix</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://ril.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/Reliance.webp" alt="reliance logo" />
              </div>
              <h5>Reliance Ltd.</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://crazylabs.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/crazylabs.webp" alt="crazylabs logo" />
              </div>
              <h5>Crazy Labs</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://redbull.com/us-en");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/redbull.webp" alt="redbull logo" />
              </div>
              <h5>Red Bull</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.tatachemicals.com/");
              }}
            >
              <div className="sponsor-img">
                <img
                  src="./Images/tatachemicals.webp"
                  alt="tata chemicals logo"
                />
              </div>
              <h5>Tata Chemicals</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.codechef.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/codechef.webp" alt="codechef logo" />
              </div>
              <h5>Code Chef</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://wazirx.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/wazirx.webp" alt="wazrix logo" />
              </div>
              <h5>Wazirx</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.adani.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/adani.webp" alt="adani logo" />
              </div>
              <h5>Adani Group</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://beamable.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/beamable.webp" alt="beamable logo" />
              </div>
              <h5>Beamable</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.jklakshmicement.com/");
              }}
            >
              <div className="sponsor-img">
                <img
                  src="./Images/jklakshmi.webp"
                  alt="JK Lakshmi cement logo"
                />
              </div>
              <h5>JK Lakshmi Cement</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.apple.com/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/apple.webp" alt="apple logo" />
              </div>
              <h5>Apple</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://isro.gov.in/");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/isro.webp" alt="isro logo" />
              </div>
              <h5>ISRO</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.microsoft.com");
              }}
            >
              <div className="sponsor-img">
                <img src="./Images/microsoft.webp" alt="microsoft logo" />
              </div>
              <h5>Microsoft</h5>
            </div>
            <div
              className="sponsor-card past-sponsor"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.`htc.com/in/");
              }}
            >
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
