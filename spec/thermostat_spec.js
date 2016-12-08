describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
    thermostat.startTemp(20);
  });

    it('Start at 20 degrees', function() {

      expect(thermostat.temp).toEqual(20)
    });

    it('can increase the temperature by 1', function() {
      previousTemp = thermostat.temp
      thermostat.increaseTemp()
      expect(thermostat.temp).toBeGreaterThan(previousTemp)
    });

    it('can decrease the temperature by 1', function() {
      thermostat.startTemp(25)
      thermostat.decreaseTemp()
      expect(thermostat.temp).toEqual(24)
    });

    it('has a minimum temperature of 10', function () {
      expect(thermostat.minimumTemp).toEqual(10)
    });

    it('will throw an error when you try to decrease below minimum temp', function() {
      thermostat.startTemp(10);
      expect(function(){thermostat.decreaseTemp();}).toThrowError("Cannot reduce temp lower than 10")
    });

    it('checks if powersaving is on', function() {
      thermostat.powerSavingOn();
      expect(thermostat.powerSaving).toBe(true)
    });

    it('if powersaving is on maximum temp is 25', function() {
      expect(thermostat.maximumTemp).toEqual(25)
    });

    it('if powersaving is off and temp is above maximum temp reduce to maximum temp', function() {
      thermostat.startTemp(26);
      thermostat.powerSavingOn()
      expect(thermostat.temp).toEqual(25)
    });

    it('if powersaving is off maximum temp is 32', function() {
      thermostat.powerSavingOff();
      expect(thermostat.maximumTemp).toEqual(32)
    });

    it('if powersaving is off maximum temp is 25', function() {
      thermostat.powerSavingOn();
      expect(thermostat.maximumTemp).toEqual(25)
    });

    it('it will throw an error when you try to increase above maximum temp and powersaving is on', function() {
      thermostat.powerSavingOn();
      thermostat.startTemp(25);
      expect(function(){thermostat.increaseTemp();}).toThrowError("Cannot increase temp above maximum")
    });

    it('will throw an error when you try to increase above maximum temp and powersaving is off', function() {
      thermostat.powerSavingOff();
      thermostat.startTemp(32);
      expect(function(){thermostat.increaseTemp();}).toThrowError("Cannot increase temp above maximum")
    });

    it('will return low-usage for temperatures below 18 degrees', function(){
      thermostat.startTemp(17);
      expect(thermostat.energyUsage()).toEqual('low-usage')
      console.log()
    });

    it('will return medium-usage for temperatures below 25 degrees', function(){
      thermostat.startTemp(24);
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    });

    it('will return high-usage for temperatures above 25 degrees', function(){
      thermostat.startTemp(26);
      expect(thermostat.energyUsage()).toEqual('high-usage')
    });

});
