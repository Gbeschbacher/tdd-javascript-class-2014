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