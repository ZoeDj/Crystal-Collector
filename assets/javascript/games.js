$(document).ready(function() {
    
  var totalScore = 0;
  var wins = 0;
  var losses = 0;
  var secretNumber;
  var crystal1Val; 
  var crystal2Val;
  var crystal3Val;
  var crystal4Val;

function newGame(){
  secretNumber = Math.round(Math.random()*101)+20;
  totalScore = 0;
  crystal1Val = Math.round(Math.random()*12)+1;
  crystal2Val = Math.round(Math.random()*12)+1;
  crystal3Val = Math.round(Math.random()*12)+1;
  crystal4Val = Math.round(Math.random()*12)+1;

  $(".secret-number").text(secretNumber);
  $(".total-score").text(totalScore);
  $("#crystal-1").attr("data-crystalvalue", crystal1Val);
  $("#crystal-2").attr("data-crystalvalue", crystal2Val);
  $("#crystal-3").attr("data-crystalvalue", crystal3Val);
  $("#crystal-4").attr("data-crystalvalue", crystal4Val);
  $(".wins").text(wins);
  $(".losses").text(losses);
  $(".win-or-lose").text("");  
  }

newGame();
    
$(".crystal-image").on("click", function() {
var crystalValue = $(this).attr("data-crystalvalue");
crystalValue = parseInt(crystalValue);
totalScore += crystalValue;
$(".total-score").text(totalScore);
    
if (totalScore === secretNumber) {
  wins++;
  $(".win-or-lose").text("You won!");
  $(".wins").text(wins);
  newGame();
  }
  else if (totalScore > secretNumber){
    losses++;
    $(".win-or-lose").text("You lost, try again!");
    $(".losses").text(losses);
    newGame();
  }
  })
});
