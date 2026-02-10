document.addEventListener("DOMContentLoaded", function () {

  console.log("Script loaded successfully");

  const signBtn = document.getElementById("sign-btn");
  const signModal = document.getElementById("sign");
  const closeBtn = document.getElementById("close");

  signBtn.addEventListener("click", function () {
    signModal.style.display = "block";
  });

  closeBtn.addEventListener("click", function () {
    signModal.style.display = "none";
  });

  const signForm = document.getElementById("signForm");
  const emailInput = document.getElementById("email");
  const message = document.getElementById("message");

  signForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (emailInput.value === "") {
      message.textContent = "Please enter an email address";
      message.style.color = "red";
    } else {
      message.textContent = "Email submitted successfully!";
      message.style.color = "lightgreen";
    }
  });

});