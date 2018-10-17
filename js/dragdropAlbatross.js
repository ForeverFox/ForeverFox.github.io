/* Albatross Trash Scene */ 
$( function() {
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
  $( "#popup" ).dialog( "option", "hide", { effect: "fadeOut", duration: 1000} );  

  $("#popup").dialog({   
    width: 400
  });
  // Getter
  var width = $( ".selector" ).dialog( "option", "width" );
  // Setter
  $( ".selector" ).dialog( "option", "width", 500 );  

// Drag and Drop

//Functions

function albatrossColoring() {
  location.reload(true);
}

function straws() {  
    $("#albatross").hide(); 
    $("#trashStraws").fadeOut(500);
    $("#albatross").attr("src", "img/albatross-colored.png");            
    $("#albatross").fadeIn(1000);   
}

function wrappers() {     
    $("#crab").hide(); 
    $("#trashWrappers").fadeOut(500);
    $("#crab").attr("src", "img/crab-colored.png");            
    $("#crab").fadeIn(1000);         
}

function net() {     
    $("#shell1").hide(); 
    $("#trashNet").fadeOut(500);
    $("#shell1").attr("src", "img/shells-1-colored.png");            
    $("#shell1").fadeIn(1000);       
}

function sixPack() {     
    $("#shell2").hide(); 
    $("#trashSixPack").fadeOut(500);
    $("#shell2").attr("src", "img/shells-2-colored.png");            
    $("#shell2").fadeIn(1000);       
}

function plastics() {     
    $("#beachball").hide(); 
    $("#trashPlastics").fadeOut(500);
    $("#beachball").attr("src", "img/beachball-colored.png");            
    $("#beachball").fadeIn(1000);       
}

function styrofoam() {
    $("#shell3").hide();     
    $("#trashStyrofoam").fadeOut(500);
    $("#shell3").attr("src", "img/conch-colored.png");
    $("#shell3").fadeIn(1000);       
}

function background() {    
    $("#albatrossBackground").hide(); 
    $("#albatross").attr("src", "img/albatross-colored.png");            
    $("#albatrossBackground").addClass("albatross-bg-2");   
    $("#albatrossBackground").show();
}

//RECYCLE 
  $("#albatrossRecycle").click(function() {
    albatrossColoring();
  });

// DRAG
  $(".trash").draggable( {
    drag: function(event, ui) {
      scroll: false;    
    }
  });

  $("#trashStraws").on("drag", function(event, ui) {
      $("#straws").addClass("trashDropped");
    });   

  $("#trashWrappers").on("drag", function(event, ui) {
      $("#wrappers").addClass("trashDropped");   
    });   

  $("#trashNet").on("drag", function(event, ui) {
      $("#net").addClass("trashDropped");   
    }); 

  $("#trashSixPack").on("drag", function(event, ui) {
      $("#sixPack").addClass("trashDropped");   
    });

  $("#trashPlastics").on("drag", function(event, ui) {
      $("#plastics").addClass("trashDropped");   
    });   

  $("#trashStyrofoam").on("drag", function(event, ui) {
      $("#styrofoam").addClass("trashDropped");   
    });     

//DROP
  $(".tote").droppable( {
    drop: function(event, ui) {
      if ($("#straws").hasClass("trashDropped")) {
        console.log("Straws dropped!");
        straws();
      } 

      if ($("#wrappers").hasClass("trashDropped")) {
        console.log("Wrappers dropped!");
        wrappers();
      } 

      if ($("#net").hasClass("trashDropped")) {
        console.log("Net dropped!");
        net();
      } 

      if ($("#sixPack").hasClass("trashDropped")) {
        console.log("Six pack dropped!");
        sixPack();
      } 

      if ($("#plastics").hasClass("trashDropped")) {
        console.log("Plastics dropped!");
        plastics();
      }      

      if ($("#styrofoam").hasClass("trashDropped")) {
        console.log("Styrofoam dropped!");
        styrofoam();
      }          

      if ($("#styrofoam").hasClass("trashDropped") && $("#plastics").hasClass("trashDropped") && $("#sixPack").hasClass("trashDropped") && $("#net").hasClass("trashDropped") && $("#wrappers").hasClass("trashDropped") && $("#straws").hasClass("trashDropped")) {
        console.log("All dropped!");
        background();
        $("#allDoneAlbatross").fadeIn();
      }       
    }
  });
/* Keep trash confined to bag 
   $(".trash").draggable( {
    containment: ".tote"
  });

// Getter
var containment = $( ".trash" ).draggable( "option", "containment" );  */
}); 








