// Import npm packages
const express = require('express');
// const mongoose = require('mongoose');
const mysql = require('mysql');
const morgan = require('morgan');
const path = require('path');
const connection = require('connection');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123',
//     database: 'react_sql'
// });

connection.connect(err => {
    if (err) {
        return err;
    }
});

console.log(connection);

// mongoose.connect('mongodb://localhost/meetup_app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// const MONGODB_URI = 'mongodb+srv://salah:mernMeetups@meetupsdb.qbae6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(MONGODB_URI || 'mongodb://localhost/meetup_app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!');
});

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));