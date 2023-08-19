// DOM elements

const upperCaseEl = document.querySelector("#uppercase");
const lengthEl = document.querySelector("#password-length");
const lowerCaseEl = document.querySelector("#lowercase");
const numberEl = document.querySelector("#numbers");
const specCharEl = document.querySelector("#specchar");
const resultBoxEl = document.querySelector(".results");
const clipBoardEl = document.querySelector(".copy2clipboard");
const generateBtnEl = document.querySelector(".button");

// generate random lower case letter using browser charset(a-z)
function genRandLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// generate random upper case letter using browser charset(a-z)
function genRandUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// generate random symbol using browser charset(A-Z)
function genRandSymb() {
  const symbols = '`!@#$%^&*()_+-=[]{};\':"\\|,.<>/?~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// generate random symbol using browser charse
function genRandNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// object assignment for keyword and value as function
const randomFunc = {
  lower: genRandLower,
  upper: genRandUpper,
  number: genRandNum,
  symbol: genRandSymb
};

// Event Listener of the generate button
generateBtnEl.addEventListener('click', () =>{
  // This will determine the length, lower, uppecase, special character and number
  const length = +lengthEl.value;
  const withLower = lowerCaseEl.checked;
  const withUpper = upperCaseEl.checked;
  const withNumber = numberEl.checked;
  const withSymb = specCharEl.checked;

  resultBoxEl.innerText = generatePassword(
    withLower,
    withUpper,
    withNumber,
    withSymb,
    length
  );
});

// Generate password Function

function generatePassword(lower, upper, number, symbol, length) {
  // Initialize Password variable
  // Filter out unchecked options
  // Loop over the length
  // Call a generator function for each type
  // Add final password var and print it on results

  let password = '';

  const typesCount = lower + upper + number + symbol;

  // console.log('typesCount:', typesCount);

  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

  // console.log('typesArray: ', typesArray);

  if (typesArray === 0) {
    return '';
  }

  for (let count = 0; count < length; count += typesCount) {
    typesArray.forEach(type =>{
      const funcName = Object.keys(type)[0];
      // console.log('funcName: ', funcName);

      password += randomFunc[funcName]();
    });
  }
  const finalPassword = password.slice(0, length);
  return finalPassword;
}

// copy password to clipboard

clipBoardEl.addEventListener('click', () => {
  const textArea = document.createElement('textarea');
  const clipPass = resultBoxEl.innerText;

  if(!clipPass){
    return;
  }

  textArea.value = clipPass;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password copied to Clipboard')
})
