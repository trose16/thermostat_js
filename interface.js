$(document).ready(function() {

  $( "a" ).addClass( "test" );
  $("a").click(function(event){
    alert("Who dun whaaaat?!");
    event.preventDefault();
    $( this ).fadeOut( "slow" );
  });

});

$(document).ready(function() {
  var thermostat = new Thermostat();
  displayTemperature()

  function displayTemperature() {
    $('#temperature').text(thermostat.currentTemperature + "°C");
    $('#temperature').attr('class', thermostat.energyReport());
  }

  $('#temperature-up').click(function() {
    thermostat.up();
    displayTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    displayTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.reset();
    displayTemperature();
  })

  $('#power-saving-toggle').click(function() {
    $('#power-saving-status').text(thermostat.powerSaverMode());
    displayTemperature();
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f7940fe5cc40b53866520aa94b9c285b&units=metric', function(data) {
    $('#weather').text("Outside temperature: " + Math.round(data.main.temp) + "°C");
  })



});
