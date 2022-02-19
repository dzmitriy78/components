import React, {useState} from 'react';
import DigitalClock from "./DigitalClock";
import AnalogClock from "./AnalogClock";
import AnalogClock2 from "./AnalogClock2";
import classes from "./clock.module.css"
import AnalogClock3 from "./DigitalClock2";
import DigitalClock2 from "./DigitalClock2";

const Clock = () => {

    const [toggle, setToggle] = useState("Аналоговые часы")

    function changeTypeClock() {
        toggle === "Аналоговые часы"
            ? setToggle("Цифровые часы")
            : setToggle("Аналоговые часы")
    }

    return (
        <div className={classes.root}>
            <button className={classes.btn} onClick={changeTypeClock}>{"Показать" + " " + toggle}</button>
            {toggle === "Аналоговые часы"
                ? <DigitalClock2/>
                : <AnalogClock2/>
            }
        </div>
    );
};

export default Clock;