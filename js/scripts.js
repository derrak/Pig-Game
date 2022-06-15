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
  return Math.floor(Math.random() * (7 - 1) + 1); 
}



//How to access a player's total score: game.findPlayer(1).totalScore