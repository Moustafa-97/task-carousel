// preLoader

$(window).on("load", function () {
  $(".loader").fadeOut();
  $("#preloader").delay(200).fadeOut("slow");
});

//   loginBtn
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  location.href = "../index1.html";
});

// dropDownMenu
const dropDownBtn = document.getElementById("dropmenu");
let english = document.getElementById("englishLang");
let german = document.getElementById("germanLang");
english.addEventListener("click", function () {
  dropDownBtn.textContent = english.textContent;
});
german.addEventListener("click", function () {
  dropDownBtn.textContent = german.textContent;
});

// firstCarosel

let offerBg = document.getElementById("userOffer");

setInterval(function () {
  offerBg.classList.replace("user-offers", "user-offers1");
}, 4500);
setInterval(function () {
  offerBg.classList.replace("user-offers1", "user-offers");
}, 9500);

// carouselGrape

let nav = document.querySelectorAll("#navProd");
let arrowBtn = document.querySelectorAll(".arrow");
for (let i = 0; i < nav.length; i++) {
  let item = nav[i].querySelector(".myCard");
  let firstContent = item.clientWidth - 350;

  let dragging = false;
  let prevPageX, prevScrollLeft;

  let startDraging = function (x) {
    dragging = true;
    prevPageX = x.pageX;
    prevScrollLeft = nav[i].scrollLeft;
  };

  let stopDraging = function () {
    dragging = false;
  };

  let drag = function (x) {
    if (!dragging) return;
    x.preventDefault();

    let position = x.pageX - prevPageX;
    nav[i].scrollLeft = prevScrollLeft - position;
    console.log(nav[i].scrollLeft);
  };
  nav[i].addEventListener("mousedown", startDraging);
  nav[i].addEventListener("mousemove", drag);
  nav[i].addEventListener("mouseup", stopDraging);

  arrowBtn.forEach((arrowBtn) => {
    arrowBtn.addEventListener("click", function () {
      nav[i].scrollLeft += arrowBtn.id == "left" ? firstContent : -firstContent;
    });
  });
}
$.ajax({
  url: "https://fakestoreapi.com/products",
  success: function (response) {
    displayProd(response);
  },
});

let items = document.querySelectorAll("#test");
let displayProd = function (prod) {
  let temp = "";
  for (let i = 0; i < items.length; i++) {
    for (let i = 0; i < prod.length; i++) {
      temp += `
        <div onclick="getIt(${prod[i].id})" class="myCard">
          <div  class="card1">
            <div class="image">
            <img src="${prod[i].image}" alt="">
            </div>
            <span class="title1">${prod[i].category}</span>
            <span class="price">$${prod[i].price}</span>
            </div>
        </div>
    
        `;
    }
    items[i].innerHTML = temp;
  }
};
function getIt(e) {
  console.log(e);
}

// bagTimer

// Set the date we're counting down to
let countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

// Update the count down every 1 second
let countdownfunction = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result
  let day = document.querySelector("#days span");
  let hour = document.querySelector("#hours span");
  let minute = document.querySelector("#minutes span");
  let second = document.querySelector("#secondes span");
  // console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
  day.textContent = days;
  hour.textContent = hours;
  minute.textContent = minutes;
  second.textContent = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(countdownfunction);
    console.log("COUNTDOWN FINISHED");
  }
}, 1000);

// usersPhotos

let userCards = document.getElementById("userCards");

fetch("https://api.escuelajs.co/api/v1/users")
  .then((x) => x.json())
  .then(function (y) {
    let user = y;
    let temp = ``;
    for (let i = 0; i < 6; i++) {
      temp += `
    
    
        <div class="user-image" style="background-image: url(${user[i].avatar});">
          <div class="details">
            <div class="instagram-icon">
              <i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
            </div>
            <div class="user-name">
              <span>${user[i].name}</span>
            </div>
          </div>
        </div>

    `;
    }
    userCards.innerHTML = temp;
  });
