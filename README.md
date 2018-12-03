# React-Pure-Timepicker

Awesome Timepicker for your React App. 

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/peeyush-sahu/react-pure-timepicker/graphs/commit-activity)

## Installation

React-Pure-Timepicker is available as an [npm package](https://www.npmjs.org/package/react-pure-timepicker).
```sh
npm install react-pure-timepicker --save
```

Default styles included in styles.css

## Demo

Coming Soon ...!

## How to Use

```javascript
import Calendar from 'react-pure-timepicker';
 <TimePicker
    is24Hrs={false}
    selectedTime={{
    hr: 0,
    min: 12,
    secs: 0,
    meridian: "am"
}}
    minStep=""
    secStep=""
    hrEnabled={true}
    minEnabled={true}
    secEnabled={true}
    onSelectTime={time => console.log(time)}/>
```

## Props

#### is24Hrs
 - `Boolean`
 - To show 24 Hrs format. 
 
#### selectedTime
 - `Object`
 - To show a default Time
 - `hr` - hour, `min` - minutes, `secs` - seconds, `meridian` - am or pm
 
#### minStep
 - `Number`
 - Only numbers are accepted. To show how many steps within `60 Minutes`.
 - `5`, `10`, `15` steps available.
 
#### secStep
 - `Number`
 - Only numbers are accepted. To show how many steps within `60 Seconds`.
 - `5`, `10`, `15` steps available.
 
#### hrEnabled
 - `Boolean`
 - To Show or Hide hour panel.
 
#### minEnabled
 - `Boolean`
 - To Show or Hide minute panel.
 
#### secEnabled
 - `Boolean`
 - To Show or Hide seconds panel.
 
#### onSelectTime
 - `Function`
 - Returns a `Time`. You can pass your function use the Time.

## Dependencies

[React](http://facebook.github.io/react/)

## License

MIT
