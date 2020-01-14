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

  $("img").on("load", frameIt);
  $("").on("keydown", function(key){
     if (key.which == 71){
      pressIt();
     }
     });
});
