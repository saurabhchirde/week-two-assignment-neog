const chipCloseBtn = document.querySelectorAll(".chip-close-btn");
const textValue = document.querySelector("input");
const chipEle = document.querySelector(".chips-element");

let chipsItems = ["Apple", "Banana", "Milkshake"];

function remove(i) {
  chipsItems = chipsItems.filter((item) => chipsItems.indexOf(item) != i);
  render();
}

function render() {
  chipEle.innerHTML = "";
  chipsItems.map((item, index) => {
    chipEle.innerHTML += `<div class="chips-text">${item}         
<a href="javascript: remove(${index})"><button class="chip-close-btn"><i class="fas fa-times-circle"></i>
    </button></a>
  </div>`;
  });
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    if (textValue.value === "") alert("Enter some input");
    else {
      const chipText = textValue.value;
      chipsItems.push(chipText);
      render();
      textValue.value = "";
    }
  }
});

window.onload = function () {
  render();
  textValue.focus();
};