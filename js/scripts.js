$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 21) {
    $('#drinks').show();
  } else if (age >= 16){
    $('#sixteenTwenty').show();
  } else {
    $('#under-16').show();
  }
});
