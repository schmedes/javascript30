/*
CSS + JS Clock
- get current time with javascript
- update the hands accordingly
*/
// reference to digital clock dom element
const digitalClock = document.querySelector('.digital');

// function to extract the exact values
const getTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const timeTick = _ => {
    const {hours, minutes, seconds} = getTime(new Date());
    digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(timeTick, 1000);

