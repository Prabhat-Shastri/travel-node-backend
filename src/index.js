const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Debug: Check if env vars are loaded
console.log('MongoDB URI:', process.env.MONGODB_URI);

const app = express();
const port = process.env.PORT || 3000;

// Body parser
app.use(express.json());

// Mount routes
app.use('/api/users', require('./routes/userRoutes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Travel App API' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});