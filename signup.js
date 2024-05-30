const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const pass = document.querySelector(".password");
const form = document.querySelector("#form");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function formValidation(e) {
  e.preventDefault();
  fullnameValue = fullName.value.trim();
  emailValue = email.value.trim();
  passValue = pass.value.trim();

  if (fullnameValue === "") {
    const fullnameCon = fullName.parentElement;
    const span = fullnameCon.querySelector("span");
    span.textContent = "Full Name can not be empty";
    fullnameCon.classList.add("error");
  } else {
    const fullnameCon = fullName.parentElement;
    fullnameCon.classList.add("success");
  }
  if (emailValue === "") {
    const emailCon = email.parentElement;
    const span = emailCon.querySelector("span");
    span.textContent = "Email can not be empty";
    emailCon.classList.add("error");
  } else if (emailRegex.test(emailValue)) {
    const emailCon = email.parentElement;
    emailCon.classList.add("success");
  } else {
    const emailCon = email.parentElement;
    const span = emailCon.querySelector("span");
    span.textContent = "This does not look like an email";
    emailCon.classList.add("error");
  }
  if (passValue === "") {
    const passCon = pass.parentElement;
    const span = passCon.querySelector("span");
    span.textContent = "This can not be empty";
    passCon.classList.add("error");
  } else if (passValue.length <= 4) {
    const passCon = pass.parentElement;
    const span = passCon.querySelector("span");
    span.textContent = "password can not be less than 4";
    passCon.classList.add("error");
  } else {
    const passCon = pass.parentElement;
    passCon.classList.add("success");
  }
}
form.addEventListener("submit", formValidation);
