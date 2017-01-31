const timeleft = document.querySelector('.display__time-left');
const endtime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
const customForm = document.querySelector('#custom');
let timer = 0;
let timerInterval;

const setTimer = newTime => {
    timer = 0;
    clearInterval(timerInterval);
    setEndTime(Date.now() + newTime * 1000);
    timerInterval = setInterval(()=> {
        timer += 1;
        setRemaindingTime(newTime - timer);
    }, 1000);
    setTimeout(()=> {
        clearInterval(timerInterval);
        timer = 0;
}, newTime * 1000);
}

const setRemaindingTime = secondsLeft => {
    const minutes = Math.floor(secondsLeft/60);
    const seconds = secondsLeft % 60;
    timeleft.textContent = `${minutes > 10 ? '': '0'}${minutes}:${seconds > 10 ? '': '0'}${seconds}`;
}

const setEndTime = endTime => {
    const endTimeDate = new Date(endTime);
    const hours = endTimeDate.getHours();
    const minutes = endTimeDate.getMinutes();
    endtime.textContent = `${hours}:${minutes > 10 ? '': '0'}${minutes}`;
}

buttons.forEach(el => el.addEventListener('click', (e)=> setTimer(parseInt(e.target.dataset.time, 10))));
customForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const seconds = parseInt(e.target.minutes.value, 10) * 60;
    setTimer(seconds);
    e.target.reset();
})

