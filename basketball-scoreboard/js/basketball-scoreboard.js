//Home Scoreboard
let homeCount = 0;
let homeDisplay = document.querySelector(".home-score");
let homeBtn1 = document.querySelector(".btn-home1");
let homeBtn2 = document.querySelector(".btn-home2");
let homeBtn3 = document.querySelector(".btn-home3");

homeBtn1.addEventListener("click", () => {
  homeCount +=1 ;
  homeDisplay.innerHTML =homeCount;
})

homeBtn2.addEventListener("click", () => {
  homeCount +=2 ;
  homeDisplay.innerHTML =homeCount;
})

homeBtn3.addEventListener("click", () => {
  homeCount +=3 ;
  homeDisplay.innerHTML =homeCount;
})

// Visitor Scoreboard

let visitorCount = 0;
let visitorDisplay = document.querySelector(".visitor-score");
let visitorBtn1 = document.querySelector(".btn-visitor1");
let visitorBtn2 = document.querySelector(".btn-visitor2");
let visitorBtn3 = document.querySelector(".btn-visitor3");

visitorBtn1.addEventListener("click", () => {
  visitorCount +=1 ;
  visitorDisplay.innerHTML =visitorCount;
})

visitorBtn2.addEventListener("click", () => {
  visitorCount +=2 ;
  visitorDisplay.innerHTML =visitorCount;
})

visitorBtn3.addEventListener("click", () => {
  visitorCount +=3 ;
  visitorDisplay.innerHTML =visitorCount;
})


//Period and foul counter
 let = homeFoulCount = 0;
 let = visitorFoulCount = 0;
 let = periodCount = 0;
 let = homeFoul = document.querySelector(".home-foul-counter");
 let = period = document.querySelector(".period-counter");
 let = visitorFoul = document.querySelector(".visitor-foul-counter")

 homeFoul.addEventListener("click", () => {
  homeFoulCount +=1 ;
  homeFoul.innerHTML = homeFoulCount;
})

visitorFoul.addEventListener("click", () => {
  visitorFoulCount +=1 ;
  visitorFoul.innerHTML = visitorFoulCount;
})

period.addEventListener("click", () => {
  periodCount +=1 ;
  period.innerHTML = periodCount;
})

