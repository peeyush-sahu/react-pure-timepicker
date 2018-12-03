import React, {Component} from 'react';
import './styles.css';

class TimePicker extends Component {

    constructor(props) {
        super(props);
        const {hr, min, secs, meridian} = this.props.selectedTime;
        this.state = {
            hour: hr || 0,
            minutes: min || 0,
            seconds: secs || 0,
            meridian: this.props.is24Hrs
                ? ""
                : meridian || "am"
        }
    }

    selectValue = (e, valType, val) => {
        e.preventDefault();
        this.setState({
            [valType]: val
        }, () => {
            this
                .props
                .onSelectTime(this.state)
        });
    }

    getStepsValue = (stepsType) => {
        let steps = [];
        switch (stepsType) {
            case 5:
                steps = [
                    0,
                    5,
                    10,
                    15,
                    20,
                    25,
                    30,
                    35,
                    40,
                    45,
                    50,
                    55
                ]
                return steps;
            case 10:
                steps = [
                    0,
                    10,
                    20,
                    30,
                    40,
                    50
                ]
                return steps;
            case 15:
                steps = [0, 15, 30, 45]
                return steps;
            default:
                return steps;
        }
    }

    render() {
        const {
            is24Hrs,
            minStep,
            secStep,
            hrEnabled,
            minEnabled,
            secEnabled
        } = this.props;
        const {hour, minutes, seconds, meridian} = this.state;
        let Hrs,
            Mins,
            Secs;

        if (is24Hrs) {
            Hrs = Array(24)
                .fill()
                .map((h, i) => <li
                    key={i}
                    className={hour === i
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "hour", i)}>{i <= 9
                        ? `0${i}`
                        : i}</li>);
        } else {
            Hrs = Array(12)
                .fill()
                .map((h, i) => <li
                    key={i}
                    className={hour === i
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "hour", i)}>{i <= 9
                        ? `0${i}`
                        : i}</li>);
        }

        if (minStep) {
            Mins = this
                .getStepsValue(minStep)
                .map((h, i) => <li
                    key={i}
                    className={minutes === h
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "minutes", h)}>{h <= 9
                        ? `0${h}`
                        : h}</li>)
        } else {
            Mins = Array(60)
                .fill()
                .map((h, i) => <li
                    key={i}
                    className={minutes === i
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "minutes", i)}>{i <= 9
                        ? `0${i}`
                        : i}</li>);
        }

        if (secStep) {
            Secs = this
                .getStepsValue(secStep)
                .map((h, i) => <li
                    key={i}
                    className={seconds === h
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "seconds", h)}>{h <= 9
                        ? `0${h}`
                        : h}</li>);
        } else {
            Secs = Array(60)
                .fill()
                .map((h, i) => <li
                    key={i}
                    className={seconds === i
                    ? "selected"
                    : ""}
                    onClick={(e) => this.selectValue(e, "seconds", i)}>{i <= 9
                        ? `0${i}`
                        : i}</li>);
        }

        return (
            <div className="timePickerContainer">
                {hrEnabled && <div className="timePanelCont" ref={(hour) => this.hourRef = hour}>
                    <ul>
                        {Hrs}
                    </ul>
                </div>}
                {minEnabled && <div className="timePanelCont" ref={(mins) => this.minsRef = mins}>
                    <ul>
                        {Mins}
                    </ul>
                </div>}
                {secEnabled && <div className="timePanelCont" ref={(secs) => this.secsRef = secs}>
                    <ul>
                        {Secs}
                    </ul>
                </div>}
                {!is24Hrs && <div className="timePanelCont" ref={(meridian) => this.meridianRef = meridian}>
                    <ul>
                        <li
                            className={meridian === "am"
                            ? "selected"
                            : ""}
                            onClick={(e) => this.selectValue(e, "meridian", "am")}>AM</li>
                        <li
                            className={meridian === "pm"
                            ? "selected"
                            : ""}
                            onClick={(e) => this.selectValue(e, "meridian", "pm")}>PM</li>
                    </ul>
                </div>}
            </div>
        );
    }
}

export default TimePicker;