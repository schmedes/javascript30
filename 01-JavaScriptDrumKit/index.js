/*
1. Challenge DrumKit
- map each sound to a specific button
- add visual animation to buttons pressed
*/

// container to store the timeouts
const timers = {};
// wrapper around keydown event
const handleKeyDown = event =>{
     playSound(event.keyCode);
}

const playSound = keyCode =>{
    // get references for the specific dom elements
     const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
     const btn = document.querySelector(`.key[data-key="${keyCode}"]`);
     // return if there is no soundfile for the pressed button
     if(!audio) return;
     // reset time; sounds are "spammable" 
     audio.currentTime = 0;
     audio.play();
     // reset all current timeouts
     if(timers[keyCode] && timers[keyCode].clearTimeOut) {
         timers[keyCode].clearTimeOut();
     }
     btn.classList.add('playing');
     // set specific timeout for the pressed button
    timers[keyCode] = setTimeout(()=> btn.classList.remove('playing'), 300);
}

const buttons = document.querySelectorAll('.key');
// map each to button the correct sound
buttons.forEach(el=> el.addEventListener('click',()=>playSound(el.getAttribute('data-key'))));
window.addEventListener('keypress', handleKeyDown);