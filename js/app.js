var p1Button = document.querySelector("#p1");
// don't need pound tag
var p2Button = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
//only select p's inside of spans
var winningScoreDisplay = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;
// starts false because game over is not true at beginning of game
var gameOver = false;
// if reach winning score, gameOver should be true
var winningScore = 5;

p1Button.addEventListener("click", function() {
  // if it's not gameOver, then increase score
  if (!gameOver) {
  // increases score
  p1Score++;
  console.log(p1Score, winningScore);
  // if player score is equal to winning score, it's game over
    if (p1Score === winningScore) {
      // if gameOver is true, code above will no longer run. Can't increase counter.
      p1Display.classList.add("winner");
      gameOver = true;
    }
    // changes text
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      p2Display.classList.add("winner");
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});


// reset game
reset.addEventListener("click", function() {
  resetNum();
});


// change event runs anytime a value changes. can't use click here because can also input number via keyboard
numInput.addEventListener("change", function() {
  //grabs value of input and changes display to match
  winningScoreDisplay.textContent = this.value;
  //change winningScore value to num input
  //doesn't work unless change to number value, otherwise compare winningScore to a string value.
  winningScore = Number(this.value);
  // rest score if change value of winning score
  resetNum();
});

function resetNum(){
  p1Score = 0;
  p2Score = 0;
  gameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p1Score;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  numInput.value = "";
}
