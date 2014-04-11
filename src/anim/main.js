var $ = require('jquery');

var imageEl = $(new Image());
imageEl.load(function() {
  $('#compassImage').append(imageEl);
  imageEl.attr('width', '500');
}).attr('src', '/img/compass.png');

$(function(){

});

Compass = function(){

}

Compass.prototype = {


}