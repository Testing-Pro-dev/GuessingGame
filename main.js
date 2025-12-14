const display = document.getElementById("display");
const send = document.getElementById("send");
const guess = document.getElementById("guessInt");

let randomNum = Math.floor(Math.random() * 10) + 1;
let guessCount = 0;

send.addEventListener("click", sendValue);

function sendValue() {
  const userGuess = parseInt(display.value, 10);

  if (isNaN(userGuess)) {
    guess.textContent += `Guess ${++guessCount}: Please enter a valid number!\n`;
  } else if (userGuess === randomNum) {
    guess.textContent += `Guess ${++guessCount}: ${userGuess} is Correct!\n`;
  } else if (userGuess > randomNum) {
    guess.textContent += `Guess ${++guessCount}: ${userGuess} is Too high!\n`;
  } else {
    guess.textContent += `Guess ${++guessCount}: ${userGuess} is Too low!\n`;
  }

  display.value = ''; // Clear the input field
}