/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number[]} Array of student ids.
 */
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map(student => student.id);
  }
  return [];
}

