const box = document.getElementById('box');
const body = document.querySelector('body');

let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789*()^%$@!~`{}[]|\/?.,><;:+=-_';

function randomChar() {
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}

function randomSrting() {
    let string = '';
    for(let i = 0; i < 10000; i++) {
        string += randomChar();
    }
    return string;
}

body.onmousemove = function(e) {
    box.innerText = randomSrting();
}

body.onscroll = function(e) {
    box.innerText = randomSrting();
}