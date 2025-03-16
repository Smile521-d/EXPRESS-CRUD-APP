// task3.js
const express = require('express');
const app = express();
app.use(express.json()); // To parse JSON bodies in requests

// Sample data (Trains)
let trains = [
  { id: 1, name: "Express 101", route: "NYC to Boston" },
  { id: 2, name: "Superfast 202", route: "LA to Chicago" },
  { id: 3, name: "Shuttle 303", route: "Dallas to Houston" },
  { id: 4, name: "Regional 404", route: "San Francisco to LA" },
  { id: 5, name: "Intercity 505", route: "Seattle to Portland" },
  { id: 6, name: "Overnight 606", route: "Miami to Orlando" }
];

// POST route to add a new train
app.post('/addTrain', (req, res) => {
  const newTrain = req.body;
  trains.push(newTrain);
  res.status(201).json(newTrain);
});

// PUT route to update a train's details
app.put('/updateTrain/:id', (req, res) => {
  const { id } = req.params;
  const updatedTrain = req.body;
  const trainIndex = trains.findIndex((train) => train.id === parseInt(id));

  if (trainIndex === -1) {
    return res.status(404).json({ message: 'Train not found' });
  }

  trains[trainIndex] = { id: parseInt(id), ...updatedTrain };
  res.status(200).json(trains[trainIndex]);
});

// DELETE route to delete a train
app.delete('/deleteTrain/:id', (req, res) => {
  const { id } = req.params;
  const trainIndex = trains.findIndex((train) => train.id === parseInt(id));

  if (trainIndex === -1) {
    return res.status(404).json({ message: 'Train not found' });
  }

  const deletedTrain = trains.splice(trainIndex, 1);
  res.status(200).json({ message: 'Train deleted', deletedTrain });
});

// GET route to fetch all trains (you can use this to test CRUD operations)
app.get('/trains', (req, res) => {
  res.json(trains);
});

// Set the port where the server will listen (changed to 3001)
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
