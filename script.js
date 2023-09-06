const box = document.getElementById('box');
const body = document.querySelector('body');

let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

function randomChar() {
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}

function randomSrting() {
    let string = '';
    for(let i = 0; i < 8000; i++) {
        string += randomChar();
    }
    return string;
}

body.onscroll = function(e) {
    box.innerText = randomSrting();
}