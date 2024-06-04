const http = require('http');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer((req, res) => {
  const responseText = 'Hello Holberton School!';
  
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.end(responseText);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}`);
});

module.exports = app;
