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
// Drag and drop
  $("#trashStraws").draggable();
  $("#recyclingBin").droppable({
    drop: function(event, ui) {      
      $("#albatross").hide(); 
      $("#trashStraws").css("display", "none");
      $("#albatross").attr("src", "img/albatross-colored.png");            
      $("#albatross").fadeIn(3000);    
    }
  });
});