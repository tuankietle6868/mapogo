// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Theme mode light & dark
// let theme        = document.getElementById('theme');
// let themeRewards = document.getElementById('themeRewards');
// let light        = document.getElementById('light');
// let dark         = document.getElementById('dark');
// // Check 

// function setTheme() {
//     if (isDarkMode == 'light') {
//         theme.href          = './acess/css/dark.css';
//         themeRewards.href   = './acess/css/dark.css';
//         light.style.display = 'block';
//         dark.style.display  = 'none';
//         localStorage.setItem('theme', 'dark');
//     } else {
//         theme.href          = './acess/css/light.css';
//         themeRewards.href   = './acess/css/light.css';
//         light.style.display = 'none';
//         dark.style.display  = 'block';
//         localStorage.setItem('theme', 'light');
//     }
// }

const themeLink = document.getElementById('theme-link');

let isDarkMode = localStorage.getItem('theme') === 'dark';
setTheme(isDarkMode ? 'dark' : 'light');


function mode() {
    isDarkMode = !isDarkMode;
    setTheme(isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Lưu trạng thái vào localStorage
};

// Hàm thiết lập giao diện theo theme
function setTheme(theme) {
    themeLink.href = theme === 'dark' ? './acess/css/dark.css' : './acess/css/light.css';
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