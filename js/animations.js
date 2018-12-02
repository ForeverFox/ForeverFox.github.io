// Fish Animation
function fishAnimation() {
	$("#fish").animate({
		left: "40%"
	}, 3000)
}

// Turtle Animation
var turtleAnimation;

function turtleChange() {
	turtleAnimation = setTimeout(turtleGif, 1000);		
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
  		$(".popup").fadeOut("fast");
  		turtleChange();  		
  		fishAnimation();
  		mascotsChange();
	});	

	$(".popup-wrap").click(function() {
		$(".popup").fadeOut("fast");
		$(".popup-wrap").fadeOut("fast");
		$("#otterPopup").fadeOut("slow");
  		turtleChange();  		
  		fishAnimation();
  		mascotsChange();
	});


// WELCOME 

	$("#toPanel2").click(function() {
		$("#panel1").slideUp("fast"); 
		$("#panel2").slideDown("slow");
	});

	$("#toPanel3").click(function() {
		$("#panel2").slideUp("fast"); 
		$("#panel3").slideDown("slow");
	});

	$("#toPanel4").click(function() {
		$("#panel3").slideUp("fast"); 
		$("#panel4").slideDown("slow");
	});

	$("#toPanel1").click(function() {
		$("#panel4").slideUp("fast"); 
		$("#panel1").slideDown("slow");
	});
});