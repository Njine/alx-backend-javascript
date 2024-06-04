const express = require('express');

const app = express();
const PORT = 1245;

/**
 * Root endpoint handler that sends a welcome message.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Start the HTTP server and listen on the specified port.
 */
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
