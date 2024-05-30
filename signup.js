const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("#form");

function formValidation(e) {
  e.preventDefault();
  fullnameValue = fullName.value.trim();
  emailValue = email.value.trim();
  passwordValue = fullName.value.trim();

  if (fullnameValue === "") {
    const fullnameCon = fullName.parentElement;
    const span = fullnameCon.querySelector("span");
    span.textContent = "Full Name can not be empty";
    fullnameCon.classList.add("error");
  }else{
    const fullnameCon = fullName.parentElement;
    fullnameCon.classList.add("success");
    
  }
}
form.addEventListener('submit', formValidation)