export class ageCalculator {
  constructor () {

  }



  getInfo(dateOfBirthString, lifeExpectancy) {
    let info = "your age";

    let dateOfBirth = new Date(dateOfBirthString);
    let dateToday = new Date(Date.now());

    let ageInSeconds = getDateDifferenceInSeconds(dateToday, dateOfBirth);
    info += "on Mercury: " + getMercuryAge(ageInSeconds) + "\n";
    info += "on Venus: " + getVenusAge(ageInSeconds) + "\n";
    info += "on Mars: " + getMarsAge(ageInSeconds) + "\n";
    info += "on Jupiter: " + getJupiterAge(ageInSeconds) + "\n";
    info += "\nyears left:";
    info += "on Mercury: " + getYearsTillDeath(lifeExpectancy, getMercuryAge(ageInSeconds)) + "\n";
    info += "on Venus: " + getYearsTillDeath(lifeExpectancy, getVenusAge(ageInSeconds)) + "\n";
    info += "on Mars: " + getYearsTillDeath(lifeExpectancy, getMarsAge(ageInSeconds)) + "\n";
    info += "on Jupiter: " + getYearsTillDeath(lifeExpectancy, getJupiterAge(ageInSeconds)) + "\n";

  }

  earthYearsToSeconds(years) {
    return years * (3.154 * Math.pow(10,7));
  }

  secondsToEarthYears(seconds) {
    return seconds / (3.154 * Math.pow(10,7));
  }

  getDateDifferenceInSeconds(date1, date2) {
    let age = (date1 - date2) / 1000;
  }

  getMercuryAge(earthSeconds) {
    earthYears = secondsToEarthYears(earthSeconds);
    return earthYears/0.24;
  }

  getVenusAge(earthSeconds) {
    earthYears = secondsToEarthYears(earthSeconds);
    return earthYears/0.62;
  }

  getMarsAge(earthSeconds) {
    earthYears = secondsToEarthYears(earthSeconds);
    return earthYears/1.88;
  }

  getJupiterAge(earthSeconds) {
    earthYears = secondsToEarthYears(earthSeconds);
    return earthYears/11.86;
  }

  getYearsTillDeath(lifeExpectancy, age) {
    yearsTillDeath = lifeExpectancy - age;
    if (yearsTillDeath > 0) {
      return yearsTillDeath;
    } else {
      return "you should be dead already";
    }
  }
}
