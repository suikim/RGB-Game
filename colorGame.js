
// var colors = [
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)",
// ];



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
