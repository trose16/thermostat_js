describe("Thermostat", function(){
    var thermostat;

    describe("thermostat starts with:", function() {
      it("a default temperature of 20 degrees", function(){
        thermostat = new Thermostat();
        expect(thermostat.temperature()).toEqual(20)
      });
    });
});
