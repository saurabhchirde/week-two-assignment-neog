const chipCloseBtn = document.querySelectorAll(".chip-close-btn");
const textValue = document.querySelector("input");

const heartAll = document.querySelectorAll(".heart");
const shareAll = document.querySelectorAll(".share");
const optAll = document.querySelectorAll(".opt");

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (textValue.value === "") alert("Enter some input");
    else {
      const chipText = textValue.value;
      document.querySelector(
        ".chips-element"
      ).innerHTML += `<div class="chips-text">${chipText}         
          <button class="chip-close-btn">
            <i class="fas fa-times-circle"></i>
          </button>
        </div>`;
    }
  }
});

heartAll[0].addEventListener("click", () => {
  heartAll[0].classList.toggle("heart-after");
  heartAll[0].classList.add("icon-clicked");
  shareAll[0].classList.remove("icon-clicked");
  optAll[0].classList.remove("icon-clicked");
});
shareAll[0].addEventListener("click", () => {
  shareAll[0].classList.add("icon-clicked");
  optAll[0].classList.remove("icon-clicked");
  heartAll[0].classList.remove("icon-clicked");
});
optAll[0].addEventListener("click", () => {
  shareAll[0].classList.remove("icon-clicked");
  optAll[0].classList.add("icon-clicked");
  heartAll[0].classList.remove("icon-clicked");
});

heartAll[1].addEventListener("click", () => {
  heartAll[1].classList.toggle("heart-after");
  heartAll[1].classList.add("icon-clicked");
  shareAll[1].classList.remove("icon-clicked");
  optAll[1].classList.remove("icon-clicked");
});
shareAll[1].addEventListener("click", () => {
  shareAll[1].classList.add("icon-clicked");
  optAll[1].classList.remove("icon-clicked");
  heartAll[1].classList.remove("icon-clicked");
});
optAll[1].addEventListener("click", () => {
  shareAll[1].classList.remove("icon-clicked");
  optAll[1].classList.add("icon-clicked");
  heartAll[1].classList.remove("icon-clicked");
});

heartAll[2].addEventListener("click", () => {
  heartAll[2].classList.toggle("heart-after");
  heartAll[2].classList.add("icon-clicked");
  shareAll[2].classList.remove("icon-clicked");
  optAll[2].classList.remove("icon-clicked");
});
shareAll[2].addEventListener("click", () => {
  shareAll[2].classList.add("icon-clicked");
  optAll[2].classList.remove("icon-clicked");
  heartAll[2].classList.remove("icon-clicked");
});
optAll[2].addEventListener("click", () => {
  shareAll[2].classList.remove("icon-clicked");
  optAll[2].classList.add("icon-clicked");
  heartAll[2].classList.remove("icon-clicked");
});
