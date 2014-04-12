describe("Compass -", function() {
  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an Object", function(){
    expect(new Compass()).toEqual(jasmine.any(Object));
  });

});

describe("Compass ", function(){
  beforeEach(function(){
    this.compass = new Compass("#compassImage", "#directionHeading");
 });

  it("should be able to initialize compass with compassImage + Textfield",function(){
    expect(this.compass.compass).toEqual("#compassImage");
    expect(this.compass.angleText).toEqual("#directionHeading");
  });

  it("should return 10 deg if scrolled down 10 'mousewheels'", function(){
    expect(this.compass.getAngle(10)).toBe(10);
  });

  it("should return special values to correct degree", function(){
    expect(this.compass.getAngle(-10)).toBe(350);
    expect(this.compass.getAngle(720)).toBe(0);
  });
});

describe("Compass ", function(){
  var compass;
  beforeEach(function(){
    compass = new Compass("#compassImage", "#directionHeading");
    spyOn(compass, "setTextOfDirection");
    spyOn(compass, "rotateCompass");
    spyOn(compass, "rotateAndSetText").andCallThrough();

  });

  it("should set Text-Div according to rotation-Angle", function(){
    compass.rotateAndSetText(111);
    expect(compass.rotateAndSetText).toHaveBeenCalledWith(111);
    expect(compass.rotateCompass).toHaveBeenCalledWith(111);
    expect(compass.setTextOfDirection).toHaveBeenCalledWith(111);
  });

  it("should set Text-Div according to rotation-Angle (East - 270)", function(){
    compass.rotateAndSetText(270);
    expect(compass.rotateAndSetText).toHaveBeenCalledWith(270);
    expect(compass.rotateCompass).toHaveBeenCalledWith(270);
    expect(compass.setTextOfDirection).toHaveBeenCalledWith("East");
  });

  it("should set Text-Div according to rotation-Angle (scrolled 10 units to top --> -10 calling)", function(){
    compass.rotateAndSetText(-10);
    expect(compass.rotateAndSetText).toHaveBeenCalledWith(-10);
    expect(compass.rotateCompass).toHaveBeenCalledWith(350);
    expect(compass.setTextOfDirection).toHaveBeenCalledWith(350);
  });
});