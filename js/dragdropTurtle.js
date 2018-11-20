$("document").ready(function() {
//Sea Turtle Scene
	function kite() {
		$("#seaturtleKite").animate({
			bottom: "2%",
			left: "105%",
		}, 9000);
	}

	$("#turtleModalWrap").fadeIn("slow");

	$("#turtleClose").click(function() {
  		$("#turtleModalWrap").fadeOut("fast");
  		$(".recycling-placement").addClass("animated bounceInRight").css("display", "flex").delay(1500).fadeIn(2000);
	});		

	$("#allDoneTurtle-closebtn").click(function() {
  		$("#allDoneTurtle").fadeOut("fast");
	});

// DRAG
  $(".trash").draggable( {
    	drag: function(event, ui) {
      		scroll: false;    
    	}
  	});

// Popups
	$("#popupTurtle-closebtn1").click(function() {
		$("#seaturtle-trash-tote-pop").fadeOut("fast");
	});

	$("#popupTurtle-closebtn2").click(function() {
		$("#seaturtle-trash-plastic-pop").fadeOut("fast");
	});

	$("#popupTurtle-closebtn3").click(function() {
		$("#seaturtle-trash-cans-pop").fadeOut("fast");
	});

	$("#popupTurtle-closebtn4").click(function() {
		$("#seaturtle-trash-glass-pop").fadeOut("fast");
	});

	$("#popupTurtle-closebtn5").click(function() {
		$("#seaturtle-trash-paper-pop").fadeOut("fast");
	});

	$("#popupTurtle-closebtn6").click(function() {
		$("#seaturtle-trash-waste-pop").fadeOut("fast");
	});


  $(".seaturtle-trash-tote").on("drag", function(event, ui) {
	  		$(".seaturtle-trash-tote").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-tote-pop").fadeIn("fast");
	});

  $(".seaturtle-trash-plastic").on("drag", function(event, ui) {
  		$(".seaturtle-trash-plastic").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-plastic-pop").fadeIn("fast");
	}); 

  $(".seaturtle-trash-cans").on("drag", function(event, ui) {
  		$(".seaturtle-trash-cans").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-cans-pop").fadeIn("fast");
	});

  $(".seaturtle-trash-glass").on("drag", function(event, ui) {
  		$(".seaturtle-trash-glass").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-glass-pop").fadeIn("fast");
	});	

  $(".seaturtle-trash-paper").on("drag", function(event, ui) {
  		$(".seaturtle-trash-paper").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-paper-pop").fadeIn("fast");
	});	

  $(".seaturtle-trash-waste").on("drag", function(event, ui) {
  		$(".seaturtle-trash-waste").addClass("trashDropped");
	  		
	  		$("#seaturtle-trash-waste-pop").fadeIn("fast");
	});		 


//DROP
  $("#recyclingBinTote").droppable( {
  		accept: ".seaturtle-trash-tote:not(.outside)",
  		greedy: true, 
  		drop: function(event, ui) {
  			if($("figure").hasClass("seaturtle-trash-tote")) {
  				$(".seaturtle-trash-tote").fadeOut("fast");
  				$("#seaturtle-trash-tote-pop").fadeOut("fast");
  				console.log("Special items dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight");
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  			}
  		}
  });

  $("#recyclingBinPlastic").droppable( { 
  		accept: ".seaturtle-trash-plastic:not(.outside)",
  		greedy: true, 
  		drop: function(event, ui) {
  			if($("figure").hasClass("seaturtle-trash-plastic")) {
  				$(".seaturtle-trash-plastic").fadeOut("fast");
  				$("#seaturtle-trash-plastic-pop").fadeOut("fast");
  				console.log("Plastics dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight");
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  			}
  		}
  });

  $("#recyclingBinCans").droppable( { 
  		accept: ".seaturtle-trash-cans:not(.outside)",
  		greedy: true, 
  		drop: function(event, ui) {
  			if($("figure").hasClass("seaturtle-trash-cans")) {
  				$(".seaturtle-trash-cans").fadeOut("fast");
  				$("#seaturtle-trash-cans-pop").fadeOut("fast");
  				console.log("Cans dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight").delay(1500).fadeOut(2000);
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  			}
  		}
  }); 

  $("#recyclingBinGlass").droppable( { 
  		accept: ".seaturtle-trash-glass:not(.outside)",
  		greedy: true, 
  		drop: function(event, ui) {
  			if($("figure").hasClass("seaturtle-trash-glass")) {
  				$(".seaturtle-trash-glass").fadeOut("fast");
  				$("#seaturtle-trash-glass-pop").fadeOut("fast");
  				console.log("Glass dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight");
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  			}
  		}
  });

  $("#recyclingBinPaper").droppable( { 
  	accept: ".seaturtle-trash-paper:not(.outside)",
  		greedy: true, 
  		drop: function(event, ui) {
  			if($("figure").hasClass("seaturtle-trash-paper")) {
  				$(".seaturtle-trash-paper").fadeOut("fast");
  				$("#seaturtle-trash-paper-pop").fadeOut("fast");
  				console.log("Paper dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight");
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  			}
  		}
  }); 

  $("#recyclingBinWaste").droppable( {
  		accept: ".seaturtle-trash-waste:not(.outside)",
  		greedy: true,  
  		drop: function(event, ui) {

  			if($("figure").hasClass("seaturtle-trash-waste")) {
  				$(".seaturtle-trash-waste").fadeOut("fast");
  				$("#seaturtle-trash-waste-pop").fadeOut("fast");
  				console.log("Waste dropped!");
  			}

  			if($(".seaturtle-trash-tote").hasClass("trashDropped") && $(".seaturtle-trash-plastic").hasClass("trashDropped") && $(".seaturtle-trash-cans").hasClass("trashDropped") && $(".seaturtle-trash-glass").hasClass("trashDropped") && $(".seaturtle-trash-paper").hasClass("trashDropped") && $(".seaturtle-trash-waste").hasClass("trashDropped")) {
        			
        			console.log("All dropped!");
        			$(".recycling-placement").addClass("animated bounceOutRight");
        			$("#seaturtleFigure").addClass("animated bounceOutLeft");
        			kite();
        			$("#allDoneTurtle").delay(4000).fadeIn("slow");
  		}
  	}
  });
});  