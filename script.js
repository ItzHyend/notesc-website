const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

// Check saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeIcon.classList.replace("fa-moon", "fa-sun");
} else {
    document.body.classList.remove("light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
}

// Toggle Theme
themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");

    } else {

        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");

    }

});
