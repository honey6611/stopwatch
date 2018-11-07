import React, { Component } from 'react';

class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            hours: 0,
            mins: 0,
            seconds: 0,
            active: false,
            laps: []
        }
    }
    render() {
        return (
            <div >
                <div className="time">
                    <span className="hours">
                        {('00' + this.state.hours).substring(this.state.hours.toString().length)}
                    </span><span className="time-separator">:</span>
                    <span className="minutes">
                        {('00' + this.state.mins).substring(this.state.mins.toString().length)}</span>
                    <span className="time-separator">:</span>
                    <span className="seconds">
                        {('00' + this.state.seconds).substring(this.state.seconds.toString().length)}
                    </span>
                </div>
                <div className='controls'>
                    <button
                        className="btn btn-primary mr-2"
                        onClick={() => this.startStop()}
                    >{this.state.active ? "Stop" : "Start"}</button>
                    <button className="btn btn-secondary mr-2" onClick={() => this.reset()}>Reset</button>
                    <button className="btn btn-secondary" onClick={() => this.lap()}>Lap</button>
                </div>
                <div className="laps" style={{ fontSize: 16 }}>
                    {this.state.laps.map((lap, index) => {
                        return (
                            <div className="lap" key={index}>
                                Lap {index} -  {lap.hours + ':' + lap.minutes + ':' + lap.seconds}
                            </div>
                        );
                    })
                    }
                </div>
            </div>
        )
    }

    reset() {
        this.startStop();
        this.setState({
            mins: 0, seconds: 0,
        });
    }

    lap() {
        var laps = this.state.laps;
        laps.push({
            hours: this.state.hours,
            minutes: this.state.mins,
            seconds: this.state.seconds
        });
        this.setState({
            laps
        });
    }

    startStop() {
        if (this.state.active) {
            clearInterval(this.interval)
        } else {
            this.startTimer();
        }
        this.setState({
            active: !this.state.active
        });
    }

    startTimer() {
        this.interval = setInterval(() => {
            if (this.state.mins === 59) {
                this.setState({
                    hrs: this.state.hrs + 1,
                    mins: 0,
                    seconds: 0
                })
            } else if (this.state.seconds === 59) {
                this.setState({
                    mins: this.state.mins + 1,
                    seconds: 0
                })
            } else {
                this.setState({ seconds: this.state.seconds + 1 })
            }
            return;
        }, 1000)
    }


    componentWillUnmount() {
        clearInterval(this.timer);
    }

}
export default Stopwatch;