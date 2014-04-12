var $ = require('jquery');
var imageEl = $(new Image());
imageEl.load(function() {
  $('#compassImage').append(imageEl);
  imageEl.attr('width', '500');
}).attr('src', '/img/compass.png');

Compass = function(compId, textId){
  this.compass = compId;
  this.angleText = textId;

  this.angleCounter = 0;

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
};

Compass.prototype={
  setTextOfDirection: function(textString){
    $(this.angleText).text(textString);
  },
  getAngle: function(counter){
    var angle = counter % 360
    return (angle<0? angle+360: angle);
  },
  rotateCompass: function(deg){
    $(this.compass).css("transform", "rotate("+deg+"deg)");
  },
  rotateAndSetText: function(counter){
    this.rotateCompass(this.getAngle(counter));

    var text = this.cardinalDirectionMap[this.getAngle(counter)]? this.cardinalDirectionMap[this.getAngle(counter)] : this.getAngle(counter);
    this.setTextOfDirection(text)
  }
};

var compass = new Compass("#compassImage", "#directionHeading");

document.addEventListener("mousewheel", mouseWheelHandler, false);
function mouseWheelHandler(ev){
  if(ev.wheelDelta > 0){
    compass.angleCounter--;
  }else{
    compass.angleCounter++;
  }
  compass.rotateAndSetText(compass.angleCounter);
}
