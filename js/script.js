function restartScene() {
	location.reload(true);
}

function scrollToTop() {
	window.scrollTo(0, 0);
}

//INFO
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
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

//MODAL
	$(".popup-wrap").click(function() {
		$(".popup").fadeOut("fast");
		$(".popup-wrap").fadeOut("fast");
	});		

//INFO

	$("#infoboard").click(function() {
		$("#bulletin").fadeIn("fast");
	});

	$("#infoclosebtn").click(function() {
		$("#bulletin").fadeOut("fast");
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

	$("#sealionTote").click(function() {
		$("#sealionTote").fadeOut("fast");
		$("#sealionTote2").fadeIn("fast");
		$("#sealion-item-tools").delay(500).fadeIn(100);
		$("#sealion-item-waxed").delay(600).fadeIn(100);
		$("#sealion-item-lunchbag").delay(700).fadeIn(100);
		$("#sealion-item-towel").delay(800).fadeIn(100);
		$("#sealion-item-bottle").delay(900).fadeIn(100);
		$("#sealion-item-fruit").delay(1000).fadeIn(100);
	})

//Whale Scene

	$("#whaleModalWrap").fadeIn("slow");

	$("#whaleClose").click(function() {
  		$("#whaleModalWrap").fadeOut("fast");
  		$("#submarine").css("display", "block").addClass("animated slideInLeft");
	});		

	$("#whaleModalWrap").click(function() {
		$("#submarine").css("display", "block").addClass("animated slideInLeft");
	});

	$("#allDoneWhale-closebtn").click(function() {
  		$("#allDoneWhale").fadeOut("fast");
	});

	$("#submarine").hover(function() {
		$("#submarineToTop").fadeIn("fast");
	}, function(){
		$("#submarineToTop").fadeOut("fast");
	});

	$("#submarine").click(function() {
		scrollToTop();
		$("#allDoneWhale").delay(1000).fadeIn("fast");
	});
	

//Scroll Events
	$("window").scroll(function() {
		$(".whale-info-pop").fadeIn("slow");
	})

//RESTART SCENES
  $("#albatrossRecycle").click(function() {
    restartScene();
  });

  $("#fishRecycle").click(function() {
    restartScene();
  });

  $("#seaturtleRecycle").click(function() {
    restartScene();
  });

  $("#whaleRecycle").click(function() {
    restartScene();
  });

  $("#sealionRecycle").click(function() {
    restartScene();
  });



//Extras
	$("#shark").addClass("animated tada").fadeIn("fast");

	$("#shark").hover(function() {
		$("#shark").removeClass("animated tada wobble bounce").addClass("animated bounce");
	}, function(){
		$("#shark").removeClass("animated tada wobble bounce").addClass("animated wobble");
	});

//IDs
	$("#mascotAlbatross").click(function() {
		$("#idAlbatross").fadeIn("fast");
	});

	$("#mascotFish").click(function() {
		$("#idFish").fadeIn("fast");
	});

	$("#mascotSealion").click(function() {
		$("#idSealion").fadeIn("fast");
	});

	$("#mascotSeaturtle").click(function() {
		$("#idSeaturtle").fadeIn("fast");
	});

	$("#mascotWhale").click(function() {
		$("#idWhale").fadeIn("fast");
	});

	$("#idAlbatrossClose").click(function() {
		$("#idAlbatross").fadeOut("fast");
	});

	$("#idFishClose").click(function() {
		$("#idFish").fadeOut("fast");
	});	

	$("#idSealionClose").click(function() {
		$("#idSealion").fadeOut("fast");
	});

	$("#idSeaturtleClose").click(function() {
		$("#idSeaturtle").fadeOut("fast");
	});

	$("#idWhaleClose").click(function() {
		$("#idWhale").fadeOut("fast");
	});
});



