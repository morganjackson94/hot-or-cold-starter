var guessCounter = 0;
var globalNum;
var gameFeedback;


$(document).ready(function(){

  console.log("ready!");

  
  var userGuesscount = $('#count');
  var guessList = $('#guessList');
  var userGuess = $('#userGuess').val();
  
  
  /*--- User Creates New Game ---*/
  var newGame = function() {
    genNum();
    clearGuesses();
    console.log("you have started a new game");
  };

  /*--- Generate Random Number ---*/
  var genNum = function() {
    var randomNumber = Math.floor(Math.random() * 100) +1;
    globalNum = randomNumber;
    console.log("Mystery Number is " + randomNumber);
    return randomNumber;   
  };

  /*--- Clear Guesses ---*/
  var clearGuesses = function() {
    $("#count").text(guessCounter = 0);
    $("#guessList").empty();
    $("#userGuess").empty();
    $("#feedback").text("Make Your Guess!");
  };
  
  /*--- User Enters Number ---*/
  var addGuess = function() {
    userGuess = $('#userGuess').val();
    console.log("Current Guess: " + userGuess);
    var newGuess = $('<li><span>' + userGuess + '</span></li>');
    $('#guessList').append(newGuess);
    $('#userGuess').val('');
    getFeedback(); 
  }

  $('.guessForm').on('submit', function(e) {
    e.preventDefault();
    console.log(userGuess);
    addGuess();
    $("#count").text(guessCounter+=1);
  });



/*--- App Provides Feedback ---*/
var getFeedback = function() {
  console.log(userGuess);
  if (userGuess <= 0 || userGuess > 100) {
    $("#feedback").text("Please enter a number between 1 and 100.");
  }
  else if ((userGuess > globalNum - 5) && (userGuess > globalNum + 5)){
    $("#feedback").text("Scorching!!");
  }
  else if ((userGuess > globalNum - 10) && (userGuess > globalNum + 10)){
    $("#feedback").text("You're Heating Up!");
  }
  else if ((userGuess > globalNum - 15) && (userGuess > globalNum + 15)){
    $("#feedback").text("Warmer");
  }
  else if ((userGuess > globalNum - 20) && (userGuess > globalNum + 20)){
    $("#feedback").text("Warm");
  }
  else if ((userGuess > globalNum - 25) && (userGuess > globalNum + 25)){
    $("#feedback").text("Cold");
  }
  else if ((userGuess == globalNum)){
    $("#feedback").text("You got it!");
  }
  else {
    $("#feedback").text("Arctic Cold");
  }
}

/*--- New game on load ---*/   
  newGame();

/*--- New game on click ---*/   
  $('.new').on('click', function() {
    newGame();
  });
	
/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  

});


