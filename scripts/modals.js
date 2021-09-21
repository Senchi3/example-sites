var modals = document.getElementsByClassName("modal");
var modalBackgrounds = document.getElementsByClassName("modal-background");
var openButtons = document.getElementsByClassName("modal-open");
var closeButtons = document.getElementsByClassName("modal-close");

for (let i = 0; i < modals.length; i++) {
  openButtons[i].addEventListener("click", function () {
    modals[i].classList.add("is-active");
  });

  closeButtons[i].addEventListener("click", function () {
    modals[i].classList.remove("is-active");
  });

  modalBackgrounds[i].addEventListener("click", function () {
    modals[i].classList.remove("is-active");
  });
}
