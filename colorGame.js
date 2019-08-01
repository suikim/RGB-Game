
//element selector for RGB values for color we're looking for in game
var valueR = document.getElementById("numR");
var valueG = document.getElementById("numG");
var valueB = document.getElementById("numB");

// set RGB value we're looking for
valueR.textContent=getRandomInt(0, 255);
valueG.textContent=getRandomInt(0, 255);
valueB.textContent=getRandomInt(0, 255);


// element selector for all colored squares
var squares = document.querySelectorAll(".square");

//update each square to have different color
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor= "rgb(" + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ", " + getRandomInt(0, 255) + ")" ;
}


//random integer between 2 values - from MDN website
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

//later in development, we'll want to generate numbers to be more far apart or closer together depending on difficulty
