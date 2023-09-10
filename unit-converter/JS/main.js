const inputEl = document.querySelector(".input-field");
const convertBtnEl = document.querySelector(".convert-btn");
const dLeftLengthE1m1 = document.querySelector(".d-left-length-m1");
const dLeftLengthE1f1 = document.querySelector(".d-left-length-f1");
const dRightLengthElf2 = document.querySelector(".d-right-length-f2");
const dRightLengthElm2 = document.querySelector(".d-right-length-m2");

const dLeftVolumeEll1 = document.querySelector(".d-left-volume-l1");
const dLeftVolumeElg1 = document.querySelector(".d-left-volume-g1");
const dRightVolumeElg2 = document.querySelector(".d-right-volume-g2");
const dRightVolumeEll2 = document.querySelector(".d-right-volume-l2");

const dLeftMassElk1 = document.querySelector(".d-left-mass-k1");
const dLeftMassElp1 = document.querySelector(".d-left-mass-p1");
const dRightMassElk2 = document.querySelector(".d-right-mass-k2");
const dRightMassElp2 = document.querySelector(".d-right-mass-p2");



convertBtnEl.addEventListener("click", () => {
  // Display input value
  dLeftLengthE1m1.innerHTML = inputEl.value;
  dRightLengthElf2.innerHTML = inputEl.value;
  dLeftVolumeEll1.innerHTML = inputEl.value;
  dRightVolumeElg2.innerHTML = inputEl.value;
  dLeftMassElk1.innerHTML = inputEl.value;
  dRightMassElp2.innerHTML = inputEl.value;

  let value = inputEl.value;
  // Conversion
  dLeftLengthE1f1.innerHTML = (value  * 3.28).toFixed(2) ;
  dRightLengthElm2.innerHTML = (value / 3.28).toFixed(2);
  dLeftVolumeElg1.innerHTML = (value  * 0.264172).toFixed(2);
  dRightVolumeEll2.innerHTML = (value  / 0.264172).toFixed(2);
  dLeftMassElp1.innerHTML = (value * 2.2).toFixed(2);
  dRightMassElk2 .innerHTML = (value / 2.2)-toFixed(2);
})
