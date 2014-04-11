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

  this.setAngleOfCompass(0);
};

Compass.prototype={
  setAngleOfCompass: function(angle){
    this._rotateCompass(angle);
    this._setTextOfDirection(""+angle+"°");
  },
  _rotateCompass: function(deg){
    $(this.compass).css("transform", "rotate("+deg+"deg)");
  },
  _setTextOfDirection: function(textString){
    $(this.angleText).text(textString);
  }
};
