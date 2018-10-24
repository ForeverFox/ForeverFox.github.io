// Fish Animation
function fishAnimation() {
	$("#fish").animate({
		left: "40%"
	}, 3000)
}

// Turtle Animation
var turtleAnimation;

function turtleChange() {
	turtleAnimation = setTimeout(turtleGif, 4000);		
}

function turtleGif() {
    $("#turtleAnimation").attr("src", "img/turtle.gif"); 
}

$("document").ready(function() {
	fishAnimation();
	turtleChange();

});