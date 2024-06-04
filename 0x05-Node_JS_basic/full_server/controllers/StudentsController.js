const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(_, res) {
    try {
      const db = await readDatabase('./database.csv');
      const response = ['This is the list of our students'];
      Object.keys(db).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })).forEach(field => {
        response.push(`Number of students in ${field}: ${db[field].length}. List: ${db[field].join(', ')}`);
      });
      res.status(200).send(response.join('\n'));
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const db = await readDatabase('./database.csv');
      const response = db[major] ? db[major].join(', ') : [];
      res.status(200).send(`List: ${response}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
