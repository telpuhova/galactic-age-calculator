(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AgeCalculator = exports.AgeCalculator = function () {
  function AgeCalculator() {
    _classCallCheck(this, AgeCalculator);
  }

  _createClass(AgeCalculator, [{
    key: "getInfo",
    value: function getInfo(dateOfBirthString, lifeExpectancy) {
      var info = "your age\n";

      var dateOfBirth = new Date(dateOfBirthString);
      var dateToday = new Date(Date.now());

      var ageInSeconds = this.getDateDifferenceInSeconds(dateToday, dateOfBirth);
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
  }, {
    key: "earthYearsToSeconds",
    value: function earthYearsToSeconds(years) {
      return years * (3.154 * Math.pow(10, 7));
    }
  }, {
    key: "secondsToEarthYears",
    value: function secondsToEarthYears(seconds) {
      return Math.round(seconds / (3.154 * Math.pow(10, 7)));
    }
  }, {
    key: "getDateDifferenceInSeconds",
    value: function getDateDifferenceInSeconds(date1, date2) {
      return Math.round((date1 - date2) / 1000);
      // return (date1 - date2) / 1000;
    }
  }, {
    key: "getMercuryAge",
    value: function getMercuryAge(earthSeconds) {
      var earthYears = this.secondsToEarthYears(earthSeconds);
      return Math.round(earthYears / 0.24);
    }
  }, {
    key: "getVenusAge",
    value: function getVenusAge(earthSeconds) {
      var earthYears = this.secondsToEarthYears(earthSeconds);
      return Math.round(earthYears / 0.62);
    }
  }, {
    key: "getMarsAge",
    value: function getMarsAge(earthSeconds) {
      var earthYears = this.secondsToEarthYears(earthSeconds);
      return Math.round(earthYears / 1.88);
    }
  }, {
    key: "getJupiterAge",
    value: function getJupiterAge(earthSeconds) {
      var earthYears = this.secondsToEarthYears(earthSeconds);
      return Math.round(earthYears / 11.86);
    }
  }, {
    key: "getYearsTillDeath",
    value: function getYearsTillDeath(lifeExpectancy, age) {
      var yearsTillDeath = lifeExpectancy - age;
      if (yearsTillDeath > 0) {
        return yearsTillDeath;
      } else {
        return "you should be dead already";
      }
    }
  }]);

  return AgeCalculator;
}();

},{}],2:[function(require,module,exports){
"use strict";

var _ageCalculator = require("./../js/ageCalculator.js");

$(document).ready(function () {
  $("#gac").submit(function (event) {
    event.preventDefault();
    var dateOfBirthString = $("#dob").val();
    var lifeExpectancy = $("#le").val();

    var ageCalculator = new _ageCalculator.AgeCalculator();
    var info = ageCalculator.getInfo(dateOfBirthString, parseInt(lifeExpectancy));

    $("#result").text(info);
  });
});

},{"./../js/ageCalculator.js":1}]},{},[2]);
