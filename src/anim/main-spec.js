describe("Compass -", function() {
  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an Object", function(){
    expect(new Compass()).toEqual(jasmine.any(Object));
  });

});

describe("Compass Object", function(){
  beforeEach(function(){
    this.compass = new Compass("#compassImage", "#directionHeading");
  });

  it("should be able to initialize compass with compassImage + Textfield",function(){
    expect(this.compass.compass).toEqual("#compassImage");
    expect(this.compass.angleText).toEqual("#directionHeading");
  });

  it("initialization should set a default angle/text", function(){
    spyOn(Compass.prototype, "_rotateCompass");
    spyOn(Compass.prototype, "_setTextOfDirection");
    new Compass()
    expect(Compass.prototype._rotateCompass).toHaveBeenCalled();
    expect(Compass.prototype._rotateCompass).toHaveBeenCalledWith(0);
    expect(Compass.prototype._setTextOfDirection).toHaveBeenCalled();
    expect(Compass.prototype._setTextOfDirection).toHaveBeenCalledWith("North");
  });
});

describe("Convert ", function(){

  beforeEach(function(){
    this.compass = new Compass("#compassImage", "#directionHeading");
  });

  it("angle 0 to cardinal direction (North)", function(){
    expect(this.compass.convertAngleToCardinalDirection(0)).toEqual("North")
  });

  it("angle 90 to cardinal direction (West)", function(){
    expect(this.compass.convertAngleToCardinalDirection(90)).toEqual("West")
  });

  it("angle 45 to cardinal direction (North-West)", function(){
    expect(this.compass.convertAngleToCardinalDirection(45)).toEqual("North-West")
  });

  it("angle 315 to cardinal direction (North-East)", function(){
    expect(this.compass.convertAngleToCardinalDirection(315)).toEqual("North-East")
  });
});

describe("Leave ", function(){
  beforeEach(function(){
    this.compass = new Compass("#compassImage", "#directionHeading");
  });

  it("should still leave non-cardinal (222) directions as degree (222°) ", function(){
    expect(this.compass.convertAngleToCardinalDirection(222)).toEqual("222°");
  });

  it("should still leave non-cardinal (2) directions as degree (2°) ", function(){
    expect(this.compass.convertAngleToCardinalDirection(2)).toEqual("2°");
  });
});

describe("Map ", function(){
  beforeEach(function(){
    this.compass = new Compass("#compassImage", "#directionHeading");
  });

  it("pixel (49) to degree (2) ", function(){
    expect(this.compass.mapPixelToDeg(49)).toEqual(2);
  });
  it("pixel (245) to degree (10) ", function(){
    expect(this.compass.mapPixelToDeg(245)).toEqual(10);
  });
});

describe("Compass angle should be set with ", function(){
  it("222 pixel; expected result: _rotateCompass gets called with 55.5 degree", function(){
    spyOn(Compass.prototype, "_rotateCompass");
    spyOn(Compass.prototype, "mapPixelToDeg");
    new Compass("#compassImage", "#directionHeading").mapPixelToDeg(222);
    expect(Compass.prototype._rotateCompass).toHaveBeenCalled();
    expect(Compass.prototype.mapPixelToDeg).toHaveBeenCalledWith(222);
  });
});

describe("Compass text should be according to set angle ", function(){
  it("360 pixel --> 90deg --> West = text", function(){
    var temp = new Compass();
    spyOn(Compass.prototype, "_setTextOfDirection");
    spyOn(Compass.prototype, "convertAngleToCardinalDirection");
    spyOn(Compass.prototype, "mapPixelToDeg");

    Compass.prototype.setTextAccordingToPixel(360);
    expect(Compass.prototype._setTextOfDirection).toHaveBeenCalled();
  });
});
