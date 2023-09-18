import React, { useEffect } from 'react'
import '../styles/Conclave.css'

export default function Conclave() {
    useEffect(() => {
        const H = window.innerHeight;
        window.scrollTo(0, 0);

        const body = document.querySelector(".conclave-body")
        const L1 = document.querySelectorAll('.L1');
        const L2 = document.querySelectorAll('.L2');
        const aml = document.getElementById('aml');
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
                console.log(top)
                if (top < 0){
                    content.style.top = `${top}px`
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id="conclave">
            <div className="conclave-body">
                <div className="container">
                    <div className="circle"></div>
                </div>
                <div className="center">
                    <h1 id="aml" className="oswald">CONCLAVE</h1>
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

                </div>
            </div>
        </div>
    )
}
