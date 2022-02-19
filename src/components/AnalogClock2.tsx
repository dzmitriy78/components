import React from 'react';
import "./analogClock2.css"

const AnalogClock2 = () => {

    let hourHand:  Element | null = document.querySelector<HTMLElement>('.hour.hand');
    let minuteHand: Element | null = document.querySelector<HTMLElement>('.minute.hand');
    let secondHand: Element | null = document.querySelector<HTMLElement>('.second.hand');


    const sethandRotation = (hand: any) => {
        let date = new Date(), hours, minutes, seconds, percentage, degree;

        switch (hand) {
            case 'hour':
                hours = date.getHours();
                hand = hourHand;
                percentage = numberToPercentage(hours, 12);
                break;
            case 'minute':
                minutes = date.getMinutes();
                hand = minuteHand;
                percentage = numberToPercentage(minutes, 60);
                break;
            case 'second':
                seconds = date.getSeconds();
                hand = secondHand;
                percentage = numberToPercentage(seconds, 60);
                /* sound.play();*/
                break;
        }


        const timer = () => {
            sethandRotation('hour');
            sethandRotation('minute');
            sethandRotation('second');
        }
        timer()

        setInterval(() => timer(), 1000);
        degree = percentageToDegree(percentage);
        if (hand) {
            hand.style.transform = `rotate(${degree}deg) translate(-50%, -50%)`;
        }
    }

    /**
     * Converting a number to a percentage
     * @param  {number} number Number
     * @param  {number} max    Maximum value of the number
     * @return {number}        Return a percentage
     */
    const numberToPercentage = (number = 0, max = 60) => {
        return (number / max) * 100;
    }

    /**
     * Converting a percentage to a degree
     * @param  {number} percentage Percentage
     * @return {number}            Return a degree
     */
    const percentageToDegree = (percentage = 0) => {
        return (percentage * 360) / 100;
    }


    /* timer();*/
    /*  let clock = AnalogClock2();*/

    return (
            <div className="clock">
                <div className="inner">
                    <div className="hour hand"></div>
                    <div className="minute hand"></div>
                    <div className="second hand"></div>
                    <div className="graduations">
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                        <div className="graduation"></div>
                    </div>
                </div>
            </div>
    )
}


export default AnalogClock2;