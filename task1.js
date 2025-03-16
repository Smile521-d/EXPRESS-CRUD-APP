// task1.js
const express = require('express');
const app = express();

// Simple GET route to display group names
app.get('/', (req, res) => {
  res.send('<h1>Group Names</h1><ul><li>Group 1</li><li>Group 2</li><li>Group 3</li></ul>');
});

// Set the port where the server will listen
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
