// Business Logic for Game
function Game() {
  this.playerList = {};
  this.currentId = 0;
  //this.totalScore = 0;
};

Game.prototype.addPlayer = function(player) {
  player.id = this.assignID();
  player.totalScore = this.assignInitialScores();
  player.roundScore = this.assignInitialScores();
  this.playerList[player.id] = player;
};

Game.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
};

Game.prototype.assignInitialScores = function() {
  return this.totalScore =0;
  return this.roundScore=0;
};

Game.prototype.findPlayer = function(id) {
  if (this.playerList[id] != undefined) {
    return this.playerList[id];
  }
  return false;
}

// Business Logic for Player

function Player(firstName) {
  this.playerName = firstName;
};

let game = new Game();
let turnCounter = 1;
let playersTurn = 1;


// buisiness logic for gameplay
function turnNumber () {
  turnCounter += 1;
  if (turnCounter % 2 === 1){
    playersTurn = 1; 
  }
  else {playersTurn = 2}
  console.log("Players turn: " + playersTurn);
  return playersTurn;
  }
  




function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(7);
  diceResult= Math.floor(Math.random() * (7 - 1) + 1); 
  console.log("diceRoll: " + diceResult);
  return diceResult;
}

function turnScore () {
  let diceResult = diceRoll();
  if (diceResult === 1) {
    game.findPlayer(playersTurn).roundScore = 0;
    endTurn();
  }
  else {
    game.findPlayer(playersTurn).roundScore += diceResult;
    if  (game.findPlayer(playersTurn).roundScore +  game.findPlayer(playersTurn).totalScore >= 100){
      endGame();
    }
    else{};
  };
  return diceResult;
};

function endGame(){
  game.findPlayer(1).totalScore = 0;
  game.findPlayer(2).totalScore = 0;
  game.findPlayer(1).roundScore = 0;
  game.findPlayer(2).roundScore = 0;
  endGameUI();
}

function endTurn() { 
  game.findPlayer(playersTurn).totalScore = game.findPlayer(playersTurn).roundScore + game.findPlayer(playersTurn).totalScore;
  game.findPlayer(playersTurn).roundScore = 0;
  turnNumber();
};

// UI Logic
function endGameUI() {
  alert("Player " + playersTurn + " WINS");
  $("#totalScore1").text(0);
  $("#totalScore2").text(0);
}

$(document).ready(function() {
$("#nameinput").click(function(event) {
  event.preventDefault();
  const inputtedFirstPlayer = $("input#playerOneName").val();
  Player(inputtedFirstPlayer);
  const inputtedSecondPlayer = $("input#playerTwoName").val();
  Player(inputtedSecondPlayer);

  let player1 = new Player(inputtedFirstPlayer);
  let player2 = new Player(inputtedSecondPlayer);
  game.addPlayer(player1);
  game.addPlayer(player2);
  $("#player1Name").text(inputtedFirstPlayer);
  $("#player2Name").text(inputtedSecondPlayer);
  $("#playersTurnName").text(game.findPlayer(playersTurn).playerName);
  $(".nameEntry").hide();
  $(".gamePlay").show();
});

$("#roll").click(function(event) {
  event.preventDefault();
  let rolledNumber = turnScore();
  $("#rolledNumber").text(rolledNumber);
  let roundScore = game.findPlayer(playersTurn).roundScore;
  $("#currentScore").text(roundScore);
  $("#playersTurnName").text(game.findPlayer(playersTurn).playerName);
});

$("#hold").click(function(event){
  event.preventDefault();
  endTurn();
  $("#rolledNumber").text("Roll the dice");
  $("#currentScore").text("Roll the dice");
  let totalScore1 = game.findPlayer(1).totalScore;
  $("#totalScore1").text(totalScore1);
  let totalScore2 = game.findPlayer(2).totalScore;
  $("#totalScore2").text(totalScore2);
  $("#playersTurnName").text(game.findPlayer(playersTurn).playerName);
});
  
});