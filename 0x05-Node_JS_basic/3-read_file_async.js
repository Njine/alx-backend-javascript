const fs = require('fs');

/**
 * Counts the students in a CSV data file asynchronously.
 * @param {String} dataPath - The path to the CSV data file.
 * @returns {Promise<void>}
 */
const countStudents = (dataPath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const fileLines = data.trim().split('\n');
      if (fileLines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentGroups = {};
      const header = fileLines[0].split(',');

      for (const line of fileLines.slice(1)) {
        if (line.trim() === '') continue;
        const studentData = line.split(',');
        const field = studentData[studentData.length - 1];
        const firstName = studentData[0];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(firstName);
      }

      const totalStudents = Object.values(studentGroups).reduce((acc, students) => acc + students.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, students] of Object.entries(studentGroups)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
};

module.exports = countStudents;
