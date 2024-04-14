export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  /**
   * Gets the square footage of the building.
   * @returns {Number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {Number} value - The new square footage.
   */
  set sqft(value) {
    this._sqft = value;
  }
}

