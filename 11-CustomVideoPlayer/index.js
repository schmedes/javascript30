const videoPlayer = (videoDOM) =>({
    setVolume: (x)=> videoDOM.volume = x,
    setSpeed: (x)=> videoDOM.playbackRate = x,
    playPause: ()=> videoDOM.paused ? videoDOM.play() : videoDOM.pause(),
    skip: (x)=> videoDOM.currentTime += x,
    getProgress: ()=> ({current: videoDOM.currentTime,
                        length: videoDOM.duration
    }), 
});

const updateProgress = (domNode, v) => {
    return setInterval(()=>{
        if(!v.paused) {
          const {current, length} = v.getProgress();
          domNode.innerHTML = `${current}/${length}`;
        }
    }, 1000)
}

const video = videoPlayer(document.querySelector('video'));
updateProgress(document.querySelector('.progress__filled'), video);

document.querySelector('.player__button').addEventListener('click', video.playPause);
document.querySelector('input[name="volume"]').addEventListener('change', (e)=> video.setVolume(e.target.value));
document.querySelector('input[name="playbackRate"]').addEventListener('change', (e)=> video.setSpeed(e.target.value));
Array.from(document.querySelectorAll('button[data-skip]')).map(n=> n.addEventListener('click', ()=>video.skip(parseInt(n.getAttribute('data-skip'), 10))));