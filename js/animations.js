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


// Otter Welcome PopUp
var popUpOtter1;

function popUp1() {
	popUpOtter1 = setTimeout(popUpOtter1Pop, 1000);
}

function popUpOtter1Pop() {
	$("#otterPopup").fadeIn("slow");
}

popUp1();

