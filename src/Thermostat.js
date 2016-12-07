var Thermostat = function() {
  this.currentTemperature = 20
};

Thermostat.prototype.increaseTemperature = function(number) {
   this.currentTemperature += number
   return this.currentTemperature
};
