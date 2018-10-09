/* var trash = document.querySelector(".trash");
var scene = document.querySelector(".scene");

var active = false;
var currentX;
var currentY;
var initialX;
var initialY;
var xOffset = 0;
var yOffset = 0;

scene.addEventListener("touchstart", dragStart, false);
scene.addEventListener("touchend", dragEnd, false);
scene.addEventListener("touchmove", drag, false);

scene.addEventListener("mousedown", dragStart, false);
scene.addEventListener("mouseup", dragEnd, false);
scene.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === trash) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
  
    e.preventDefault();
  
    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, trash);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
} */



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

  $("#popup").dialog({   
    width: 500
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
    $("#shell3").attr("src", "img/shells-3-colored.png");
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
  }); /* WOULD BE COOL IF I COULD GET THIS TO SHOW UP ONLY ONCE ALL ITEMS HAVE BEEN DROPPED INTO TOTE 
  


  ALSO: CREATE ANIMATION WHERE CREATURE COMES INTO FRAME
  */

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
      }       
    }
  });


/* Keep trash confined to bag 
   $(".trash").draggable( {
    containment: ".tote"
  });

// Getter
var containment = $( ".trash" ).draggable( "option", "containment" );  */


/*
var allDropped = 
$("#straws").hasClass(".trashDropped") && 
$("#wrappers").hasClass(".trashDropped") &&
$("#net").hasClass(".trashDropped") &&
$("#sixPack").hasClass(".trashDropped") &&
$("#plastics").hasClass(".trashDropped") &&
$("#styrofoam").hasClass(".trashDropped") &&
$("#bottlecaps").hasClass(".trashDropped");


if (allDropped) {
  console.log("All dropped!");
  $("#albatrossRecycle").fadeIn("slow");
} else {
  return false;
}



var strawsCheck = $("#straws").hasClass(".trashDropped");

var strawsDropped = strawsCheck.toString()

if (strawsDropped) {
  console.log("Straws dropped!");
  straws();
}

*/


}); 








