$(function() {
	$("#preload-images").waitForImages({
	    finished: function() {
	        console.log("All images loaded.");
			$("#preloader").delay(4000).fadeOut(500);
		},
	    each: function() {
       		console.log("Image loaded.")
	    },
	    waitForAll: true
	});
});