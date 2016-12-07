'use strict';
function Thermostat() {

  this.temp = null;
  this.minimumTemp = 10

}

Thermostat.prototype.startTemp = function(startTemp) {
  this.temp = startTemp
};

Thermostat.prototype.increaseTemp = function() {
  this.temp++
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp <= this.minimumTemp) {
    throw new Error("Cannot reduce temp lower than 10");
  }
  else {
    this.temp--;
  };

};
