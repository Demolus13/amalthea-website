import React, { useEffect } from "react";
import "../styles/TechExpo.css";

export default function Tech_Expo() {

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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const companies = [
    {
      name: "IPR",
      description:
        "The Institute for Plasma Research (IPR) is a renowned autonomous physics research institute in India, specializing in cutting-edge plasma science and technology. Established in 1986, IPR has emerged as a leading center for advanced research in fusion science and technology development. With a focus on interdisciplinary collaboration, it remains dedicated to exploring the potential of plasma for sustainable energy solutions.",
    },
    {
      name: "Robologic",
      description:
        "Robologic is an innovative robotics company at the forefront of technological advancement, specializing in the development of cutting-edge robotic solutions. With a strong emphasis on research and development, Robologic pioneers groundbreaking automation technologies tailored for diverse industries. Committed to excellence and efficiency, it continues to redefine the possibilities of robotics in the modern world.",
    },
    {
      name: "Prime UAV",
      description:
        "Prime UAV, located in the Mehsana District of India, is a pioneering venture led by two young entrepreneurs, dedicated to revolutionizing the unmanned aerial vehicle (UAV) industry. Specializing in advanced drone technology and engineering equipment, Prime UAV offers comprehensive solutions for precision agriculture, aerial surveys, solar inspection, disaster assessment, infrastructure mapping, bridge inspection, and more, redefining the possibilities of drone-based services.",
    },
    {
      name: "IndroRobot",
      description:
        "InDro Robots is proud to bring InDro 5.0, the latest in their line of advanced robotic solutions, at the upcoming technical exposition of Amalthea. Designed to showcase its commitment to revolutionizing industries through cutting-edge technology, InDro 5.0 embodies our vision of enhancing efficiency, productivity, and safety through innovative unmanned systems.",
    },
    {
      name: "Third AI",
      description:
        "ThirdAI is thrilled to unveil its groundbreaking hash-based processing algorithms at the upcoming Amalthea 23 Tech Expo, showcasing a revolutionary concept. With a decade of dedicated research, ThirdAI has successfully challenged conventional AI wisdom, presenting compelling evidence of its capacity to outperform specialized GPUs with its innovative approach.",
    },
    {
      name: "Inside FPV",
      description:
        "They will be creating a unique Drone Race Arena for the layman to fly LOS drones. They also will be displaying a couple of their camera drones equipped with features suitable for agricultural, defense and industrial needs.",
    },
    {
      name: "CGCRI",
      description:
        "The Central Glass and Ceramic Research Institute (CGCRI) is a premier research institute in Kolkata, India, dedicated to the exploration and advancement of glass and ceramic technologies. With its center in Naroda, Ahmedabad and its rich legacy of cutting-edge research and innovation, CGCRI continues to lead the way in developing sustainable and impactful solutions for various industrial and scientific applications.",
    },
    {
      name: "White Carbon Motors",
      description:
        "White Carbon Motors Pvt. Ltd. is a pioneering automotive company focused on delivering sustainable and innovative mobility solutions for the modern world. White Carbon Motors plans to set up a track for allowing the general expo visitors to test drive their exhibits.",
    },
    {
      name: "DP Pulverizer",
      description:
        "DP Pulveriser is a leading manufacturer and supplier of high-quality pulverizing equipment for various industries, committed to delivering efficient and reliable grinding solutions. They plan to exhibit the various parts of their unique machines.",
    },
    {
      name: "Abzo Electric",
      description:
        "ABZO is dedicated to crafting eco-friendly bikes that prioritize an exceptional riding experience, combining meticulous engineering with a focus on comfort and detail.",
    },
    {
      name: "Techinnovate Mobility",
      description:
        "TechInnovate Mobility is a pioneering electric two-wheeler manufacturer, committed to transforming urban transportation with sustainable and innovative mobility solutions.",
    },
    {
      name: "IG Drones",
      description:
        "IG Drones is a leading provider of cutting-edge drone technology, dedicated to delivering innovative solutions for various industries and applications. They plan to exhibit their drone technology and its applications.",
    },
    {
      name: "Silver Touch Technologies",
      description:
        "Since 1995, Silver Touch has been delivering innovative IT solutions worldwide, integrating client needs with cutting-edge technology, and offering comprehensive services, including IT consulting, system integration, software development, and more, to stay ahead in the competitive landscape.",
    },
    {
      name: "Prayogik Technologies",
      description:
        "Prayogik Technologies, led by technocrats from NIT Bhopal, pioneers transformative energy solutions in the oil & gas sector. Working with integrated solutions for remote power management, electronic monitoring, SCADA, and communications in oil & gas operations, including pipeline cathodic protection and control of offshore unmanned platforms and remote oil wells, as well as customized military power packs for defense and natural gas sectors.",
    },
  ];

  return (
    <div id="conclave">
      <div className="conclave-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            TECH EXPO
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
        <div id="speakers-content">
          {companies.map((company, index) => (
            <div key={index} className="company-card">
              <h2>{company.name}</h2>
              <p>{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}