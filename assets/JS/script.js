'use strict';
// Add an event listener to the document's DOMContentLoaded event
// Wait for DOM to load before running game
document.addEventListener('DOMContentLoaded', function () {
  // Get all the <button> elements on the page
  let buttons = document.getElementsByTagName('button');

  // Loop through each button element
  for (let button of buttons) {
    // Add an event listener to each button's click event
    button.addEventListener('click', function () {
      // Check if the button has a data-type attribute set to "submit"
      if (this.getAttribute('data-type') === 'submit') {
        // If it is, show an alert message saying "You clicked Submit!"
        alert('You clicked Submit!');
      } else {
        // If it's not, get the value of the data-type attribute and store it in a variable
        let gameType = this.getAttribute('data-type');
        // Show an alert message with the value of the gameType variable
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

/** The main game 'loop', called when the script is first loaded * and after the user's answer has been processed */
function runGame() {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  const operand1 = document.getElementById('operand1');
  const operand2 = document.getElementById('operand2');
  const operator = document.getElementById('operator');

  operand1.innerText = num1;
  operand2.innerText = num2;
}

runGame();

function checkAnswer() {}

function calCorrectAns() {}

function incrementScore() {}

function incrementWrongAns() {}

function displayAdditionQuestion() {}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
