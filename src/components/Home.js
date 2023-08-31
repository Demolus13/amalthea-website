import React, { useEffect} from 'react';
import '../styles/Home.css';

export default function Home() {
    
    useEffect(() => {
        const H = window.innerHeight;
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        };

        const circle = document.querySelector('.circle');
        const L1 = document.querySelectorAll('.L1');
        const L2 = document.querySelectorAll('.L2');
        const L3 = document.querySelectorAll('.L3');
        const aml = document.getElementById('aml');
        const waw = document.getElementById('waw');
        let waw_cont = document.getElementById('waw-container');
        const span = document.querySelector('.waw-span');
        const ot = document.getElementById('ot');
        const tt = document.querySelectorAll('.title');
        const unit = document.getElementById('unit');
        const event_unit = document.querySelectorAll('.event-unit');

        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll < 0.5*H) {
                const s1 = 1 - scroll / (H);
                const s2 = 1 - scroll / (1.25*H);
                const s3 = 1 - scroll / (0.35*H);

                L1.forEach(l => {
                    l.style.transform = `scale(${s1})`;
                });
                L2.forEach(l => {
                    l.style.transform = `scale(${s2})`;
                });
                aml.style.opacity = s3;
                waw.style.opacity = 1 - s3;
            } else {
                aml.style.opacity = 0;
                waw.style.opacity = 1;
            }

            if (scroll < 0.5*H) {
                span.style.height = '100%';
            }

            if (scroll > 0.5*H) {
                span.style.height = '0%';
            }

            if (scroll > 0.5*H && scroll < 2*H) {
                L3.forEach(l => {
                    l.classList.add('active');
                });
            } else {
                L3.forEach(l => {
                    l.classList.remove('active');
                });
            }

            if (scroll < H) {
                circle.style.backgroundColor = 'rgb(23, 0, 54)';
                circle.style.transform = 'scale(3)';
            }

            if (scroll > 2.5*H) {
                waw_cont.style.display = 'none';
            } else {
                waw_cont.style.display = 'flex';
            }

            if (scroll > 2*H && scroll < 7*H) {
                const s4 = 3 - (scroll - 2*H) / H;
                const r = 23 + (scroll - 2*H) * 0.2;
                const g = 0 + (scroll - 2*H) * 0.2;
                const b = 54 + (scroll - 2*H) * 0.2;
                circle.style.transform = s4 < 0 ? 'scale(0)' : `scale(${s4})`;
                circle.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                ot.style.opacity = 1;
            }

            if (7*H < scroll) {
                circle.style.transform = 'scale(0)';
            }
            if (scroll < 7*H) {
                unit.style.top = '100vh';
            }

            if (scroll > 7*H && scroll < 14.5*H) {
                ot.style.opacity = 0;
                const top = (1 - 2 * (scroll - 7*H) / (3 * H)) * 100;
                unit.style.top = `${top}vh`;
                const i = Math.floor((scroll - 7*H) / (3 * H));
                tt[i].classList.remove('deactive');
                tt[i].classList.add('active');
                if (i > 0) {
                    tt[i - 1].classList.add('deactive');
                    tt[i - 1].classList.remove('active');
                }
                if (i < 2) {
                    tt[i + 1].classList.add('deactive');
                    tt[i + 1].classList.remove('active');
                }
            } else {
                tt.forEach(tt_i => {
                    tt_i.classList.add('deactive');
                    tt_i.classList.remove('active');
                });
            }

            if (14.5*H < scroll) {
                unit.style.top = '-300vh';
            }
            if (14*H < scroll) {
                const j = Math.floor((scroll - 14*H) / (2*H));
                const top = (1 - ((scroll - 14*H) % (2*H)) / (2*H)) * 100;
                if (-1 < j && j < 9) {
                    event_unit[j].style.top = `${top}vh`;
                    event_unit[j].style.bottom = `-${top}vh`;
                }
                for (let i = 0; i < j && j < 9; i++) {
                    const element = event_unit[i];
                    element.style.top = '0vh';
                    element.style.bottom = '0vh';
                }
                for (let i = j + 1; i < 9; i++) {
                    const element = event_unit[i];
                    element.style.top = '100vh';
                    element.style.bottom = '-100vh';
                }
            }
            if (scroll < 14*H) {
                event_unit.forEach(eu => {
                    eu.style.top = '100vh';
                    eu.style.bottom = '-100vh';
                });
            }
            if (32*H < scroll) {
                event_unit.forEach(eu => {
                    eu.style.top = '0vh';
                    eu.style.bottom = '0vh';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="home-body">
            <div className="container">
                <div className="circle"></div>
            </div>
            <div className="center" style={{ zIndex: 1 }}>
                <h1 id="aml" className="oswald">AMALTHEA</h1>
            </div>
            <img className="aml-bg-1 L1" src="./Images/AML-BG-1.png" alt="" />
            <img className="aml-bg-2 L1" src="./Images/AML-BG-2.png" alt="" />
            <img className="aml-bg-3 L2" src="./Images/AML-BG-3.png" alt="" />
            <img className="aml-bg-4 L2" src="./Images/AML-BG-4.png" alt="" />
            <img className="aml-bg-5" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-8 L2" src="./Images/AML-BG-6.png" alt="" />
            <img className="aml-bg-6" src="./Images/AML-BG-5.png" alt="" />
            <img className="aml-bg-7 L2" src="./Images/AML-BG-6.png" alt="" />
            <img className="drone L3" src="./Images/Drone.png" alt="" />
            <img className="robo L3" src="./Images/Robo.png" alt="" />
            <div id="waw-container">
                <h2 id="waw" className="oswald">WHO ARE WE?</h2>
                <div className="waw-text">
                    <span className="waw-span"></span>
                    <p className="montserrat">
                        Amalthea is India's first student-run Annual Technical Summit conducted by IIT Gandhinagar. Since its inception in 2010, Amalthea has been pushing boundaries and setting high standards. With a plethora of exciting events, conclaves and a symposium coupled with a tech expo, we are back offline and ready to go beyond the impossible and blow away your minds. <br /><br />
                        Amalthea believes in fostering innovation and creative thinking by providing a forum for people to exchange their ideas and thoughts. We aim to serve as a bridge between industry and academia in order to connect and discuss pivotal technological prospects. Amalthea aspires to encourage young minds to ponder upon current issues and seek innovative and feasible solutions.
                    </p>
                </div>
            </div>
            <div id="ot" className="center oswald" style={{ zIndex: -2 }}>
                <h2>OUR THEME</h2>
            </div>
            <div className="title center oswald" style={{ zIndex: -3 }}>
                <h2>CONCALVE & SYMPOSIUM</h2>
            </div>
            <div className="title center oswald" style={{ zIndex: -3 }}>
                <h2>TECH EXPO</h2>
            </div>
            <div className="title center oswald" style={{ zIndex: -3 }}>
                <h2>THE LOCAL EVENTS</h2>
            </div>
            <div id="unit" style={{ zIndex: -4 }}>
                <div className="subunit">
                    <div className="gallery-item item-1">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-2">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-3">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-4">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                </div>
                <div className="subunit"></div>
                <div className="subunit">
                    <div className="gallery-item item-1">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-2">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-3">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                    <div className="gallery-item item-4">
                        <img className="gallery-img" src="./Images/Drone.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name oswald">ROBOWARS</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name oswald">DRA</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event" style={{backgroundImage: "url(/Images/Drift.png)"}}>
                    <div className="details">
                        <h2 className="event-name oswald">DRIFT RACING</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>

                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event" style={{backgroundImage: "url(/Images/Brainwiz.png)"}}>
                    <div className="details">
                        <h2 className="event-name oswald">BRAINWIZ</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>

                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event" style={{backgroundImage: "url(/Images/Game-Jam.png)"}}>
                    <div className="details">
                        <h2 className="event-name oswald">GAMEJAM</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name oswald">STOCKRUSH</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name oswald">INNOVATION NEXUS</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event" style={{backgroundImage: "url(/Images/Icon.png)"}}>
                    <div className="details">
                        <h2 className="event-name oswald">ICON</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
            <div className="event-unit">
                <div className="event">
                    <div className="details">
                        <h2 className="event-name oswald">DECODE</h2>
                        <div className='actions-even-name'>
                        <h5 className='apply_rule montserrat'>Register </h5>
                        <h5 className='apply_rule montserrat'>Rule Book </h5>
                        </div>
                    </div>
                    
                    <h3 className="date oswald">xx-Nov <br /> 2023</h3>
                </div>
            </div>
        </div>
    );
}

