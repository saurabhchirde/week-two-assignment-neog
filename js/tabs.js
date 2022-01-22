const exploreBtn= document.querySelector(".explore-btn")
const tripsBtn= document.querySelector(".trips-btn")

exploreBtn.addEventListener("click",()=>{
    document.querySelector(".explore").classList.remove("hide");
    document.querySelector(".tab-trips").classList.add("hide");
})

tripsBtn.addEventListener("click",()=>{
    document.querySelector(".explore").classList.add("hide");
    document.querySelector(".tab-trips").classList.remove("hide");
})