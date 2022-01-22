const exploreBtn= document.querySelector(".explore-btn");
const tripsBtn= document.querySelector(".trips-btn");
const flightsBtn= document.querySelector(".flight-btn")

exploreBtn.addEventListener("click",()=>{
    console.log("clicked explore");
    document.querySelector(".tab-explore").classList.remove("hide");
    document.querySelector(".tab-trips").classList.add("hide");
});

tripsBtn.addEventListener("click",()=>{
    console.log("clicked trips");
    document.querySelector(".tab-explore").classList.add("hide");
    document.querySelector(".tab-trips").classList.remove("hide");
});

flightsBtn.addEventListener("click",()=>{
    console.log("clicked flight");
    document.querySelector(".tab-explore").classList.add("hide");
    document.querySelector(".tab-trips").classList.add("hide");
});