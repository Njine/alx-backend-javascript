/**
 * Retrieves a list of students.
 * @returns {Array<{id: Number, firstName: String, location: String}>} Array of student objects.
 */
export default function getListStudents() {
  const students = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return students.map(({ id, firstName, location }) => ({ id, firstName, location }));
}

