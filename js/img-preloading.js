$(function() {
  $(".preload-images").waitForImages(function() {
    finished:function() {
      console.log("All images loaded.");
      $("#preloader").fadeOut("fast");
      $("#preloader").remove();    
      $("#home").fadeIn("slow");
      $("#preload-images").remove(); 
    },
    waitForAll:true
});