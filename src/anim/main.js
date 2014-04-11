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

  this.cardinalDirectionMap = {
    0:    "North",
    45:   "North-West",
    90:   "West",
    135:  "South-West",
    180:  "South",
    225:  "Southeast",
    270:  "East",
    315:  "North-East"
  };
  this.setAngleOfCompass(0);
};

Compass.prototype={
  setAngleOfCompass: function(angle){
    this._rotateCompass(angle);
    this._setTextOfDirection(""+angle+"°");
  },
  convertAngleToCardinalDirection: function(angle){
    while(angle >= 360){
      angle-=360;
    }
    return (this.cardinalDirectionMap[angle] ?
      this.cardinalDirectionMap[angle] : angle+"°");
  },
  mapPixelToDeg: function(pixel){

    return pixel/4;
  },
  setAngleOfCompassByPixel: function(pixel){
    this._rotateCompass(this.mapPixelToDeg(pixel));
  },
  setTextAccordingToPixel: function(pixel){
    this._setTextOfDirection(
      this.convertAngleToCardinalDirection(this.mapPixelToDeg(pixel))
    );
  },
  _rotateCompass: function(deg){
    $(this.compass).css("transform", "rotate("+deg+"deg)");
  },
  _setTextOfDirection: function(textString){
    $(this.angleText).text(textString);
  }
};
