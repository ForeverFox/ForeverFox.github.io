/* Image Preloading */
$("document").ready(function() {
  var happyImages = new Array(
    "../img/map-icon.png",  	
    "../img/map.png",
    "../img/about-brochure.png",
    "../img/albatross.png",
    "../img/resources.png"
    );

  function imgPreload(){
    for (i = 0; i < imgPreload.arguments.length; i++) {
	   happyImages[i] = new Image();
	   happyImages[i].src = imgPreload.arguments[i];
    }
  };
  
  imgPreload();
  }); 