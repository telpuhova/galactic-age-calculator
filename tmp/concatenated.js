import { AgeCalculator } from './../js/ageCalculator.js';

$(document).ready(function() {
  $("#gac").submit(function(event) {
    event.preventDefault();
    let dateOfBirthString = $("#dob").val();
    let lifeExpectancy = $("#le").val();

    let ageCalculator = new AgeCalculator();
    let info = ageCalculator.getInfo(dateOfBirthString, parseInt(lifeExpectancy));

    $("#result").text(info);
  })
})
