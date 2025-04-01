let emailInput = document.querySelector("#email-input");
let button = document.querySelector(".send-button");

button.addEventListener("click", (e) => {
    e.preventDefault()
    const emailValue = emailInput.value;
    if (!validateEmail(emailValue)) {
        console.log("hello")
        document.querySelector("small").style.display = "inline"
        emailInput.style.outline = "1px solid hsl(354, 100%, 66%)";
    } else {
        location.reload()
    }
})


function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}