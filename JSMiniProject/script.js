const btn = document.querySelector(".ai-assistant-btn");
const chat = document.querySelector(".chatbox");

btn.addEventListener("click", function(){
    chat.style.display =
        chat.style.display === "flex" ? "none" : "flex";
});