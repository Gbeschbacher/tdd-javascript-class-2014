var $ = require('jquery');
var imageEl = $(new Image());
imageEl.load(function() {
  $('#compassImage').append(imageEl);
  imageEl.attr('width', '500');
}).attr('src', '/img/compass.png');

$(function(){
  new Compass("#compassImage", "#directionHeading");
});

Compass = function(compId, textId){
  this.compass = compId;
  this.angleText = textId
}

Compass.prototype = {


}