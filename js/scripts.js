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
};

function endGame(){
  console.log("Player " + playersTurn + " WINS");
}
function endTurn () { 
  game.findPlayer(playersTurn).totalScore = game.findPlayer(playersTurn).roundScore + game.findPlayer(playersTurn).totalScore;
  game.findPlayer(playersTurn).roundScore = 0;
  turnNumber();
};

// UI Logic

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

});

// const inputtedFirstName = $("input#new-first-name").val();

  $("#roll").click(function(event) {
    event.preventDefault();
    turnScore();
    // create currentTotal variable = 0
    //let rolledNumber = diceRoll();
    //show rolledNumber value on HTML
    //add rolledNumber to currentTotal
    //show currentTotal on HTML
    //currentTotal += rolledNumber
  });
  $("#hold").click(function(event){
    event.preventDefault();
    endTurn();
  });
  
});


//let curentScore = turnScore();

// if user pushes roll: {}
// if user pushes hold {}

// function rollButton () {
  //   let roll = turnScore();
  
  
  // };
  
  // function roll () {
    //   let turnScoreValue = turnScore();
    //   return turnScoreValue;
    // }
    
    

    // derrak's thoughts
    // function holdButton () {
      //   take the output of turnScore and add it to 
      //   game.findPlayer(1).totalScore;
      //   switch players;
      // }
      
      // function rollButton () {
        //   add roll value to turnScore
        //   if roll value === 1 
        //   game.findPlayer(1).totalScore +0;
        //   switch players;
        // }
        
        //!!!!!!!!!!!!!!!!!!!!!!!!!
        //If we can't figure this out overnight, lets look into moving current score to a property/key in the player objects
        //!!!!!!!!!!!!!!!!!!!!!!!!!
        
        