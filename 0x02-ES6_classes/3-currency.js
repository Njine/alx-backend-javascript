export default class Currency {
  /**
   * Creates a new Currency object.
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   * @returns {String} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {String} value - The new currency code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the currency name.
   * @returns {String} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {String} value - The new currency name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Displays the full currency representation.
   * @returns {String} The full currency representation (name (code)).
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

