$( function() {
  $( "#trashStraws" ).draggable();
  $( "#recyclingBin" ).droppable({
    drop: function( event, ui ) {      
      $("#albatross").hide(); 
      $("#trashStraws").css("display", "none");
      $("#albatross").attr("src", "img/albatross-colored.png");            
      $("#albatross").fadeIn(3000);    
    }
  });
} );