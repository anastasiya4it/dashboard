const menuBtn = document.querySelectorAll(".burger__list");
const menuMobile = document.querySelectorAll(".header");
const body = document.querySelector("body");

menuBtn[0].addEventListener("click", function () {
  if (menuBtn[0].checked) {
    menuMobile[0].classList.add("header--active");
    menuMobile[0].classList.remove("header--diactive");
  } else {
    menuMobile[0].classList.remove("header--active");
    menuMobile[0].classList.add("header--diactive");
  }
});
