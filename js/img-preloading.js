$(function() {
  $("#preload-images").waitForImages(function() {
      console.log("All images loaded.");
      $("#preloader").fadeOut("slow", function() {
      $(this).remove();
      });    
      $("#home").fadeIn("slow");
      $("#preload-images").remove();
    });
});