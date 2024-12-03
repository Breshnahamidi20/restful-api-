const express = require('express');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const app = express();

app.use(express.json()); // Parse JSON requests

// Log the imported userRoutes to debug
console.log('userRoutes:', userRoutes);

app.use('/api', userRoutes); // Use userRoutes as middleware

app.get('/', (req, res) => {
  res.send('Welcome to the RESTful API!');
});

module.exports = app;
