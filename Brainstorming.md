to add to DOM
current dice roll
round score

player 1's total score
player 2's total score




decide which project to tackle with your partner. Then, group up with other pairs working on this project for a collective, student-led brainstorming session. Map out a basic approach, collaborate, and get creative!

What will happen when a user clicks "Play"? Generate random number. If ===1; turn over
What objects will you need? Player1, Player2
What key-value pairs will each object need to contain in order for the game to work? totalScore

What functions? Roll(math.random()), hold or end turn, add to totalScore, checkWinner/end game 


How will these be triggered throughout the gameplay? event listener on a button.click to roll

How will information be collected from the user? How will it be displayed? only totalScore will be collected for now; 
current total scores will be displayed as either a running <li> similar to how contact names were displayed in AddressBook example. TBD if we append to the list or update the child element and oly show current total Scores.

When you have a broad overview of how you want to build your game, identify the simplest behavior, and perhaps what behaviors to tackle after that. Remember to start simple and work one step at a time.

Code

Pig Dice (Recommended)
Write a program where two users can play Pig dice against each other. Don't forget to write plain English specifications with example inputs and outputs before you begin coding!

Further Exploration
Add options to play one of the other variations of Pig Dice using two or more dice
Add option to play the computer - easy or hard levels:
Easy: Computer always stops after second roll.
Hard: Computer uses strategy based on current total and rolled dice.

human player vs human player

let player1TotalScore = 0;
let player2TotalScore = 0;

create a new game (like addressBook)
create a object for players
  create player objects
    name:
    totalScore:


create function that creates a random number between 1 and 6 (math.random(1,7))
if numner !=== 1, add value to currentScore
if number === 1, currentScore ===0; turn over; switch player
retun internalTurnScore + player[?]TotalScore

create a "hold" function to add currentScore to player's totalScore 
  reset internalTurnScore to 0
  switch player


create function to check if player's score >=100
check if player's score >=100 => WINNER
else keep playing


player1:name [INPUT      ]          player2:name [   INPUT   ]
player1:totalScore            player2:totalScore
["Ready!" Button to submit/initialize players]

<div>Display who's turn it is</div>

player1:currentRollScore     player2:currentRollScore
[Roll button id=player1]     [Roll button  id=player2]
[Hold button id=player1]]    [Hold button  id=player2]]

<li>player1:appended          <li>player1:appended 
history of past turns</li>    history of past turns</li>


----------------------


$("#button1").click(function(event) {
    event.preventDefault();
    newPlayer1.RollDice();
    newPlayer1.AddRoundScore();
    newPlayer1.AddTotalScore();
    $("#p1score").html(newPlayer1.totalScore);

    console.log(newPlayer1);
  });

  $("#button2").click(function(event) {
    event.preventDefault();
    newPlayer2.RollDice();
    newPlayer2.AddRoundScore();
    newPlayer2.AddTotalScore();
    $("#p2score").html(newPlayer2.totalScore);
    console.log(newPlayer2);
  });


            <button id="button1" type="click" class="btn-dark btn btn-primary">player one roll</button>
          </div>
          <div class="column">
            <h3><strong>Player 2: <span id="p2score"></span></strong></h3>
            <br>
            
            <button id="button2" type="click" class="btn-dark btn btn-primary">player two roll</button>
          </div>
        </div>
        
        <div class="row">
          <div class="col-1 mx-auto">
            
            <button id="hold-button" type="click" class="btn btn-primary">Hold</button>
            <button id="button3" type="click" class="btn-success btn btn-primary  btn-sm">Money, Money!</button>
          </div>



