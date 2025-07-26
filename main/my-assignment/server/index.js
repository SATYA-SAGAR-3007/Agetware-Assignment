const express = require('express');
const path = require('path');
const app = express();
const apiRoutes = require('./routes/api');

// Serve static files
app.use(express.static(path.join(__dirname, '../client')));

// JSON parsing
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

// Start server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
