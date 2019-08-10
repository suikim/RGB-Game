//***   Element Selectors   ***//
//element selector for RGB values for color we're looking for in game
var valueR = document.getElementById("numR");
var valueG = document.getElementById("numG");
var valueB = document.getElementById("numB");
//element selector for new colors button
var reset = document.getElementById("reset");
//element selector for all colored squares
var squares = document.querySelectorAll(".square");
//element selector for incorrect/correct message
var alert = document.getElementById("message");
//boolean value to check if player selected right color
var won = false;



//set RGB number when page loads
rgbNumber();
//color squares when page loads
colorSquare(valueR.textContent, valueG.textContent, valueB.textContent);


//*** Event Listeners   ***//
//New Colors button - changes color of squares and the RGB number player is looking for, reset won boolean to false
reset.addEventListener("click", function(){ 
	rgbNumber(); 
	for (var i = 0; i < squares.length; i++) {
		squares[i].classList.remove("addFadeBlack");
	}
	colorSquare(valueR.textContent, valueG.textContent, valueB.textContent); 
	reset.textContent="New Colors";
	message.textContent="";
	won = false;
});

//check is clicked square is correct one
for (var i = 0; i < squares.length; i++) {
	(function(index) {
		squares[i].addEventListener("click", function(){
			if( squares[index].style.backgroundColor == writeRGB(valueR.textContent, valueG.textContent, valueB.textContent) ){
				message.textContent = "Correct!"
				won = true;
				reset.textContent="Try Again?";
			}
			else{
				if(won == false){
					message.textContent="Incorrect!"
					squares[index].classList.add("addFadeBlack");
					//squares[index].style.backgroundColor = "#232323";
				}
			}
		});
	})(i);
}


//***   Functions   ***//

//set RGB value we're looking for
function rgbNumber(){
	valueR.textContent=getRandomInt(0, 256);
	valueG.textContent=getRandomInt(0, 256);
	valueB.textContent=getRandomInt(0, 256);
}

//update each square to have different color
function colorSquare(valR, valG, valB){
	var correct = getRandomInt(0,6); //pick random square to be correct square
	squares[correct].style.backgroundColor= writeRGB(valR, valG, valB);
	for (var i = 0; i < squares.length; i++) {
		if(i != correct){
			squares[i].style.backgroundColor= writeRGB(getRandomInt(0, 256), getRandomInt(0, 256), getRandomInt(0, 256));
		}
	}
}

//random integer between 2 values - code from MDN website
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//creates textContent for rgb numbers
function writeRGB(valR, valG, valB){
	return "rgb(" + valR + ", " + valG + ", " + valB + ")";
}
