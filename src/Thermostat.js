var Thermostat = function() {
  this.currentTemperature = 20;
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.up = function(number) {
   this.currentTemperature += number;
   if(this.isInPowerSaverMode() === true && this.currentTemperature > 25){
     this.currentTemperature = 25;
     return this.currentTemperature;
   } else {
   return this.currentTemperature;
 }
};

Thermostat.prototype.down = function(number) {
  this.currentTemperature -= number;
  if(this.currentTemperature < 10) {
    this.currentTemperature = 10;
    return this.currentTemperature;
  } else {
  return this.currentTemperature;
  }
};
