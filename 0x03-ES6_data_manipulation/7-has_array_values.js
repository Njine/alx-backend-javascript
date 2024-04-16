/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {Array} array - The array of items.
 * @returns {Boolean} True if all elements in the array exist in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  return array.every(value => set.has(value));
}

