var Thermostat = function() {
  const DEFAULT_TEMP = 20;
  this.currentTemperature = DEFAULT_TEMP;
  this.isInPowerSaverMode = true;
};

Thermostat.prototype.up = function(number) {
   this.currentTemperature += number;
   if(this.isInPowerSaverMode && this.currentTemperature > 25){
     this.currentTemperature = 25;
     return this.currentTemperature;
   } else if(this.isInPowerSaverMode === false && this.currentTemperature > 32){
      this.currentTemperature = 32;
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

Thermostat.prototype.reset = function() {
  this.currentTemperature = this.DEFAULT_TEMP;
  return this.currentTemperature;
};
