//define functions here
function getIt(){
  alert("Hey!");
}
function frameIt(){
    $("img").addClass("tasty"); 
}
function pressIt(){
  alert("You has pressed the G key");
}
$(document).ready(function(){
// call functions here
  $("p").on("click", getIt);
  $("img").on("load", frameIt);
  $("").on("keydown", function(event){
     if (event.which == 71){
      pressIt();
     }
     });
});
