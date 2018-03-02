$(document).ready(function () {
  //global variables
  var wins = 0;
  var losses = 0;
  var match = Math.floor(Math.random() * 100) + 19;
  var result = 0;
  var crystalArray = [];

  // Your code here...

  function reset() {
    result = 0;
    match = Math.floor(Math.random() * 100) + 19;
    $("#matchMe").html(match);
    for (var i = 0; i < 4; i++) {
      crystalArray[i] = Math.floor(Math.random() * 12) + 1;
    }
  }

  reset();



  $(".color1").on("click", function () {
    result = result + crystalArray[0];
    $("#total").html(result);
    if (result === match) {
      wins++;
      $("#wins").html(wins);
      reset();
    }
    else if (result > match) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  $(".color2").on("click", function () {
    result = result + crystalArray[1];
    $("#total").html(result);
    if (result === match) {
      wins++;
      $("#wins").html(wins);
      reset();
    }
    else if (result > match) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  $(".color3").on("click", function () {
    result = result + crystalArray[2];
    $("#total").html(result);
    if (result === match) {
      wins++;
      $("#wins").html(wins);
      reset();
    }
    else if (result > match) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

  $(".color4").on("click", function () {
    result = result + crystalArray[3];
    $("#total").html(result);
    if (result === match) {
      wins++;
      $("#wins").html(wins);
      reset();
    }
    else if (result > match) {
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });

})
