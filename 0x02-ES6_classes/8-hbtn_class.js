export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Gets the size of the Holberton class.
   * @returns {Number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of the Holberton class.
   * @param {Number} value - The new size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Gets the location of the Holberton class.
   * @returns {String} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of the Holberton class.
   * @param {String} value - The new location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Converts the Holberton class into a primitive value based on the hint provided.
   * @param {String} hint - The hint for the conversion (number or string).
   * @returns {Number|String} The primitive value of the class.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}

