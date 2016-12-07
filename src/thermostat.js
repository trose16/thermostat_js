'use strict';
function Thermostat() {

  this.temp = null;
  this.minimumTemp = 10;
  this.powerSaving = true;
  this.maximumTemp = 25

}

Thermostat.prototype.startTemp = function(startTemp) {
  this.temp = startTemp
};

Thermostat.prototype.increaseTemp = function() {
  if (this.temp >= this.maximumTemp) {
    throw new Error("Cannot increase temp above maximum");
  }
  else {
    this.temp++;
  };

};

Thermostat.prototype.decreaseTemp = function() {
  if (this.temp <= this.minimumTemp) {
    throw new Error("Cannot reduce temp lower than 10");
  }
  else {
    this.temp--;
  };
};


Thermostat.prototype.powerSavingOn = function() {
  this.maximumTemp = 25
  if (this.temp > this.maximumTemp) {
    this.temp = this.maximumTemp;
  }
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.maximumTemp = 32;
  this.powerSaving = false
};
