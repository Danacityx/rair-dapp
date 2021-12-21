import React, { memo, useCallback, useEffect, useState } from "react";
import './Countdown.css';
import moment from 'moment-timezone';


const CountdownComponent = () => {
    const dec = moment("2022-01-06 19:00").tz("America/New_York");

    const [countdownDate, setCountdownDate] = useState(dec);

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const setNewTime = useCallback(() => {
        if (countdownDate) {
            const currentTime = new Date().getTime();
            const distanceToDate = countdownDate - currentTime;
            let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);
            const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            days = `${days}`;
            if (numbersToAddZeroTo.includes(hours)) {
                hours = `0${hours}`;
            } else if (numbersToAddZeroTo.includes(minutes)) {
                minutes = `0${minutes}`;
            } else if (numbersToAddZeroTo.includes(seconds)) {
                seconds = `0${seconds}`;
            }
            setState({ days: days, hours: hours, minutes, seconds });
        }
    }, [countdownDate]);
    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, [setNewTime]);
    return (
        <div className={"root-time"}>
            {/* <header className={cl.header}>
                <h1 className={cl.title}>Time left until release</h1>
            </header> */}
            <h3 className={"subtitle"}>Time left until release</h3>
            <div className={"countdownWrapper"}>
                <div className={"timeSection"}>
                    <div className={"time"}>{state.days || "0"}</div>
                    <small className={"timeText"}>Days</small>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>:</div>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>{state.hours || "00"}</div>
                    <small className={"timeText"}>Hours</small>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>:</div>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>{state.minutes || "00"}</div>
                    <small className={"timeText"}>Minutes</small>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>:</div>
                </div>
                <div className={"timeSection"}>
                    <div className={"time"}>{state.seconds || "00"}</div>
                    <small className={"timeText"}>Seconds</small>
                </div>
            </div>
        </div>
    );
};
export const Countdown = memo(CountdownComponent);