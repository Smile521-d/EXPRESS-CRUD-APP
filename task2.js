// task2.js
const express = require('express');
const app = express();

// Sample data to send as JSON
const trains = [
  { id: 1, name: "Express 101", route: "NYC to Boston" },
  { id: 2, name: "Superfast 202", route: "LA to Chicago" },
  { id: 3, name: "Shuttle 303", route: "Dallas to Houston" },
  { id: 4, name: "Regional 404", route: "San Francisco to LA" },
  { id: 5, name: "Intercity 505", route: "Seattle to Portland" },
  { id: 6, name: "Overnight 606", route: "Miami to Orlando" }
];

// GET route to display JSON contents of trains
app.get('/trains', (req, res) => {
  res.json(trains);
});

// Set the port where the server will listen (changed to 3001)
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
