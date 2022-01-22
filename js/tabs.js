const exploreBtn= document.querySelector(".explore-btn");
const tripsBtn= document.querySelector(".trips-btn");
const flightsBtn= document.querySelector(".flight-btn")

exploreBtn.addEventListener("click",()=>{
    document.querySelector(".tab-explore").classList.remove("hide");
    document.querySelector(".tab-trips").classList.add("hide");

    exploreBtn.classList.add("tab-active");
    tripsBtn.classList.remove("tab-active");
    flightsBtn.classList.remove("tab-active");
});

tripsBtn.addEventListener("click",()=>{
    document.querySelector(".tab-explore").classList.add("hide");
    document.querySelector(".tab-trips").classList.remove("hide");
    document.querySelector("tab-active-explore").classList.add("tab-active-trips");
    document.querySelector("tab-active-explore").classList.remove("tab-active-flights");

    exploreBtn.classList.remove("tab-active");
    tripsBtn.classList.add("tab-active");
    flightsBtn.classList.remove("tab-active");
});

flightsBtn.addEventListener("click",()=>{
    document.querySelector(".tab-explore").classList.add("hide");
    document.querySelector(".tab-trips").classList.add("hide");
    document.querySelector(".tab-flight").classList.remove("hide");
    document.querySelector("tab-active-explore").classList.add("tab-active-flights");
    document.querySelector("tab-active-explore").classList.remove("tab-active-trips");

    exploreBtn.classList.remove("tab-active");
    tripsBtn.classList.remove("tab-active");
    flightsBtn.classList.add("tab-active");
});