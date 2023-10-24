import React, { useEffect } from "react";
import "../styles/Gallery.css";

export default function Gallery() {
  useEffect(() => {
    const H = window.innerHeight;
    window.scrollTo(0, 0);

    const body = document.querySelector(".gallery-body");
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
    // var gallery = document.querySelector(".gallery");
    // var getVal = function (elem, style) {
    //   return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    // };
    // var getHeight = function (item) {
    //   return item.querySelector(".content").getBoundingClientRect().height;
    // };
    // var resizeAll = function () {
    //   var altura = getVal(gallery, "grid-auto-rows");
    //   var gap = getVal(gallery, "grid-row-gap");
    //   gallery.querySelectorAll(".gallery-item").forEach(function (item) {
    //     var el = item;
    //     el.style.gridRowEnd =
    //       "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    //   });
    // };
    // gallery.querySelectorAll("img").forEach(function (item) {
    //   item.classList.add("byebye");
    //   if (item.complete) {
    //     console.log(item.src);
    //   } else {
    //     item.addEventListener("load", function () {
    //       var altura = getVal(gallery, "grid-auto-rows");
    //       var gap = getVal(gallery, "grid-row-gap");
    //       var gitem = item.parentElement.parentElement;
    //       gitem.style.gridRowEnd =
    //         "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
    //       item.classList.remove("byebye");
    //     });
    //   }
    // });
    // window.addEventListener("resize", resizeAll);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="gallery">
      <div className="gallery-body">
        <div className="container">
          <div className="circle"></div>
        </div>
        <div className="center">
          <h1 id="aml" className="oswald">
            GALLERY
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
          {/* <div class="gallery">
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/drift 1.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/dra 3.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/modi 1.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/conclave1.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/expo1.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/expo2.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/car.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/conclaveteam.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/c2.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/icon1.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/drift field.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/c audience.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/amlnight.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/expo3.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/aml team.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/expo green plant.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/ccl.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/drift jumping car.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/expo robo.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img src="./Images/amlteammm.webp" alt="" />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img
                  src="https://source.unsplash.com/random/?tech,bottle"
                  alt=""
                />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img
                  src="https://source.unsplash.com/random/?tech,base"
                  alt=""
                />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img
                  src="https://source.unsplash.com/random/?tech,cell"
                  alt=""
                />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img
                  src="https://source.unsplash.com/random/?tech,bag"
                  alt=""
                />
              </div>
            </div>
            <div class="gallery-item">
              <div class="content">
                <img
                  src="https://source.unsplash.com/random/?tech,card"
                  alt=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
