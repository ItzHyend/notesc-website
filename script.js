hamburgar = document.querySelector(".hamburgar");
hamburgar.onclick = function () {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

let menu_icon_box = document.querySelector(".nav-bar");
let box = document.querySelector(".nav-bar");


menu_icon_box.onclick = function () {
    menu_icon_box.classList.toggle("active");
    box.classList.toggle("active_box");
}