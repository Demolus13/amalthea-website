import React, { useEffect } from 'react'
import '../styles/OurTeam.css'

export default function OurTeam() {
    useEffect(() => {
        const H = window.innerHeight;
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };

        const L1 = document.querySelectorAll('.L1');
        const L2 = document.querySelectorAll('.L2');
        const aml = document.getElementById('aml');

        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll < 0.5 * H) {
                const s1 = 1 - scroll / (H);
                const s2 = 1 - scroll / (H);
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

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div id="our-team">
            <div className="our-team-body">
                <div className="container">
                    <div className="circle"></div>
                </div>
                <div className="center" style={{ zIndex: 1 }}>
                    <h1 id="aml" className="oswald">OUR TEAM</h1>
                </div>
                <img className="aml-bg-1 L1" src="./Images/AML-BG-1.webp" alt="" />
                <img className="aml-bg-2 L1" src="./Images/AML-BG-2.webp" alt="" />
                <img className="aml-bg-3 L2" src="./Images/AML-BG-3.webp" alt="" />
                <img className="aml-bg-4 L2" src="./Images/AML-BG-4.webp" alt="" />
                <img className="aml-bg-5" src="./Images/AML-BG-5.webp" alt="" />
                <img className="aml-bg-8 L2" src="./Images/AML-BG-6.webp" alt="" />
                <img className="aml-bg-6" src="./Images/AML-BG-5.webp" alt="" />
                <img className="aml-bg-7 L2" src="./Images/AML-BG-6.webp" alt="" />
            </div>
        </div>
    )
}
