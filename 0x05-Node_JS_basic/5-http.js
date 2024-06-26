const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
  if (!dataPath) {
    reject(new Error('Cannot load the database'));
    return;
  }

  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const reportParts = [];
    const fileLines = data.trim().split('\n');
    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    fileLines.slice(1).forEach((line) => {
      if (line) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        if (!studentGroups[field]) {
          studentGroups[field] = [];
        }

        const studentEntries = studentPropNames.map((propName, idx) => [
          propName,
          studentPropValues[idx],
        ]);

        studentGroups[field].push(Object.fromEntries(studentEntries));
      }
    });

    const totalStudents = Object.values(studentGroups).reduce(
      (pre, cur) => pre + cur.length,
      0,
    );

    reportParts.push(`Number of students: ${totalStudents}`);
    Object.entries(studentGroups).forEach(([field, group]) => {
      reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
    });

    resolve(reportParts.join('\n'));
  });
});

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Content-Length': responseText.length,
    });
    res.end(responseText);
  } else if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];
    countStudents(DB_FILE)
      .then((report) => {
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Length': responseText.length,
        });
        res.end(responseText);
      })
      .catch((err) => {
        responseParts.push(err.message);
        const responseText = responseParts.join('\n');
        res.writeHead(200, {
          'Content-Type': 'text/plain',
          'Content-Length': responseText.length,
        });
        res.end(responseText);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
