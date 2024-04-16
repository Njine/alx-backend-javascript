/**
 * Retrieves students in a given location.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The location.
 * @returns {Object[]} Array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter(student => student.location === city);
  }
  return [];
}

