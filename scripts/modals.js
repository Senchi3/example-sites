var modals = document.querySelectorAll(".modal");
var openButtons = document.querySelectorAll("#modal-open");
var closeButtons = document.querySelectorAll(".modal-close");

for (let i = 0; i < modals.length; i++) {
  console.log(modals[i]);
  console.log(openButtons[i]);
  console.log(openButtons[i]);

  openButtons[i].addEventListener("click", function () {
    modals[i].classList.add("is-active");
  });

  closeButtons[i].addEventListener("click", function () {
    modals[i].classList.remove("is-active");
  });
}
