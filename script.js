"use strict";

let firstBox = document.querySelector(".firstBox");
let secondBox = document.querySelector(".secondBox");
let secondCurrentBOx = document.querySelector(".playerSecondCurrentBOx");
let oneCurrentBOx = document.querySelector(".playerOneCurrentBOx");
let playerOneScore = document.querySelector(".playerOneScore");
let playerSecondScore = document.querySelector(".playerSecondScore");
let reset = document.querySelector(".reset");
let rollDice = document.querySelector(".rollDice");
let hold = document.querySelector(".hold");
let dice = document.querySelector(".dice");
let SecCurrentScore = document.querySelector(".SecCurrentScore");
let OneCurrentScore = document.querySelector(".OneCurrentScore");

//NOTE
// ##**** True = Player 1 && False = Player2 ***##
let flag = true;

let CurrentScore = 0;

let diceNumber = 0;

let playerOneCurrentScore = 0;
let playerSecCurrentScore = 0;
let playerOneFinalScore = 0;
let playerSecFinalScore = 0;

console.log(`Before One :${flag}`);

//To switch between Player
function switchPlayer(diceNumber, flag) {
  if (diceNumber === 1) diceNumber = 0;

  if (!flag) {
    //Switching to Player 2
    OneCurrentScore.textContent = 0;
    playerOneCurrentScore = 0;
    playerSecCurrentScore += diceNumber;
    SecCurrentScore.textContent = playerSecCurrentScore;
    console.log(`Second Player Current Score:${diceNumber}`);
    firstBox.style.opacity = "0.3";
    secondBox.style.opacity = "1";
    oneCurrentBOx.classList.remove("shadow");
    secondCurrentBOx.classList.add("shadow");
  } else {
    //Switching to Player 1
    SecCurrentScore.textContent = 0;
    playerSecCurrentScore = 0;
    playerOneCurrentScore += diceNumber;
    OneCurrentScore.textContent = playerOneCurrentScore;
    console.log(`One Player Current Score:${diceNumber}`);
    firstBox.style.opacity = "1";
    secondBox.style.opacity = "0.3";
    oneCurrentBOx.classList.remove("shadow");
    secondCurrentBOx.classList.add("shadow");
  }
}

//To show Current Dice Face
function diceFace(diceNumber) {
  let frontFace = "face-" + diceNumber;
  let front = document.querySelector(`.${frontFace}`);

  for (let i = 1; i < 7; i++) {
    if (diceNumber === i) front.classList.add("index");
    else {
      document.querySelector(`.face-${i}`).classList.remove("index");
    }
  }
}

//Roll Dice Button Functionality
rollDice.addEventListener("click", function () {
  diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(`DiceNumber : ${diceNumber}`);

  if (diceNumber === 1) {
    flag = !flag;
  }

  console.log(`After One :${flag}`);

  diceFace(diceNumber);
  switchPlayer(diceNumber, flag);
});

//Hold Button Functionality
hold.addEventListener("click", function () {
  if (flag) {
    if (playerOneCurrentScore > playerOneFinalScore) {
      playerOneFinalScore = playerOneCurrentScore;
    }
    console.log(`Player One Final Score : ${playerOneFinalScore}`);
    playerOneScore.textContent = playerOneFinalScore;
    flag = !flag;
    switchPlayer(1, flag);
  } else {
    if (playerSecCurrentScore > playerSecFinalScore) {
      playerSecFinalScore = playerSecCurrentScore;
    }
    console.log(`Player Two Final Score : ${playerSecFinalScore}`);
    playerSecondScore.textContent = playerSecFinalScore;
    flag = !flag;
    switchPlayer(1, flag);
  }
});

//Reset Buttton Funtionality
reset.addEventListener("click", function () {
  //Setting All veriables to Initial value
  flag = true;
  CurrentScore = 0;
  diceNumber = 0;
  playerOneCurrentScore = 0;
  playerSecCurrentScore = 0;
  playerOneFinalScore = 0;
  playerSecFinalScore = 0;

  //Current Score to 0
  OneCurrentScore.textContent = 0;
  SecCurrentScore.textContent = 0;
  playerOneScore.textContent = 0;
  playerSecondScore.textContent = 0;

  //Both Player visible
  firstBox.style.opacity = "1";
  secondBox.style.opacity = "1";
  oneCurrentBOx.classList.add("shadow");
  secondCurrentBOx.classList.add("shadow");
});
