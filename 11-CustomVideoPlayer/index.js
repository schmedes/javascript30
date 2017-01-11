const videoPlayer = (videoDOM) =>({
    DOM: videoDOM,
    setVolume: (x)=> videoDOM.volume = x,
    setSpeed: (x)=> videoDOM.playbackRate = x,
    playPause: ()=> videoDOM.paused ? videoDOM.play() : videoDOM.pause(),
    skip: (x)=> videoDOM.currentTime += x,
    updateProgress: (domNode) => {
          domNode.style.flexBasis = `${(videoDOM.currentTime/videoDOM.duration)*100}%`;
        },
    buttonUpdate: (domNode) => {
        domNode.textContent = this.paused ? '►' : '❚ ❚';
    }
});



const video = videoPlayer(document.querySelector('video'));
video.DOM.addEventListener('timeupdate',()=> video.updateProgress(document.querySelector('.progress__filled')));
video.DOM.addEventListener('click', video.playPause);
video.DOM.addEventListener('play', ()=> video.buttonUpdate(document.querySelector('.toggle')));
video.DOM.addEventListener('pause', ()=> video.buttonUpdate(document.querySelector('.toggle')));

document.querySelector('.player__button').addEventListener('click', video.playPause);
document.querySelector('input[name="volume"]').addEventListener('change', (e)=> video.setVolume(e.target.value));
document.querySelector('input[name="playbackRate"]').addEventListener('change', (e)=> video.setSpeed(e.target.value));
Array.from(document.querySelectorAll('button[data-skip]')).map(n=> n.addEventListener('click', ()=>video.skip(parseInt(n.getAttribute('data-skip'), 10))));