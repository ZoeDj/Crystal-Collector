$(document).ready(function() {
    
    var totalScore = 0;
    var wins = 0;
    var losses = 0;
    
        var secretNumber = Math.round(Math.random()*12)+20;
        // totalScore += increment;
        // var increment = Math.round(Math.random()*12)+1;
        // each crystal has it's own value and it's diferent every time:
        var crystal1Val = Math.round(Math.random()*12)+1;
        var crystal2Val = Math.round(Math.random()*12)+1;
        var crystal3Val = Math.round(Math.random()*12)+1;
        var crystal4Val = Math.round(Math.random()*12)+1;
   
        $(".secret-number").text(secretNumber);
        $(".total-score").text(totalScore);
        $("#crystal-1").attr("data-crystalvalue", crystal1Val);
        $("#crystal-2").attr("data-crystalvalue", crystal2Val);
        $("#crystal-3").attr("data-crystalvalue", crystal3Val);
        $("#crystal-4").attr("data-crystalvalue", crystal4Val);
        $(".wins").text(wins);
	    $(".losses").text(losses);
        $(".win-or-lose").text("");
   

    // Function to add the crystal values together
        $(".crystal-image").on("click", function() {
		// if (totalScore >= secretNumber) {
			
		// }
		var crystalValue = $(this).attr("data-crystalvalue");
		crystalValue = parseInt(crystalValue);
		totalScore += crystalValue;
		$(".total-score").text(totalScore);
    
    if (totalScore === secretNumber) {
        wins++;
       $(".win-or-lose").text("You win!");
       $(".wins").text(wins);
      }
      else if (totalScore > secretNumber){
        losses++;
        $(".win-or-lose").text("You lose, try again");
        $(".losses").text(losses);
      }
    

   

    // $(".btn").on("click", function() {
		
    // });
    })
});
