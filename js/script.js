/*MAP NAV*/
function openNav() {
    document.getElementById("mapNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mapNav").style.width = "0";
} 

$( function() {

	$("#open").click(function() {
  		$("#list").fadeIn(1200);
	});

	$("#about").click(function() {	
		$("#mapNav").animate({
			width: "0",
		}, 100)
  		$("#list").fadeOut("fast");
		$("#brochure").show("fast");
  		$("#aboutlist").fadeIn(1200);
	});

	$("#closebtn").click(function() {
  		$("#list").fadeOut("fast");
	});

	$("#revealmap").click(function() {
		$("#mapNav").animate({
			width: "100%",
		}, 200)
		$("#brochure").hide("fast");
  		$("#aboutlist").fadeOut("fast");		
  		$("#list").fadeIn(1200);		
	});

	$("#aboutclosebtn").click(function() {
  		$("#brochure").hide("fast");
  		$("#open").show("fast"); 	
	});			
});	