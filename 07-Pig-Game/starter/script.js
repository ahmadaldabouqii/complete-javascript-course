'use strict';

// selectiong elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  // Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `./img/dice-${dice}.png`;

  // check for rolled 1:
  if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    // if true, switch to next player
  }
});
