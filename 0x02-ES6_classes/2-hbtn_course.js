/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   * @param {String} name - The name of the course.
   * @param {Number} length - The length of the course in months.
   * @param {String[]} students - The array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @returns {String} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {String} value - The new name of the course.
   * @throws {TypeError} If the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of the course.
   * @returns {Number} The length of the course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {Number} value - The new length of the course in months.
   * @throws {TypeError} If the value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the array of student names enrolled in the course.
   * @returns {String[]} The array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the array of student names enrolled in the course.
   * @param {String[]} value - The new array of student names.
   * @throws {TypeError} If the value is not an array of strings.
   */
  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
