// Select Every Count Container
const countContainer = document.querySelectorAll(".count-digit");

// Select option buttons
const startAction = document.getElementById("start-timer");
const stopAction = document.getElementById("stop-timer");
const resetAction = document.getElementById("reset-timer");

// Select HTML5 Audio element
const timeoutAudio = document.getElementById("alarm_audio");

// // // Default inital value of timer
let defaultValue = 10 * 60;

// // // variable to the time
let countDownTime = defaultValue;

// variable to store time interval
let timerID;

// Variable to track whether timer is running or not
let isStopped = true;

// Function calculate time string
const findTimeString = () => {
  let minutes = String(Math.trunc(countDownTime / 60));
  let seconds = String(countDownTime % 60);
  if (minutes.length === 1) {
    minutes = "0" + minutes;
  }
  if (seconds.length === 1) {
    seconds = "0" + seconds;
  }
  return minutes + seconds;
};

// //Change timer duration
// Future features
// let timer1 = document.querySelector(".btn-1");
// let timer2 = document.querySelector(".btn-2");
// let timer5 = document.querySelector(".btn-5");
// let timer10 = document.querySelector(".btn-10");

// timer1.addEventListener("click", () => {
//   let defaultValue = 10 * 60;
//   let countDownTime = defaultValue;
//   resetTimer();
//   console.log("clicked")
//   })



// Function to start Countdown
const startTimer = () => {
  if (isStopped) {
    isStopped = false;
    timerID = setInterval(runCountDown, 1000);
  }
};

// Function to stop Countdown
const stopTimer = () => {
  isStopped = true;
  if (timerID) {
    clearInterval(timerID);
  }
};

// Function to reset Countdown
const resetTimer = () => {
  stopTimer();
  countDownTime = defaultValue;
  renderTime();
};

//Initialize alarm sound
timeoutAudio.src = "http://soundbible.com/grab.php?id=1501&type=mp3";
timeoutAudio.load();

// Attach onclick event to buttons
startAction.onclick = startTimer;
resetAction.onclick = resetTimer;
stopAction.onclick = stopTimer;
// timer1.onclick = resetTimer;

// Function to display coundown on screen
const renderTime = () => {
  const time = findTimeString();
  countContainer.forEach((count, index) => {
    count.innerHTML = time.charAt(index);
  });
};

// function to execute timer
const runCountDown = () => {
  // decement time
  countDownTime -= 1;
  //Display updated time
  renderTime();

  // timeout on zero
  if (countDownTime === 0) {
    stopTimer();
    // Play alarm on timeout
    timeoutAudio.play();
    countDownTime = defaultValue;
  }
};
