let btnNext = document.getElementById("btn-next");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");
let userPass = document.getElementById("user-pass");
let user;
let users = [];

btnNext.addEventListener("click", submit);

if (localStorage.getItem("user-data")) {
  users = JSON.parse(localStorage.getItem("user-data"));
} else {
  users = [];
}

function submit() {
  user = {
    name: userName.value,
    email: userEmail.value,
    password: userPass.value,
  };
  users.push(user);
  localStorage.setItem("user-data", JSON.stringify(users));
  clear();
  location.href = "../index2.html";
}

function clear() {
  let input = document.getElementsByClassName("form-control");
  for (i = 0; i < input.length; i++) {
    input[i].value = "";
  }
}
