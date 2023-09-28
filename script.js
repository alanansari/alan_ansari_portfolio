let toggle = document.getElementById('toggle');
let r = document.querySelector(':root');
let dark = true;
let expand = false;
let body = document.getElementsByTagName('body')[0];


toggle.onclick = function() {
    toggle.removeChild(toggle.firstElementChild);
    const newToggle = document.createElement('i');
    newToggle.id = 'toggle';
    if (dark) {
        newToggle.classList.add('fa-solid', 'fa-moon');
        r.style.setProperty('--primary', '#fcfcfc');
        r.style.setProperty('--tertiary', '#1a1c1d');
        r.style.setProperty('--text1', '#141414');
    } else {
        newToggle.classList.add('fa-solid', 'fa-sun');
        r.style.setProperty('--primary', '#1a1c1d');
        r.style.setProperty('--tertiary', '#d9d6d1');
        r.style.setProperty('--text1', '#d9d6d1');
    }
    toggle.appendChild(newToggle);
    dark = !dark;
}

let ham = document.getElementById('ham');
let nav = document.getElementsByTagName('nav')[0];

ham.onclick = function() {
    ham.removeChild(ham.firstElementChild);
    const newHam = document.createElement('i');
    newHam.id = 'ham';
    if(expand===false){
        newHam.classList.add('fa-solid', 'fa-x');
        nav.style.display = 'flex';
    }else{
        newHam.classList.add('fa-solid', 'fa-bars');
        nav.style.display = 'none';
    }
    ham.appendChild(newHam);
    expand = !expand;
}

body.onresize = function() {
    if (body.clientWidth > 820) {
        nav.style.display = 'flex';
        expand = true;
    } else {
        nav.style.display = 'none';
        expand = false;
    }
}