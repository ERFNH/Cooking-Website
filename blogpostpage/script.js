const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const slider = document.querySelector(".suggestions-grid");
const cardCount = slider.children.length;

let currentPosition = Number(localStorage.getItem("sliderPosition")) || 0;

for (let i = 0; i < currentPosition; i++) {
  slider.appendChild(slider.firstElementChild);
}

rightBtn.addEventListener("click", function () {
  slider.appendChild(slider.firstElementChild);

  currentPosition++;

  if (currentPosition >= cardCount) {
    currentPosition = 0;
  }

  localStorage.setItem(
    "sliderPosition",
    currentPosition
  );
});

leftBtn.addEventListener("click", function () {
  slider.prepend(slider.lastElementChild);

  currentPosition--;

  if (currentPosition < 0) {
    currentPosition = cardCount - 1;
  }

  localStorage.setItem(
    "sliderPosition",
    currentPosition
  );
});