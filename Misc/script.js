document.addEventListener("DOMContentLoaded", function () {

    const themeBtn = document.getElementById("themeBtn");
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeBtn.textContent = "☀️ Light Mode";
    }

    themeBtn.addEventListener("click", function () {
        body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
            themeBtn.textContent = "☀️ Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            themeBtn.textContent = "🌙 Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

});