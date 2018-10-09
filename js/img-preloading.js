$(function() {
  $("#preload-images").waitForImages(function() {
      console.log("All images loaded.");
      
      $("#preloader").fadeOut("2000", function() {
      $(this).remove();
      }); 

      $("#home").fadeIn("3000");
      $("#preload-images").remove();
    });
});