// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.post('/', (req, res) =>{
    console.log("working fine website");
})

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/DD1', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/quizzes', require('./routes/quizRoutes'));
app.use('/api/scheduling', require('./routes/schedulingRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


module.exports = app;
