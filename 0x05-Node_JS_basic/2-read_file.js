const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => {
  // Check if the file exists
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

  try {
    // Read the file synchronously and split into lines
    const fileContent = fs.readFileSync(dataPath, 'utf-8').trim();
    const fileLines = fileContent.split('\n');
    
    // Ignore empty lines at the end
    if (fileLines.length === 0) throw new Error('Cannot load the database');
    
    // Initialize student groups
    const studentGroups = {};
    const header = fileLines[0].split(',');
    
    // Loop through each line to process student data
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

    // Calculate total students
    const totalStudents = Object.values(studentGroups).reduce((acc, students) => acc + students.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field and their names
    for (const [field, students] of Object.entries(studentGroups)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
