describe("Compass -", function() {
  it("the testing framework should work properly", function() {
    expect(true).toEqual(true);
  });

  it("should be an Object", function(){
    expect(new Compass()).toEqual(jasmine.any(Object));
  });

});