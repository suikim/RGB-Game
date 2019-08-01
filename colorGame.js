
//element selector for RGB values for color we're looking for in game
var valueR = document.getElementById("numR");
var valueG = document.getElementById("numG");
var valueB = document.getElementById("numB");
//element selector for new colors button
var reset = document.getElementById("reset");
//element selector for all colored squares
var squares = document.querySelectorAll(".square");

//New Colors button - changes color of squares and the RGB number player is looking for
reset.addEventListener("click", function(){ rgbNumber(); colorSquare(); });

//set RGB number when page loads
rgbNumber();

//color squares when page loads
colorSquare();



//***   Functions   ***//

//set RGB value we're looking for
function rgbNumber(){
	valueR.textContent=getRandomInt(0, 255);
	valueG.textContent=getRandomInt(0, 255);
	valueB.textContent=getRandomInt(0, 255);
}

//update each square to have different color
function colorSquare(){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor= "rgb(" + getRandomInt(0, 255) + ", " + 
		getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ")" ;
	}
}

//random integer between 2 values - from MDN website
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
