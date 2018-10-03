/*MAP NAV*/
$( function() {
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
});	