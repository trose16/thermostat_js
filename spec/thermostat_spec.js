describe("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

    it('Start at 20 degrees', function() {
      thermostat.startTemp(20);
      expect(thermostat.temp).toEqual(20)
    });

    it('can increase the temperature by n', function() {
      previousTemp = thermostat.temp
      thermostat.increaseTemp()
      expect(thermostat.temp).toBeGreaterThan(previousTemp)
    });

});
