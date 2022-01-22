const snackbarOne =document.querySelector(".snackbar-baseline-btn");
const snackbarTwo =document.querySelector(".snackbar-leading-btn");
const snackbarThree =document.querySelector(".snackbar-stacked-btn");

snackbarOne.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.remove("hide");
    document.querySelector(".snackbar-leading-container").classList.add("hide");
    document.querySelector(".snackbar-stacked-container").classList.add("hide");
});

snackbarTwo.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.add("hide");
    document.querySelector(".snackbar-leading-container").classList.remove("hide");
    document.querySelector(".snackbar-stacked-container").classList.add("hide");
});

snackbarThree.addEventListener("click",()=>{
    document.querySelector(".snackbar-baseline-container").classList.add("hide");
    document.querySelector(".snackbar-leading-container").classList.add("hide");
    document.querySelector(".snackbar-stacked-container").classList.remove("hide");
});