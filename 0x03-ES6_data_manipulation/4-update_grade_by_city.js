/**
 * Updates the grades of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {String} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to students.
 * @returns {{id: Number, firstName: String, location: String, grade: Number|String}[]} Updated list of students with grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (Array.isArray(students)) {
    return students
      .filter(student => student.location === city)
      .map(student => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades.find(grade => grade.studentId === student.id) || defaultGrade).grade,
      }));
  }
  return [];
}

