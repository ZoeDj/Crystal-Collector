$( document ).ready(function() {
    

    var counter = 0;
    
    var increment = Math.round(Math.random()*12)+1;
    var secretNumber = Math.round(Math.random()*12)+20;
    var wins = 0;
    var losses = 0;
    
   
    $(".secret-number").text(secretNumber);

    $(".crystal-image").on("click", function() {


    counter += increment;

    
    alert("Your new score is: " + counter);

    if (counter === secretNumber) {

        alert("You win!");
      }
      else if (counter >= secretNumber){
        alert("You lost!");
      };
      });






    });


