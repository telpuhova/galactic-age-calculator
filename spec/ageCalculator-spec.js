import { AgeCalculator } from './../js/ageCalculator.js';

describe("AgeCalculator", function() {

  let ageCalculator;
  let dateOfBirthString;
  let seconds;

  beforeEach(function() {
    ageCalculator = new AgeCalculator();
    dateOfBirthString = "09/01/1994";
    // seconds = 7.253 * Math.pow(10, 8);//23 years
    seconds = 23 * (3.154 * Math.pow(10,7));
  });

  it('should test earthYearsToSeconds', function() {
    expect(ageCalculator.earthYearsToSeconds(23)).toEqual(seconds);
  });

  it('should test secondsToEarthYears', function() {
    expect(ageCalculator.secondsToEarthYears(seconds)).toEqual(23);
  });

  it('should test getDateDifferenceInSeconds', function() {
    let date1 = new Date("09/01/2017");
    let date2 = new Date("09/06/1994");
    expect(Math.round(ageCalculator.getDateDifferenceInSeconds(date1, date2)/1000000)).toEqual(Math.round(seconds/1000000));
  });

  it('should test getting age on different planets', function() {
    expect(ageCalculator.getMercuryAge(seconds)).toEqual(96);
    expect(ageCalculator.getVenusAge(seconds)).toEqual(37);
    expect(ageCalculator.getMarsAge(seconds)).toEqual(12);
    expect(ageCalculator.getJupiterAge(seconds)).toEqual(2);
  });

  it('should test getYearsTillDeath', function() {
    expect(ageCalculator.getYearsTillDeath(60, 20)).toEqual(40);
  });

  it('should test getInfo', function() {
    expect(typeof ageCalculator.getInfo(dateOfBirthString, 60)).toEqual("string");
  });

});
