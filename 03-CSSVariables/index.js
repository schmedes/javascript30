//get dom elements
const cssVars = document.querySelector('.gradient');
const inputElements = document.querySelectorAll('input');

const changeVar = (name, value) =>{   
    cssVars.style.setProperty(`--${name}`, value);
    console.log(value);
}

inputElements.forEach(el=> {
    el.addEventListener('change',(e)=> changeVar(el.getAttribute('name'), e.target.value));
});
