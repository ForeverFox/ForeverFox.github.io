$(function() {
	$("#preload-images").waitForImages({
	    finished: function() {
	        console.log("All images loaded.");
			$("#preloader").delay(4000).fadeOut(500);
			$("#home").addClass("loaded");
		},
	    each: function() {
       		console.log("Image loaded.")
	    },
	    waitForAll: true
	});

	if ($("#home").hasClass("loaded")) {
		$("#fish").show();
	} else {
		return false;
	}
});