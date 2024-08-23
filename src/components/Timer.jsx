import React, { useEffect, useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let myInterval;

        if (timerOn) {
            myInterval = setInterval(() => {
                setTime(prev => prev + 1);
            }, 1000);
        } else {
            clearInterval(myInterval);
        }

        return () => clearInterval(myInterval);
    }, [timerOn]);

    function buttonHandler() {
        setTimerOn(prev => !prev);
    }

    return (
        <>
            <button onClick={buttonHandler}>{timerOn ? "Off" : "ON"}</button>
            <div>Time: {time}</div>
        </>
    );
}