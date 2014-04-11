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
    expect(Compass.prototype._setTextOfDirection).toHaveBeenCalledWith("0°");
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

