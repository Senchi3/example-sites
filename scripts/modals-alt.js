var modals = document.getElementsByClassName("modal");
var openButtons = document.getElementsByClassName("modal-open");
var closeButtons = document.getElementsByClassName("modal-close");
var modalBackgrounds = document.getElementsByClassName("modal-background")

for (let i = 0; i < openButtons.length; i++) {

  const smallIndex = (i + 1) % modals.length

  openButtons[i].addEventListener("click", function () {
    modals[smallIndex].classList.add("is-active");
  });

  closeButtons[smallIndex].addEventListener("click", function () {
    modals[smallIndex].classList.remove("is-active");
  });

  modalBackgrounds[smallIndex].addEventListener("click", function () {
    modals[smallIndex].classList.remove("is-active");
  });

}