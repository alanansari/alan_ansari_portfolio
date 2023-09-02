let box = document.getElementById('box');
const body = document.querySelector('body');
const root = document.documentElement;
 
document.onmousemove = evt => {
    let x = (evt.clientX);
    let y = (evt.clientY);
 
    root.style.setProperty('--x', x+'px');
    root.style.setProperty('--y', y+'px');
};

let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function randomChar() {
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}

function randomSrting() {
    let string = '';
    for(let i = 0; i < 6000; i++) {
        string += randomChar();
    }
    return string;
}

body.onmousemove = function(e) {
    box.innerHTML = randomSrting();
}

body.onscroll = function(e) {
    box.innerHTML = randomSrting();
}