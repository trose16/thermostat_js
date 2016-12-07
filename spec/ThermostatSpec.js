describe("Thermostat", function(){
    var thermostat;
    beforeEach(function(){
      thermostat = new Thermostat()
    });

    describe("thermostat starts with:", function() {
      it("a default temperature of 20 degrees", function(){
        expect(thermostat.currentTemperature).toEqual(20)
      });
    });

    describe("thermostat can change temperature:", function(){
      it("increases temperature by 1", function(){
        expect(thermostat.increaseTemperature(1)).toEqual(21)
      });
      it("increases temperature by 5", function(){
        expect(thermostat.increaseTemperature(5)).toEqual(25)
      });
    });
});
