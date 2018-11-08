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
	$("#mapopen").click(function() {	
		$("#mapNav").animate({
			width: "100%",
		}, 100);
  		$(".modal").fadeIn("slow");
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
		}, 100)
		$("#brochure").animate({
			width: "100%",
		}, 100)
	});

	$("#revealmap").click(function() {
		$("#mapNav").animate({
			width: "100%",
		}, 200)
		$("#brochure").animate({
			width: "0",
		}, 100)	
	});

	$("#aboutclosebtn").click(function() {
		$("#brochure").animate({
			width: "0",
		}, 100)
  		$("#open").show("fast");
  		$(".modal").fadeOut("slow");	 	
	});	

/* Albatross Scene */	

	$("#popupAlbatross-closebtn").click(function() {
  		$("#popupAlbatross").fadeOut("fast");
	});		

	$("#allDoneAlbatross-closebtn").click(function() {
  		$("#allDoneAlbatross").fadeOut("fast");
	});	

	
/* Fish Scene */
	$("#micro-1").click(function() {
		$("#micro-1").fadeOut("fast");
		$("#micro-7").animate( {
			top: "20%",
			left: "50%",
			width: "300px",
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



