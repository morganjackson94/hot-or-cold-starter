
$(document).ready(function(){

  console.log("ready!");

  var globalNum;
  var gameFeedback;
  var userGuesscount = $('#count');
  var guessList = $('#guessList');
  var guessCounter = 0;
  
  
  

  
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
    guessCounter = 0;
    $("#guessList").empty();
    $("#userGuess").empty();
  };
  
  /*--- User Enters Number ---*/
  var addGuess = function() {
    var newGuess = $('<li><span>' + userGuess + '</span></li>');
    $('#guessList').append(newGuess);
    $(userGuess).val(''); 
  }

  $('.guessForm').on('submit', function(e) {
    e.preventDefault();
    console.log(userGuess);
    addGuess();
  });

  

  
/*--- New game on load ---*/   
  newGame();

/*--- New game on click ---*/   
  $('.new').on('click', function() {
    newGame();
  });


/*--- App Provides Feedback ---*/

/*--- App Tracks how many guesses user has made ---*/

/*--- App Provides list of guessed numbers ---*/



	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	

  



    

});


