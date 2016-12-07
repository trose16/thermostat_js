'use strict';
function Thermostat() {

  this.temp = null;

}

Thermostat.prototype.startTemp = function(startTemp) {
  this.temp = startTemp
};

Thermostat.prototype.increaseTemp = function() {
  this.temp++
};

//
//
//
//
//
//
//
//
//
//
//
//
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
