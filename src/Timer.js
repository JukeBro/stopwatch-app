import React from 'react';

export default function Timer(props) {

    return (
        <div className="timerBackground" >
            <div className="circular">
                <div className="inner"></div>
                <div className="circle">
                    <div className="bar left" >
                        <div className="progress" style={{ transform: `${((props.milliseconds / 1000) % 60) <= 30 ? `rotate(${((props.milliseconds / 1000) % 60) * 6}deg)` : true}` }}></div>
                    </div>
                    <div className="bar right">
                        <div className="progress" style={{ transform: `${((props.milliseconds / 1000) % 60) > 30 ? `rotate(${(((props.milliseconds / 1000) % 60) * 6) + 180}deg)` : "rotate(0)"}` }}></div>
                    </div>
                </div>
            </div>
            <div className="centreCircle"></div>
            <div className="secondHand" style={{ transform: `rotate(${((props.milliseconds / 1000) % 60) * 6}deg)` }}>
                <div style={{ height: "50%", backgroundColor: "dodgerblue", borderRadius: "50px" }}></div>
            </div>
            <div className="minuteHand" style={{ transform: `rotate(${((props.milliseconds / 1000) / 60 % 60) * 6}deg)` }}>
                <div style={{ height: "50%", backgroundColor: "green", borderRadius: "50px" }}></div>
            </div>
            <div className="digitalTime" style={{ transform: "translateY(100px)" }} >
                {Math.floor((props.milliseconds / 1000) / 60)}:{((props.milliseconds / 1000) % 60) > 10 ? true : 0}{((props.milliseconds / 1000) % 60).toFixed(2)}
            </div>
        </div>
    )

}