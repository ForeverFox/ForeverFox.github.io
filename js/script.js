$("document").ready(function() {
	$("#mapopen").click(function() {	
		$("#mapNav").animate({
			width: "100%",
		}, 100)
	});

	$("#closebtn").click(function() {	
		$("#mapNav").animate({
			width: "0",
		}, 100)
	});	

	$("#open").click(function() {
  		$("#list").fadeIn(1200);
	});

	$("#about").click(function() {	
		$("#mapNav").animate({
			width: "0",
		}, 100)
		$("#brochure").animate({
			width: "100%",
		}, 100)
  		$("#list").fadeOut("fast");
  		$("#aboutlist").fadeIn(700);
	});

	$("#closebtn").click(function() {
  		$("#list").fadeOut("fast");
	});

	$("#revealmap").click(function() {
		$("#mapNav").animate({
			width: "100%",
		}, 200)
		$("#brochure").animate({
			width: "0",
		}, 100)
  		$("#aboutlist").fadeOut("fast");		
  		$("#list").fadeIn(1200);		
	});

	$("#aboutclosebtn").click(function() {
		$("#brochure").animate({
			width: "0",
		}, 100)
  		$("#open").show("fast"); 	
	});	

	$("#popupAlbatross-closebtn").click(function() {
  		$("#popupAlbatross").fadeOut("fast");
	});		

	$("#allDoneAlbatross-closebtn").click(function() {
  		$("#allDoneAlbatross").fadeOut("fast");
	});	

/* 	function seahorseAnimation() {
		$("#seahorse").animate({
			left: "110%"
		}, 12000)
	}	

	seahorseAnimation();
	*/
	
/* Fish Scene */
	$("#micro-1").click(function() {
		$("#micro-1").fadeOut("fast");
		$("#micro-7").animate( {
			top: "15%",
			left: "40%",
			width: "450px",
		}, 1500);
	    $("#fish-scene").hide(); 
	    $("#fish-scene").addClass("fish-background-change");   
	    $("#fish-scene").delay(3000).show();
	});

	$("#micro-2").click(function() {
		$("#micro-2").fadeOut("fast");
	});

	$("#micro-3").click(function() {
		$("#micro-3").fadeOut("fast");
	});

	$("#micro-4").click(function() {
		$("#micro-4").fadeOut("fast");
	});

	$("#micro-5").click(function() {
		$("#micro-5").fadeOut("fast");
	});

	$("#micro-6").click(function() {
		$("#micro-6").fadeOut("fast");
	});
});


/* Map areas
	$("#albatrossMapNav").hover(function() {
		$("#albatrossOnMap").toggleClass("map-lit");
	});

	$("#albatrossOnMap").hover(function() {
		$("#albatrossOnMap").toggleClass("map-lit");
	});

	$("#sealionMapNav").hover(function() {
		$("#sealionOnMap").toggleClass("map-lit");
	});		

	$("#sealionOnMap").hover(function() {
		$("#sealionOnMap").toggleClass("map-lit");
	});	

	$("#seaturtleMapNav").hover(function() {
		$("#seaturtleOnMap").toggleClass("map-lit");
	});

	$("#seaturtleOnMap").hover(function() {
		$("#seaturtleOnMap").toggleClass("map-lit");
	});	


	$("#fishMapNav").hover(function() {
		$("#fishOnMap").toggleClass("map-lit");
	});

	$("#fishOnMap").hover(function() {
		$("#fishOnMap").toggleClass("map-lit");
	});	

	$("#whaleMapNav").hover(function() {
		$("#whaleOnMap").toggleClass("map-lit");
	});

	$("#whaleOnMap").hover(function() {
		$("#whaleOnMap").toggleClass("map-lit");
	});	

	$("#homeMapNav").hover(function() {
		$("#homeOnMap").toggleClass("map-lit");
	});

	$("#homeOnMap").hover(function() {
		$("#homeOnMap").toggleClass("map-lit");
	});		

	$("#infoMapNav").hover(function() {
		$("#infoOnMap").toggleClass("map-lit");
	});

	$("#infoOnMap").hover(function() {
		$("#infoOnMap").toggleClass("map-lit");
	});			

	$("#shopMapNav").hover(function() {
		$("#shopOnMap").toggleClass("map-lit");
	});

	$("#shopOnMap").hover(function() {
		$("#shopOnMap").toggleClass("map-lit");
	});								

});*/



