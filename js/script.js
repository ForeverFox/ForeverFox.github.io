$(function() {
/* Preloading Screen 
	$("#element").introLoader({
	    animation: {
	        name: 'preloader',
	        options: {
	            exitFx:'fadeOut',
	            ease: "linear",
	            style: 'light',
	            delayBefore: 4000, //delay time in milliseconds
	            exitTime: 1000
	        }
	    },    
	    spinJs: {}   
	});*/


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

