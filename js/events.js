//define functions here
function getIt(){
  $("p").on("click", function () {alert("Hey!");});
}
function frameIt(){
    $("img").on("load", function() { 
      $("img").addClass("tasty")}); 
}
function pressIt(){
  $("form input").on("keydown", function(key){
     if (key.which == 71){
       alert("You has pressed the G key");
     }
     });
}
function submitIt() {
  $("form").on("submit", function(){
    alert()
  })
}
$(document).ready(function(){
// call functions here
  getIt();
  frameIt();
  pressIt();
});
