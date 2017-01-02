/*
CSS + JS Clock
- get current time with javascript
- update the hands accordingly
*/
// reference to dom elements
const digitalClock = document.querySelector('.digital');
const hoursHand = document.querySelector('.hour');
const minutesHand = document.querySelector('.minute');
const secondsHand = document.querySelector('.second');

// function to extract the exact values
const getTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
})

const timeTick = _ => {
    const {hours, minutes, seconds} = getTime(new Date());
    secondsHand.style.transform = `rotate(${(seconds * 6) - 270}deg)`;
    minutesHand.style.transform = `rotate(${(minutes * 6) - 270}deg)`;
    hoursHand.style.transform = `rotate(${(hours * 30) - 270}deg)`;
    digitalClock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

setInterval(timeTick, 1000);

