import React from 'react';
import "./AnalogClock4.css"
// @ts-ignore
import AnalogueClock from 'react-analogue-clock';


function AnalogClock4() {
    const clockOptions = {
        baseColor: '#000000',
        borderColor: '#000000',
        borderWidth: 0,
        centerColor: '#000000',
        handColors: {
            hour: '#ffffff',
            minute: '#ffffff',
            second: 'red',
        },
        notchColor: '#ffffff',
        numbersColor: '#ffffff',
        showNumbers: true,
        size: 300
    }
    return (
        <div className="App2">
            <AnalogueClock {...clockOptions} />
        </div>
    );
}

export default AnalogClock4