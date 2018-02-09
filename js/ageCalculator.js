export class AgeCalculator {
  constructor () {

  }



  getInfo(dateOfBirthString, lifeExpectancy) {
    let info = "your age\n";

    let dateOfBirth = new Date(dateOfBirthString);
    let dateToday = new Date(Date.now());

    let ageInSeconds = this.getDateDifferenceInSeconds(dateToday, dateOfBirth);
    info += "on Earth: " + this.secondsToEarthYears(ageInSeconds) + "\n";
    info += "on Mercury: " + this.getMercuryAge(ageInSeconds) + "\n";
    info += "on Venus: " + this.getVenusAge(ageInSeconds) + "\n";
    info += "on Mars: " + this.getMarsAge(ageInSeconds) + "\n";
    info += "on Jupiter: " + this.getJupiterAge(ageInSeconds) + "\n";
    info += "\nyears left:\n";
    info += "on Earth: " + this.getYearsTillDeath(lifeExpectancy, this.secondsToEarthYears(ageInSeconds)) + "\n";
    info += "on Mercury: " + this.getYearsTillDeath(lifeExpectancy, this.getMercuryAge(ageInSeconds)) + "\n";
    info += "on Venus: " + this.getYearsTillDeath(lifeExpectancy, this.getVenusAge(ageInSeconds)) + "\n";
    info += "on Mars: " + this.getYearsTillDeath(lifeExpectancy, this.getMarsAge(ageInSeconds)) + "\n";
    info += "on Jupiter: " + this.getYearsTillDeath(lifeExpectancy, this.getJupiterAge(ageInSeconds)) + "\n";

    console.log(info);
    return info;
  }

  earthYearsToSeconds(years) {
    return years * (3.154 * Math.pow(10,7));
  }

  secondsToEarthYears(seconds) {
    return  Math.round(seconds / (3.154 * Math.pow(10,7)));
  }

  getDateDifferenceInSeconds(date1, date2) {
    return Math.round((date1 - date2) / 1000);
    // return (date1 - date2) / 1000;
  }

  getMercuryAge(earthSeconds) {
    let earthYears = this.secondsToEarthYears(earthSeconds);
    return Math.round(earthYears/0.24);
  }

  getVenusAge(earthSeconds) {
    let earthYears = this.secondsToEarthYears(earthSeconds);
    return Math.round(earthYears/0.62);
  }

  getMarsAge(earthSeconds) {
    let earthYears = this.secondsToEarthYears(earthSeconds);
    return Math.round(earthYears/1.88);
  }

  getJupiterAge(earthSeconds) {
    let earthYears = this.secondsToEarthYears(earthSeconds);
    return Math.round(earthYears/11.86);
  }

  getYearsTillDeath(lifeExpectancy, age) {
    let yearsTillDeath = lifeExpectancy - age;
    if (yearsTillDeath > 0) {
      return yearsTillDeath;
    } else {
      return "you should be dead already";
    }
  }
}
