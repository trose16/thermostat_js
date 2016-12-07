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
      previousTemp = thermostat.temp
      thermostat.decreaseTemp()
      expect(thermostat.temp).toBeLessThan(previousTemp)
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



});
