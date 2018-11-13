// MODAL
// Get the modal
var modal = document.getElementById("modal");



// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("document").ready(function() {
	$("#open").click(function() {	
		$("#mapNav").animate({
			width: "100%",
		}, 100);
  		$(".modal").fadeIn("slow");
  		$("#list").fadeIn("slow");
	});

	$("#closebtn").click(function() {	
		$("#mapNav").animate({
			width: "0",
		}, 100);
  		$(".modal").fadeOut("slow");		
	});	

	$("#about").click(function() {	
		$("#mapNav").animate({
			width: "0",
		}, 100);
		$("#brochure").animate({
			width: "100%",
		}, 100);
  		$("#list").fadeOut("fast");
  		$("#aboutlist").fadeIn("slow");
	});

	$("#revealmap").click(function() {
		$("#mapNav").animate({
			width: "100%",
		}, 200);
		$("#brochure").animate({
			width: "0",
		}, 100);
  		$("#list").fadeIn("slow");	
	});

	$("#aboutclosebtn").click(function() {
		$("#brochure").animate({
			width: "0",
		}, 100);
  		$(".modal").fadeOut("slow");	 	
	});	

/* Albatross Scene */	
	$("#albatrossModalWrap").fadeIn("slow");

	$("#albatrossClose").click(function() {
  		$("#albatrossModalWrap").fadeOut("fast");
	});		

	$("#allDoneAlbatross-closebtn").click(function() {
  		$("#allDoneAlbatross").fadeOut("fast");
	});	

	
/* Fish Scene */
	$("#fishModalWrap").fadeIn("slow");

	$("#fishClose").click(function() {
  		$("#fishModalWrap").fadeOut("fast");
	});		

	$("#allDoneFish-closebtn").click(function() {
  		$("#allDoneFish").fadeOut("fast");
	});

	$("#micro-1").click(function() {
		$("#micro-1").fadeOut("fast");
		$("#micro-1-pop").fadeIn("fast");
	});

	$("#micro-1-pop-close").click(function() {
		$("#micro-1-pop").fadeOut("fast");
		$("#micro-7").animate( {
			top: "20%",
			left: "50%",
			width: "300px",
		}, 1500);
	    $("#fish-scene").hide(); 
	    $("#fish-scene").addClass("fish-background-change");   
	    $("#fish-scene").delay(3000).show();
	    $("#allDoneFish").delay(3000).fadeIn("fast");
	});

	$("#micro-2").click(function() {
		$("#micro-2").fadeOut("fast");
		$("#micro-2-pop").fadeIn("fast");
	});

	$("#micro-2-pop-close").click(function() {
		$("#micro-2-pop").fadeOut("fast");
	});

	$("#micro-3").click(function() {
		$("#micro-3").fadeOut("fast");
		$("#micro-3-pop").fadeIn("fast");
	});

	$("#micro-3-pop-close").click(function() {
		$("#micro-3-pop").fadeOut("fast");
	});

	$("#micro-4").click(function() {
		$("#micro-4").fadeOut("fast");
		$("#micro-4-pop").fadeIn("fast");
	});

	$("#micro-4-pop-close").click(function() {
		$("#micro-4-pop").fadeOut("fast");
	});

	$("#micro-5").click(function() {
		$("#micro-5").fadeOut("fast");
		$("#micro-5-pop").fadeIn("fast");
	});

	$("#micro-5-pop-close").click(function() {
		$("#micro-5-pop").fadeOut("fast");
	});

	$("#micro-6").click(function() {
		$("#micro-6").fadeOut("fast");
		$("#micro-6-pop").fadeIn("fast");
	});

	$("#micro-6-pop-close").click(function() {
		$("#micro-6-pop").fadeOut("fast");
	});

//Sea Lion Scene
	$("#sealionModalWrap").fadeIn("slow");

	$("#sealionClose").click(function() {
  		$("#sealionModalWrap").fadeOut("fast");
	});		

	$("#allDoneSealion-closebtn").click(function() {
  		$("#allDoneSealion").fadeOut("fast");
	});

//Sea Turtle Scene
	$("#turtleModalWrap").fadeIn("slow");

	$("#turtleClose").click(function() {
  		$("#turtleModalWrap").fadeOut("fast");
  		$(".recycling-placement").addClass("animated bounceInRight").css("display", "flex").delay(1500).fadeIn(2000);
	});	//at end of game use bounceOutRight to return bins	

	$("#allDoneTurtle-closebtn").click(function() {
  		$("#allDoneTurtle").fadeOut("fast");
	});

});



