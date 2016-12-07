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
      spyOn(thermostat, 'temp').andReturn(10)
      console.log("spec" + thermostat.temp);
      expect(function(){thermostat.decreaseTemp;}).toThrowError("Cannot reduce temp lower than 10")
    });
});
