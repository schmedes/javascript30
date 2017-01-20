const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

const getVideoStream = _ => {
    navigator.getUserMedia({video: true, audio: false})
             .then(stream => {
                 video.src = window.URL.createObjectURL(stream);
                 video.play();
             })
             .catch(err => console.log(err));
}

const paint = _ => {
    const { videoWidth, videoHeight} = video;
    canvas.width = videoWidth;
    canvas.height = videoHeight;

    return setInterval( ()=> {
        ctx.drawImage(0, 0, width, height);

    }, 16)
}