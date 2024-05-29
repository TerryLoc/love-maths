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
        checkAnswer();
      } else {
        // If it's not, get the value of the data-type attribute and store it in a variable
        let gameType = this.getAttribute('data-type');

        runGame(gameType);
      }
    });
  }

  runGame('addition');
});

/** The main game 'loop', called when the script is first loaded * and after the user's answer has been processed */
function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === 'addition') {
    displayAdditionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting`;
  }
}

/** This os to check the answer giving by the user in the DOM */
function checkAnswer() {
  let userAns = parseInt(document.getElementById('answer-box').value);

  let calAns = calCorrectAns();
  let isCorrect = userAns === calAns[0];

  if (isCorrect) {
    alert('Hey you got it right! 😃');
    incrementScore();
  } else {
    alert(
      `Awww... you answered ${userAns}. The correct answer was ${
        calCorrectAns()[0]
      }!`
    );
    incrementWrongAns();
  }
  runGame(calCorrectAns()[1]);
}

/** Get the operands (The numbers) and the operator (+, -, etc.) * directly from the DOM, and returns the correct answer  */
function calCorrectAns() {
  let operand1 = parseInt(document.getElementById('operand1').innerText);
  let operand2 = parseInt(document.getElementById('operand2').innerText);
  let operator = document.getElementById('operator').innerText;

  if (operator === '+') {
    return [operand1 + operand2, 'addition'];
  } else {
    alert(`Unimplemented operator ${operator}`);
    throw `Unimplemented operator ${operator}. Aborting!`;
  }
}

/** Get the current score from the DOM and increment it by 1 */
function incrementScore() {
  let oldScore = parseInt(document.getElementById('score').innerText);
  document.getElementById('score').innerText = ++oldScore;
}
/** Get the current incorrect from the DOM and increment it by 1 */
function incrementWrongAns() {
  let oldScore = parseInt(document.getElementById('incorrect').innerText);
  document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent = operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {}

function displayMultiplyQuestion() {}
