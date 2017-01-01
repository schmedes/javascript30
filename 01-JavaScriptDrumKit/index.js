const timers = {};

const handleKeyDown = event =>{
     playSound(event.keyCode);
}

const playSound = keyCode =>{
     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
     const btn = document.querySelector(`.key[data-key="${keyCode}"]`);
     if(!audio) return;
     btn.classList.add('playing');
     audio.currentTime = 0;
     audio.play();
     if(timers[keyCode] && timers[keyCode].clearTimeOut) {
         timers[keyCode].clearTimeOut();
     }
    timers[keyCode] = setTimeout(()=> btn.classList.remove('playing'), 300);
}
const buttons = document.querySelectorAll('.key');
buttons.forEach(el=> el.addEventListener('click',()=>playSound(el.getAttribute('data-key'))));
window.addEventListener('keypress', handleKeyDown);