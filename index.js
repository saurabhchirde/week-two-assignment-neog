const chipCloseBtn = document.querySelectorAll(".chip-close-btn");
const textValue = document.querySelector("input");

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
