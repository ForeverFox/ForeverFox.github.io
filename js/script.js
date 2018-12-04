function restartScene() {
	location.reload(true);
}

function scrollToTop() {
	window.scrollTo(0, 0);
}

function sandcastle1() {
	$("#sandcastle1").fadeIn(700);
	$("#sandcastle1").delay(500).fadeOut(1500);
	$("#sandcastleBase").delay(1500).fadeIn(300);
}

function sandcastleBase() {
	$("#sandcastle2").delay(100).fadeIn(1300);
}

function sandcastle2() {
	$("#sandcastle2").delay(1000).fadeOut(500);
	$("#sandcastle3").delay(1500).fadeIn(1300);
}

function sandcastle3() {
	$("#sandcastle3").delay(1500).fadeOut(500);
	$("#sandcastle4").delay(1000).fadeIn(1300);
}

function sandcastle4() {
	$("#sandcastle4").delay(1500).fadeOut(500);
	$("#sandcastle5").delay(1000).fadeIn(1300);
}

function sandcastle5() {
	$("#sandcastle5").delay(1500).fadeOut(500);
	$("#sandcastle6").delay(1000).fadeIn(1300);
}

function sandcastle6() {
	$("#sandcastle6").delay(1500).fadeOut(500);
	$("#sandcastle7").delay(1000).fadeIn(1300);
}

function sandcastle7() {
	$("#sandcastle7").delay(1500).fadeOut(500);
	$("#sandcastle8").delay(1000).fadeIn(1300);
}

function sandcastle8() {
	$("#sandcastle8").delay(1500).fadeOut(500);
	$("#sandcastle9").delay(1000).fadeIn(1300);
}

function sandcastle9() {
	$("#sandcastle9").delay(1500).fadeOut(500);
	$("#sandcastle10").delay(1000).fadeIn(1300);
}

function sandcastle10() {
	$("#sandcastle10").delay(1500).fadeOut(500);
	$("#sandcastle11").delay(1000).fadeIn(1300);
}

function sandcastle11() {
	$("#sandcastle11").delay(1500).fadeOut(500);
	$("#sandcastle12").delay(1000).fadeIn(1300);
}

function sandcastle12() {
	$("#sandcastle12").delay(300).fadeOut(500);
	$("#sandcastle13").delay(1000).fadeIn(1300);
}

function sandcastle13() {
	$("#sandcastle13").delay(1500).fadeOut(500);
	$("#sandcastle14").delay(1000).fadeIn(1300);
}

function sandcastle14() {
	$("#sandcastle14").delay(1500).fadeOut(500);
	$("#sandcastle15").delay(1000).fadeIn(1300);
}

function sandcastle15() {
	$("#sandcastle15").delay(1500).fadeOut(500);
	$("#sandcastle16").delay(1000).fadeIn(1300);
}

function sandcastle16() {
	$("#sandcastle16").delay(1500).fadeOut(500);
	$("#sandcastle17").delay(1000).fadeIn(1300);
}

function sandcastle17() {
	$("#sandcastle17").delay(1500).fadeOut(500);
	$("#sandcastle18").delay(1000).fadeIn(1300);
}

