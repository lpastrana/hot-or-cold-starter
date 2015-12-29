$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$('#userGuess').on('click focusin', function() {
      this.value = '';
    });
});

	// random number from 1 - 100 is assigned to the variable 'randomNum'
var randomNum = Math.floor((Math.random() * 100) + 1);

function myFunction() {    
  // the value from the id 'userGuess' will be assigned to the variable 'userNum"
  var userNum = document.getElementById("userGuess").value;
  
  // 'totalRandom' gets the difference from 'randomNum' and 'userNum' to 
  // be used on how far or close the user is from guessing the correct number      
  var totalRandom = randomNum - userNum;

    // checks if the input is not a number, empty, less than 0 or greater than 0
    // also substracts one from the user guess count so it matches the
    // correct guesses
    if (isNaN(userNum) || (userNum == "") || (userNum <= 0) || (userNum > 100)) {
      alert("Must enter a number between 1 - 100"); 
      count = count - 1;
      return false;
    } else {
        // if statement compares if the 'randomNum' is equal to 'userNum'
        if (randomNum == userNum) {
          document.getElementById("feedback").innerHTML = "You are a Winner!"; 
        } else if (Math.abs(totalRandom) >= 50) {    
          document.getElementById("feedback").innerHTML = "You are Ice Cold";
        } else if (Math.abs(totalRandom) >= 30 && Math.abs(totalRandom) <= 49) {
          document.getElementById("feedback").innerHTML = "You are Cold";     
        } else if (Math.abs(totalRandom) >= 20 && Math.abs(totalRandom) <= 29) {
          document.getElementById("feedback").innerHTML = "You are Warm";     
        } else if (Math.abs(totalRandom) >= 10 && Math.abs(totalRandom) <= 19) {
          document.getElementById("feedback").innerHTML = "You are Hot";     
        } else if (Math.abs(totalRandom) >= 6 && Math.abs(totalRandom) <=9) {
          document.getElementById("feedback").innerHTML = "You are very Hot";
        } else if (Math.abs(totalRandom) <= 5) {
          document.getElementById("feedback").innerHTML = "You are en Fuego";
        } 
    }  

  var numDisplay = document.createElement("li");
  var numCreate = document.createTextNode(userGuess.value);
  numDisplay.appendChild(numCreate);  
  document.getElementById("guessList").appendChild(numDisplay);


} 
// Counter that keeps the numbers guessed and also displayed
var count = 0;
function clickMe(){
  count += 1;
  document.getElementById("count").innerHTML = count;
}


