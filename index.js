const chipCloseBtn = document.querySelectorAll(".chip-close-btn");
const textValue = document.querySelector("input");
const chipEle = document.querySelector(".chips-element");

const heartAll = document.querySelectorAll(".heart");
const shareAll = document.querySelectorAll(".share");
const optAll = document.querySelectorAll(".opt");

// chips

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

// card layout change with btn
const cardone = document.querySelector(".card-one");
const cardtwo = document.querySelector(".card-two");
const cardthree = document.querySelector(".card-three");
const cardfour = document.querySelector(".card-four");
const cardfive = document.querySelector(".card-five");
const cardsix = document.querySelector(".card-six");
const comCard = document.querySelectorAll(".comCard");

cardone.addEventListener("click", () => {
  comCard[0].classList.add("card1-container");
  comCard[0].classList.remove("card2-container", "card3-container", "card4-container", "card5-container", "card6-container");
  comCard[1].classList.add("card1-body");
  comCard[1].classList.remove("card2-body", "card3-body", "card4-body", "card5-body", "card6-body");
  comCard[2].classList.add("card1-img");
  comCard[2].classList.remove("card2-img", "card3-img", "card4-img", "card5-img", "card6-img");
  comCard[3].classList.add("card1-text");
  comCard[3].classList.remove("card2-text", "card3-text", "card4-text", "card5-text", "card6-text");
  comCard[4].classList.add("card1-nav");
  comCard[4].classList.remove("card2-nav", "card3-nav", "card4-nav", "card5-nav", "card6-nav");
  comCard[5].classList.add("card1-btn");
  comCard[5].classList.remove("card2-btn", "card3-btn", "card4-btn", "card5-btn", "card6-btn");
  comCard[6].classList.add("card1-icons");
  comCard[6].classList.remove("card2-icons", "card3-icons", "card4-icons", "card5-icons", "card6-icons");
  
})
cardtwo.addEventListener("click", () => {
  comCard[0].classList.add("card2-container");
  comCard[0].classList.remove("card1-container", "card3-container", "card4-container", "card5-container", "card6-container");
  comCard[1].classList.add("card2-body");
  comCard[1].classList.remove("card1-body", "card3-body", "card4-body", "card5-body", "card6-body");
  comCard[2].classList.add("card2-img");
  comCard[2].classList.remove("card1-img", "card3-img", "card4-img", "card5-img", "card6-img");
  comCard[3].classList.add("card2-text");
  comCard[3].classList.remove("card1-text", "card3-text", "card4-text", "card5-text", "card6-text");
  comCard[4].classList.add("card2-nav");
  comCard[4].classList.remove("card1-nav", "card3-nav", "card4-nav", "card5-nav", "card6-nav");
  comCard[5].classList.add("card2-btn");
  comCard[5].classList.remove("card1-btn", "card3-btn", "card4-btn", "card5-btn", "card6-btn");
  comCard[6].classList.add("card2-icons");
  comCard[6].classList.remove("card1-icons", "card3-icons", "card4-icons", "card5-icons", "card6-icons");
})
cardthree.addEventListener("click", () => {
  comCard[0].classList.add("card3-container");
  comCard[0].classList.remove("card1-container", "card2-container", "card4-container", "card5-container", "card6-container");
  comCard[1].classList.add("card3-body");
  comCard[1].classList.remove("card1-body", "card4-body", "card2-body", "card5-body", "card6-body");
  comCard[2].classList.add("card3-img");
  comCard[2].classList.remove("card1-img", "card4-img", "card2-img", "card5-img", "card6-img");
  comCard[3].classList.add("card3-text");
  comCard[3].classList.remove("card1-text", "card4-text", "card2-text", "card5-text", "card6-text");
  comCard[4].classList.add("card3-nav");
  comCard[4].classList.remove("card1-nav", "card4-nav", "card2-nav", "card5-nav", "card6-nav");
  comCard[5].classList.add("card3-btn");
  comCard[5].classList.remove("card1-btn", "card4-btn", "card2-btn", "card5-btn", "card6-btn");
  comCard[6].classList.add("card3-icons");
  comCard[6].classList.remove("card1-icons", "card4-icons", "card2-icons", "card5-icons", "card6-icons");
})
cardfour.addEventListener("click", () => {
  comCard[0].classList.add("card4-container");
  comCard[0].classList.remove("card1-container", "card3-container", "card2-container", "card5-container", "card6-container");
  comCard[1].classList.add("card4-body");
  comCard[1].classList.remove("card1-body", "card3-body", "card5-body", "card2-body", "card6-body");
  comCard[2].classList.add("card4-img");
  comCard[2].classList.remove("card1-img", "card3-img", "card5-img", "card2-img", "card6-img");
  comCard[3].classList.add("card4-text");
  comCard[3].classList.remove("card1-text", "card3-text", "card5-text", "card2-text", "card6-text");
  comCard[4].classList.add("card4-nav");
  comCard[4].classList.remove("card1-nav", "card3-nav", "card5-nav", "card2-nav", "card6-nav");
  comCard[5].classList.add("card4-btn");
  comCard[5].classList.remove("card1-btn", "card3-btn", "card5-btn", "card2-btn", "card6-btn");
  comCard[6].classList.add("card4-icons");
  comCard[6].classList.remove("card1-icons", "card3-icons", "card5-icons", "card2-icons", "card6-icons");
})
cardfive.addEventListener("click", () => {
  comCard[0].classList.add("card5-container");
  comCard[0].classList.remove("card1-container", "card3-container", "card4-container", "card2-container", "card6-container");
  comCard[1].classList.add("card5-body");
  comCard[1].classList.remove("card1-body", "card3-body", "card4-body", "card6-body", "card2-body");
  comCard[2].classList.add("card5-img");
  comCard[2].classList.remove("card1-img", "card3-img", "card4-img", "card6-img", "card2-img");
  comCard[3].classList.add("card5-text");
  comCard[3].classList.remove("card1-text", "card3-text", "card4-text", "card6-text", "card2-text");
  comCard[4].classList.add("card5-nav");
  comCard[4].classList.remove("card1-nav", "card3-nav", "card4-nav", "card6-nav", "card2-nav");
  comCard[5].classList.add("card5-btn");
  comCard[5].classList.remove("card1-btn", "card3-btn", "card4-btn", "card6-btn", "card2-btn");
  comCard[6].classList.add("card5-icons");
  comCard[6].classList.remove("card1-icons", "card3-icons", "card4-icons", "card6-icons", "card2-icons");
})
cardsix.addEventListener("click", () => {
  comCard[0].classList.add("card6-container");
  comCard[0].classList.remove("card1-container", "card3-container", "card4-container", "card5-container", "card2-container");
  comCard[1].classList.add("card6-body");
  comCard[1].classList.remove("card1-body", "card3-body", "card4-body", "card5-body", "card2-body");
  comCard[2].classList.add("card6-img");
  comCard[2].classList.remove("card1-img", "card3-img", "card4-img", "card5-img", "card2-img");
  comCard[3].classList.add("card6-text");
  comCard[3].classList.remove("card1-text", "card3-text", "card4-text", "card5-text", "card2-text");
  comCard[4].classList.add("card6-nav");
  comCard[4].classList.remove("card1-nav", "card3-nav", "card4-nav", "card5-nav", "card2-nav");
  comCard[5].classList.add("card6-btn");
  comCard[5].classList.remove("card1-btn", "card3-btn", "card4-btn", "card5-btn", "card2-btn");
  comCard[6].classList.add("card6-icons");
  comCard[6].classList.remove("card1-icons", "card3-icons", "card4-icons", "card5-icons", "card2-icons");
})

// card nav
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