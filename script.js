// 'use strict';

// document.querySelector('.message').textContent = 'Correct Numnber !';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// let x = document.querySelector('.number');
let button = document.querySelector('.check');
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const directType = function (message) {
  document.querySelector('.message').textContent = message;
};
button.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number ! ';
    let number = Math.trunc(Math.random() * 20) + 1;
  } else if (guess === number) {
    // document.querySelector('.message').textContent = 'Correct Numnber !';
    directType('Correct Numnber !');
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(184, 13, 0)';
    document.querySelector('.number').style.width = '30rem ';
    document.querySelector('.number').textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > number ? '📈 Too high!' : '📉 Too low!';
      directType(guess > number ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector(
      //   '.message'
      // ).textContent = `💥 You lost the game! its was ${number}`;
      directType(`💥 You lost the game! its was ${number}`);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  directType('Starting the game');
  document.querySelector('.number').style.width = '15rem ';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
});
