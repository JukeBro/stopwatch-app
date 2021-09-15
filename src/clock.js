import React from 'react';

import Timer from './Timer';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            startButtonText: "Start",
            startButtonColor: "green",
            timeElapsed: 0,
            milliseconds: 0
        }
        this.toggleTimer = this.toggleTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleStartButton = this.toggleStartButton.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.toggleRainbow = this.toggleRainbow.bind(this);
        this.rainbow = true;
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            50
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        if (!this.state.running) return;
        this.setState((state) => ({
            milliseconds: Date.now() - state.startTime + state.timeElapsed
        }));
    }

    toggleTimer() {
        this.setState((state) => ({
            startTime: Date.now(),
            running: state.running === true ? false : true,
            timeElapsed: state.running === true ? Date.now() - state.startTime + state.timeElapsed : state.timeElapsed
        }))
    }

    toggleStartButton() {
        this.setState((state) => ({
            startButtonColor: state.startButtonColor === "green" ? "red" : "green",
            startButtonText: state.startButtonText === "Start" ? "Stop" : "Start"
        }))
    }

    handleClick() {
        this.toggleTimer();
        this.toggleStartButton();
    }

    resetTimer() {
        this.setState({
            startTime: 0,
            running: false,
            timeElapsed: 0,
            milliseconds: 0,
            startButtonColor: "green",
            startButtonText: "Start"
        })
    }

    toggleRainbow() {
        if (this.rainbow === true) this.rainbow = false
        else this.rainbow = true;
    }

    render() {
        return (
            <div className="clock-wrapper" >
                <div className="rainbowToggle"></div>
                <div className="clock">
                    <div className="title">Stopwatch App</div>
                    <Timer running={this.state.running} milliseconds={this.state.milliseconds} />
                    <div className="startButton" style={{ backgroundColor: `${this.state.startButtonColor}`, borderWidth: "5px", borderStyle: "solid", borderColor: "black" }} onClick={this.handleClick}>{this.state.startButtonText}</div>
                    <div className="stopButton" style={{ borderWidth: "5px", borderStyle: "solid", borderColor: "black" }} onClick={this.resetTimer}>Reset</div>
                </div>
            </div>
        )
    }

}