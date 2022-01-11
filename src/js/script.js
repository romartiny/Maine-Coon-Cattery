// BurgerMenu

var IconMenu = document.querySelector(".icon-menu");
var IconMenuClose = document.querySelector(".icon-menu-close");
var HeaderMenuButton = document.querySelector(".header__menu-button");
var HeaderMenu = document.querySelector(".header__menu-list");

HeaderMenuButton.addEventListener("click", function() {
  HeaderMenu.classList.toggle("hide-element-mob");
  IconMenu.classList.toggle("hide-element-mob");
  IconMenuClose.classList.toggle("hide-element-mob")
})

// FAQ

var AnswersButtonFirst = document.querySelector(".answers__button-first");
var AnswersButtonSecond = document.querySelector(".answers__button-second");
var AnswersButtonThird = document.querySelector(".answers__button-third");
var AnswersButtonFourth = document.querySelector(".answers__button-fourth");
var AnswersInfoFirst = document.querySelector(".answers__info-first");
var AnswersInfoSecond = document.querySelector(".answers__info-second");
var AnswersInfoThird = document.querySelector(".answers__info-third");
var AnswersInfoFourth = document.querySelector(".answers__info-fourth");
var AnswersQuestion = document.querySelector(".answers__question");

AnswersButtonFirst.addEventListener("click", function() {
  AnswersInfoFirst.classList.toggle("hide-element");
})

AnswersButtonSecond.addEventListener("click", function() {
  AnswersInfoSecond.classList.toggle("hide-element");
})

AnswersButtonThird.addEventListener("click", function() {
  AnswersInfoThird.classList.toggle("hide-element");
})

AnswersButtonFourth.addEventListener("click", function() {
  AnswersInfoFourth.classList.toggle("hide-element");
})

// MODAL WINDOW

var Modal = document.querySelector(".modal");
var AnswersButton = document.querySelector(".answers__btn");
var ModalClose = document.querySelector(".modal__close");

AnswersButton.addEventListener("click", function() {
  Modal.classList.toggle("hide-element");
})

ModalClose.addEventListener("click", function() {
  Modal.classList.toggle("hide-element");
})
