import { AgeCalculator } from './../js/ageCalculator.js';

function createOutputString(ageCalculator, dateOfBirthString, lifeExpectancy) {
  let info = "your age\n";

  let dateOfBirth = new Date(dateOfBirthString);
  let dateToday = new Date(Date.now());

  let ageInSeconds = ageCalculator.getDateDifferenceInSeconds(dateToday, dateOfBirth);
  info += "on Earth: " + ageCalculator.secondsToEarthYears(ageInSeconds) + "\n";
  info += "on Mercury: " + ageCalculator.getMercuryAge(ageInSeconds) + "\n";
  info += "on Venus: " + ageCalculator.getVenusAge(ageInSeconds) + "\n";
  info += "on Mars: " + ageCalculator.getMarsAge(ageInSeconds) + "\n";
  info += "on Jupiter: " + ageCalculator.getJupiterAge(ageInSeconds) + "\n";
  info += "\nyears left:\n";
  info += "on Earth: " + ageCalculator.getYearsTillDeath(lifeExpectancy, ageCalculator.secondsToEarthYears(ageInSeconds)) + "\n";
  info += "on Mercury: " + ageCalculator.getYearsTillDeath(lifeExpectancy, ageCalculator.getMercuryAge(ageInSeconds)) + "\n";
  info += "on Venus: " + ageCalculator.getYearsTillDeath(lifeExpectancy, ageCalculator.getVenusAge(ageInSeconds)) + "\n";
  info += "on Mars: " + ageCalculator.getYearsTillDeath(lifeExpectancy, ageCalculator.getMarsAge(ageInSeconds)) + "\n";
  info += "on Jupiter: " + ageCalculator.getYearsTillDeath(lifeExpectancy, ageCalculator.getJupiterAge(ageInSeconds)) + "\n";

  console.log(info);
  return info;
}

$(document).ready(function() {
  $("#gac").submit(function(event) {
    event.preventDefault();
    let dateOfBirthString = $("#dob").val();
    let lifeExpectancy = $("#le").val();

    let ageCalculator = new AgeCalculator();
    let info = createOutputString(ageCalculator, dateOfBirthString, parseInt(lifeExpectancy));

    $("#result").text(info);
  })
})
