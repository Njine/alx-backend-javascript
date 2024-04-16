/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number} The sum of student ids.
 */
export default function getStudentIdsSum(students) {
  if (Array.isArray(students)) {
    return students.reduce((sum, student) => sum + student.id, 0);
  }
  return 0;
}

