// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Them light & dark

const themeLink = document.getElementById('theme-link');
const bgStar    = document.getElementById('bgStar');

let isDarkMode = localStorage.getItem('theme') === 'dark';
setTheme(isDarkMode ? 'dark' : 'light');


function mode() {
    isDarkMode = !isDarkMode;
    setTheme(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

// Setup interface theme
function setTheme(theme) {
    themeLink.href = theme === 'dark' ? './acess/css/dark.css' : './acess/css/light.css';
    bgStar.href    = theme === 'dark' ? './acess/css/bg-star.css' : '';
}

// iframe Youtube
let ourstory = document.getElementById('ourstory');
let videoOpen;

function modal() {
    ourstory.style.display = "block";
    videoOpen = false;
}

window.onclick = function(event) {
    if (event.target == ourstory) {
        ourstory.style.display = "none";
        toggleVideo();
        videoOpen = true;
    }
}

function videoExit() {
    ourstory.style.display = "none";
    toggleVideo();
    videoOpen = true;
}

let iframe = document.getElementById('youtube');

function toggleVideo() {
    if (videoOpen) {
        stopVideo();
    } else {
        iframe.src = iframe.src;
    }
    videoOpen = !videoOpen;
}
// Send API stop vieo YTB
function stopVideo() {
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
}
