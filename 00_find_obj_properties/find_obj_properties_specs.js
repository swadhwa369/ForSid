/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('findObjPropsHasOwn', () => {
  function Rectangle(color, height, width) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.height * this.width;
  };

  it('prints out the key', () => {
    const greenRectangle = { color: 'green' };

    expect(findObjPropsHasOwn(greenRectangle)).toBe('color');
  });

  it("prints out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjPropsHasOwn(yelloRectangle)).toBe('color, height, width');
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const blueRectangle = new Rectangle('blue', 5, 3);

    expect(findObjPropsHasOwn(blueRectangle)).toBe('color, height, width');
  });

  it('it uses the `.hasOwnProperty` method', () => {
    const purpleRectangle = new Rectangle('purple', 7, 2);
    spyOn(purpleRectangle, 'hasOwnProperty').and.callThrough(); // checks to see if hasOwnProperty is called

    findObjPropsHasOwn(purpleRectangle);

    expect(purpleRectangle.hasOwnProperty).toHaveBeenCalled();
    // Note: do no use .call on Object.hasOwnProperty.call(purpleRectangle);
  });
});

describe('findObjKeys', () => {
  function Rectangle(color, height, width) {
    this.color = color;
    this.height = height;
    this.width = width;
  }

  Rectangle.prototype.getArea = function() {
    return this.height * this.width;
  };

  it('prints out the key', () => {
    const greenRectangle = { color: 'green' };

    expect(findObjKeys(greenRectangle)).toBe('color');
  });

  it("prints out the object's keys, comma delimited", () => {
    const yelloRectangle = { color: 'yellow', height: 8, width: 5 };

    expect(findObjKeys(yelloRectangle)).toBe('color, height, width');
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const blueRectangle = new Rectangle('blue', 5, 3);

    expect(findObjKeys(blueRectangle)).toBe('color, height, width');
  });

  it('it uses `Object.keys`', () => {
    const purpleRectangle = new Rectangle('purple', 7, 2);
    spyOn(Object, 'keys').and.callThrough(); // checks if Object.keys is called

    findObjKeys(purpleRectangle);

    expect(Object.keys).toHaveBeenCalled();
    // Note: do no use Object.hasOwnProperty.call(purpleRectangle);
  });
});
