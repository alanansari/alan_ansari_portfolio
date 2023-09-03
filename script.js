const box = document.getElementById('box');
const body = document.querySelector('body');

let string = 'abcdefghijklmnopqrstuvwxyz大家好艾伦安萨здвтвйтэтлннनमस्तेमैंअपनेसपनेछोड़दोरमरजाओडेवलपरहूंиABCDEFGHIJKLMNOPQRSTUVWXYZこんにちはアラン夢を諦めて死んでくださいアンサリです';

function randomChar() {
    let random = Math.floor(Math.random() * string.length);
    return string[random];
}

function randomSrting() {
    let string = '';
    for(let i = 0; i < 7000; i++) {
        string += randomChar();
    }
    return string;
}

body.onscroll = function(e) {
    box.innerText = randomSrting();
}