import React from 'react';
import "./analogClock.css"

const AnalogClock = () => {
    const deg = 6;
    const hr = document.querySelector<HTMLElement>('#hr');
    const mn = document.querySelector<HTMLElement>('#mn');
    const sc = document.querySelector<HTMLElement>('#sc');

    setInterval(() => {
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        if (hr)
            hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
        if (mn)
            mn.style.transform = `rotateZ(${mm}deg)`;
        if (sc)
            sc.style.transform = `rotateZ(${ss}deg)`;
    }, 0)
    return (
        <div>
            <div className="clock">
                <div className="hour">
                    <div className="hr" id="hr"></div>
                </div>
                <div className="min">
                    <div className="mn" id="mn"></div>
                </div>
                <div className="sec">
                    <div className="sc" id="sc"></div>
                </div>
            </div>
        </div>
    );
};

export default AnalogClock;