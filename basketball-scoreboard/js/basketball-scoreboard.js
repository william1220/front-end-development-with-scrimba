let homeCount = 0;
let homeDisplay = document.querySelector(".home-score");
let homeBtn1 = document.querySelector(".btn-home1");

homeBtn1.addEventListener("click", () => {
  homeCount +=1 ;
  homeDisplay.innerHTML =homeCount;
})

console.log(homeBtn)
