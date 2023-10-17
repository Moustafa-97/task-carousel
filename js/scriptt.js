let userInfo = JSON.parse(localStorage.getItem("user-data"));
let helloText = document.getElementById("hello");
let clickAnywhere = document.getElementById("click")

for (i = 0; i < userInfo.length; i++) {
  console.log(userInfo[i].name);
  helloText.innerHTML="Hello "+userInfo[i].name + ","
}
clickAnywhere.addEventListener("click" , goToMain)
function goToMain(){
    location.href = "../index.html"
}
