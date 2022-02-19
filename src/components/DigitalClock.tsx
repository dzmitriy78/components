import React, {useEffect, useState} from 'react';
import cl from "./DigitalClock.module.css"

const to2digits = (num: number) => num < 10 ? "0" + num : num

const DigitalClock = () => {

    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let interval: NodeJS.Timer;
        interval = setInterval(() => {
            setDate(new Date()
            )
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className={cl.date}>
            <span>{to2digits(date.getHours())}:</span>
            <span>{to2digits(date.getMinutes())}:</span>
            <span>{to2digits(date.getSeconds())}</span>
        </div>
    );
};

export default DigitalClock;