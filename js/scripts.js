// Business Logic for Game
function Game() {
  this.playerList = {};
  this.currentId = 0;
  //this.totalScore = 0;
};

Game.prototype.addPlayer = function(player) {
  player.id = this.assignID();
  player.totalScore = this.assignInitialScore();
  this.playerList[player.id] = player;
};

Game.prototype.assignID = function() {
  this.currentId += 1;
  return this.currentId;
};

Game.prototype.assignInitialScore = function() {
  return this.totalScore =0;
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
let player1 = new Player("Jude");
let player2 = new Player("Bill");
game.addPlayer(player1);
game.addPlayer(player2);

// buisiness logic for gameplay
function diceRoll() {
  min = Math.ceil(1);
  max = Math.floor(7);
  diceResult= Math.floor(Math.random() * (7 - 1) + 1); 
  console.log("diceRoll: "+diceResult);
  return diceResult;
}

//let curentScore = turnScore();

// if user pushes roll: {}
// if user pushes hold {}

function rollButton () {
  let roll = turnScore();
  

};

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


function turnScore () {
  let diceResult = diceRoll();
   if (diceResult === 1) {
    currentScore = 0;
   // endTurn();
   }
   else {
  currentScore += diceResult;
   };
  return currentScore;
}


function endTurn() {
  game.findPlayer(1).totalScore = turnScoreVariable + game.findPlayer(1).totalScore;
}





// UI Logic

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
  event.preventDefault();
  diceRoll();
  // create currentTotal variable = 0
  //let rolledNumber = diceRoll();
  //show rolledNumber value on HTML
  //add rolledNumber to currentTotal
  //show currentTotal on HTML
  //currentTotal += rolledNumber


});
});
