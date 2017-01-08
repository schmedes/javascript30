const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');
context.width = window.innerWidth;
context.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 5;
context.strokeStyle = '#121a4e';

let drawing = false;
let x = 0;
let y = 0;

const draw = event =>{
    if(!drawing) return;
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    [x, y] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousedown', (e)=>{
    drawing = true;
    [x, y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> drawing = false);
canvas.addEventListener('mouseout', ()=> drawing = false);
