let toggle = document.getElementById('toggle');
let r = document.querySelector(':root');
let dark = true;

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