const express = require('express');
const router = express.Router();
const MeetupPost = require('../models/meetupPost');

//Routes
router.get('/', (req, res) => {
    MeetupPost.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body);

    res.json({
        msg: 'Data received!'
    });
});

router.get('/name', (req, res) => {
    const data = {
        username: 'peterson',
        age: 5
    }
    res.json(data);
});


module.exports = router;