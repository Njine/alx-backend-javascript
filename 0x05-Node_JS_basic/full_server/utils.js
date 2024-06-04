const fs = require('fs');

/**
 * Reads the database asynchronously.
 * @param {String} filePath The path to the CSV database file.
 * @returns {Promise<Object>} A promise that resolves with an object containing arrays of first names per fields.
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else {
      const lines = data.trim().split('\n').filter(line => line.trim() !== '');
      const db = {};

      lines.slice(1).forEach(line => {
        const [firstName, , field] = line.split(',');
        if (!db[field]) {
          db[field] = [];
        }
        db[field].push(firstName);
      });

      resolve(db);
    }
  });
});

module.exports = { readDatabase };
