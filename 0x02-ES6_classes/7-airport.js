export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Gets the name of the airport.
   * @returns {String} The name of the airport.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the airport.
   * @param {String} value - The new name of the airport.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Gets the code of the airport.
   * @returns {String} The code of the airport.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of the airport.
   * @param {String} value - The new code of the airport.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Returns the default string description of the airport.
   * @returns {String} The airport code.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
