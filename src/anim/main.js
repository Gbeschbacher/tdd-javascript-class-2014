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
    return (this.cardinalDirectionMap[angle] ?
      this.cardinalDirectionMap[angle] : "");
  },
  _rotateCompass: function(deg){
    $(this.compass).css("transform", "rotate("+deg+"deg)");
  },
  _setTextOfDirection: function(textString){
    $(this.angleText).text(textString);
  }
};