function sandcastle18() {
	$("#sandcastle18").delay(1500).fadeOut(500);
	$("#sandcastle19").delay(1000).fadeIn(1300);
	$("#allDoneSealion").delay(2000).fadeIn("slow");
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

	$("#brochurePlastics").click(function() {
		$("#brochurePlasticsOpen").fadeIn("fast");
	});

	$("#brochureRecycling").click(function() {
		$("#brochureRecyclingOpen").fadeIn("fast");
	});

	$("#brochureReps").click(function() {
		$("#brochureRepsOpen").fadeIn("fast");
	});

	$("#plasticsClsBtn").click(function() {
		$("#brochurePlasticsOpen").fadeOut("fast");
	});

	$("#recyclingClsBtn").click(function() {
		$("#brochureRecyclingOpen").fadeOut("fast");
	});

	$("#ourRepsClsBtn").click(function() {
		$("#brochureRepsOpen").fadeOut("fast");
	});

// Arrows
	$("#plasticsToReps").click(function() {
		$("#brochurePlasticsOpen").fadeOut("fast");
		$("#brochureRepsOpen").fadeIn("fast");
	});

	$("#plasticsToRecycle").click(function() {
		$("#brochurePlasticsOpen").fadeOut("fast");
		$("#brochureRecyclingOpen").fadeIn("fast");
	});	

	$("#recycleToReps").click(function() {
		$("#brochureRecyclingOpen").fadeOut("fast");
		$("#brochureRepsOpen").fadeIn("fast");
	});

	$("#recycleToPlastics").click(function() {
		$("#brochureRecyclingOpen").fadeOut("fast");
		$("#brochurePlasticsOpen").fadeIn("fast");
	});	

	$("#repsToRecycle").click(function() {
		$("#brochureRepsOpen").fadeOut("fast");
		$("#brochureRecyclingOpen").fadeIn("fast");
	});

	$("#repsToPlastics").click(function() {
		$("#brochureRepsOpen").fadeOut("fast");
		$("#brochurePlasticsOpen").fadeIn("fast");
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

function sandcastleCall() {
		if ($("#sealion-item-tools").hasClass("reuse") && $("#sealion-item-waxed").hasClass("reuse") && $("#sealion-item-lunchbag").hasClass("reuse") && $("#sealion-item-towel").hasClass("reuse") && $("#sealion-item-bottle").hasClass("reuse") && $("#sealion-item-fruit").hasClass("reuse")) {

				$("#sandcastleCall").fadeIn("fast");  
				$("#sealionBucket").fadeIn("fast");     
      } 
	}

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
	});

	$("#sealion-item-tools").click(function() {
		$("#sealion-item-tools").addClass("reuse");
		$("#sealionPopup1").fadeIn("slow");
	});

	$("#sealion-item-waxed").click(function() {
		$("#sealion-item-waxed").addClass("reuse");
		$("#sealionPopup2").fadeIn("slow");
	});

	$("#sealion-item-lunchbag").click(function() {
		$("#sealion-item-lunchbag").addClass("reuse");
		$("#sealionPopup3").fadeIn("slow");
	});

	$("#sealion-item-towel").click(function() {
		$("#sealion-item-towel").addClass("reuse");
		$("#sealionPopup4").fadeIn("slow");
	});

	$("#sealion-item-bottle").click(function() {
		$("#sealion-item-bottle").addClass("reuse");
		$("#sealionPopup5").fadeIn("slow");
	});

	$("#sealion-item-fruit").click(function() {
		$("#sealion-item-fruit").addClass("reuse");
		$("#sealionPopup6").fadeIn("slow");
	});

	$("#sealionClose1").click(function() {
		$("#sealionPopup1").fadeOut("fast");
		sandcastleCall();
	});

	$("#sealionClose2").click(function() {
		$("#sealionPopup2").fadeOut("fast");
		sandcastleCall();
	});

	$("#sealionClose3").click(function() {
		$("#sealionPopup3").fadeOut("fast");
	});

	$("#sealionClose4").click(function() {
		$("#sealionPopup4").fadeOut("fast");
		sandcastleCall();
	});

	$("#sealionClose5").click(function() {
		$("#sealionPopup5").fadeOut("fast");
		sandcastleCall();
	});

	$("#sealionClose6").click(function() {
		$("#sealionPopup6").fadeOut("fast");
		sandcastleCall();
	});

	$("#sealionClose7").click(function() {
		$("#sandcastleCall").fadeOut("fast");
	});

	$("#sealionBucket").click(function() {
		sandcastle1();

		setTimeout(function() {
			sandcastleBase();
		}, 2000);

		setTimeout(function() {
			sandcastle2();
		}, 2000);

		setTimeout(function() {
			sandcastle3();
		}, 3000);

		setTimeout(function() {
			sandcastle4();
		}, 4000);

		setTimeout(function() {
			sandcastle5();
		}, 5000);

		setTimeout(function() {
			sandcastle6();
		}, 6000);

		setTimeout(function() {
			sandcastle7();
		}, 7000);

		setTimeout(function() {
			sandcastle8();
		}, 8000);

		setTimeout(function() {
			sandcastle9();
		}, 9000);

		setTimeout(function() {
			sandcastle10();
		}, 10000);

		setTimeout(function() {
			sandcastle11();
		}, 11000);

		setTimeout(function() {
			sandcastle12();
		}, 12000);

		setTimeout(function() {
			sandcastle13();
		}, 13000);

		setTimeout(function() {
			sandcastle14();
		}, 14000);

		setTimeout(function() {
			sandcastle15();
		}, 15000);

		setTimeout(function() {
			sandcastle16();
		}, 16000);

		setTimeout(function() {
			sandcastle17();
		}, 17000);

		setTimeout(function() {
			sandcastle18();
		}, 18000);
	});

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
	
//Scroll
window.addEventListener("scroll", function() {
  $("#bubbles").delay(2000).fadeIn("slow");
});

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

	$("#flipWhale").click(function() {
		$(".id-logo").fadeOut("fast");
		$(".id-photo").fadeOut("fast")
		$("#whale1").fadeOut("fast");
		$("#whale2").fadeIn("fast");
	});

	$("#flipWhale2").click(function() {
		$(".id-logo").fadeIn("fast");
		$(".id-photo").fadeIn("fast")
		$("#whale1").fadeIn("fast");
		$("#whale2").fadeOut("fast");
	});

	$("#flipAlbatross").click(function() {
		$(".id-logo").fadeOut("fast");
		$(".id-photo").fadeOut("fast")
		$("#albatross1").fadeOut("fast");
		$("#albatross2").fadeIn("fast");
	});

	$("#flipAlbatross2").click(function() {
		$(".id-logo").fadeIn("fast");
		$(".id-photo").fadeIn("fast")
		$("#albatross1").fadeIn("fast");
		$("#albatross2").fadeOut("fast");
	});

	$("#flipSealion").click(function() {
		$(".id-logo").fadeOut("fast");
		$(".id-photo").fadeOut("fast")
		$("#sealion1").fadeOut("fast");
		$("#sealion2").fadeIn("fast");
	});

	$("#flipSealion2").click(function() {
		$(".id-logo").fadeIn("fast");
		$(".id-photo").fadeIn("fast")
		$("#sealion1").fadeIn("fast");
		$("#sealion2").fadeOut("fast");
	});

	$("#flipSeaturtle").click(function() {
		$(".id-logo").fadeOut("fast");
		$(".id-photo").fadeOut("fast")
		$("#seaturtle1").fadeOut("fast");
		$("#seaturtle2").fadeIn("fast");
	});

	$("#flipSeaturtle2").click(function() {
		$(".id-logo").fadeIn("fast");
		$(".id-photo").fadeIn("fast")
		$("#seaturtle1").fadeIn("fast");
		$("#seaturtle2").fadeOut("fast");
	});

	$("#flipFish").click(function() {
		$(".id-logo").fadeOut("fast");
		$(".id-photo").fadeOut("fast")
		$("#fish1").fadeOut("fast");
		$("#fish2").fadeIn("fast");
	});

	$("#flipFish2").click(function() {
		$(".id-logo").fadeIn("fast");
		$(".id-photo").fadeIn("fast")
		$("#fish1").fadeIn("fast");
		$("#fish2").fadeOut("fast");
	});

});



