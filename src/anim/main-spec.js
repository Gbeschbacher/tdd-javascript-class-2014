describe("Compass -", function() {
  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an Object", function(){
    expect(new Compass()).toEqual(jasmine.any(Object));
  });

  it("should be able to initialize compass with compassImage + Textfield",function(){
    var compass = new Compass("test1", "test2");
    expect(compass.compass).toEqual("test1");
    expect(compass.angleText).toEqual("test2");
  });

});