var modals = document.getElementsByClassName("modal");
var openButtons = document.getElementsByClassName("modal-open");
var closeButtons = document.getElementsByClassName("modal-close");

console.log(modals);
console.log(openButtons);
console.log(closeButtons);

for (let i = 0; i < modals.length; i++) {
  console.log(modals[i]);
  console.log(openButtons[i]);
  console.log(closeButtons[i]);

  openButtons[i].addEventListener("click", function () {
    modals[i].classList.add("is-active");
  });

  closeButtons[i].addEventListener("click", function () {
    modals[i].classList.remove("is-active");
  });
}
