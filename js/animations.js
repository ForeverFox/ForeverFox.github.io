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

// Whale and Sea Lion Animation
var mascotsAnimation;

function mascotsChange() {
	mascotsAnimation = setTimeout(mascotsGif, 3000);		
}

function mascotsGif() {
    $("#mascotsAnimation").attr("src", "img/mascots.gif"); 
}

// Otter Welcome PopUp
var popUpOtter1;

function popUp1() {
	$("#otterPopup").fadeIn("slow");
}

popUp1();

$("document").ready(function() {
	$("#popupOtter1-closebtn").click(function() {
  		$("#otterPopup").fadeOut("slow");
  		turtleChange();  		
  		fishAnimation();
  		mascotsChange();
	});	
});