// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/meetup_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//HTTP request logger
app.use(morgan('tiny'));

//Routes
app.get('/api', (req, res) => {
    const data = {
        username: 'accime',
        age: 5
    }
    res.json(data);
});

app.get('/api/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    }
    res.json(data);
});

app.listen(PORT, console.log(`Server running on port ${PORT}`));