$( function() {
/* Albatross Trash Scene */ 
// Popup Instructions
  $(document).ready(function(){
    $("#popup").dialog({
      classes: {
        "ui-dialog": "popup-dialog"
      }
    });
  });

/* Optional Hide FadeOut Effect */
  $("#popup").dialog({  
    hide: {effect: "fadeOut", duration: 1000}
  });
  // Getter
  var hide = $( "#popup" ).dialog( "option", "hide" );
  // Setter
  $( "#popup" ).dialog( "option", "hide", { effect: "fadeOut", duration: 1000 } );  


// DRAG
  $("#trashStraws").draggable( {
    scroll: false
  });

//DROP
  $("#recyclingBin").droppable( {
    drop: function(event, ui) {      
      $("#albatross").hide(); 
      $("#trashStraws").css("display", "none");
      $("#albatross").attr("src", "img/albatross-colored.png");            
      $("#albatross").fadeIn(3000);    
    }
  });
});