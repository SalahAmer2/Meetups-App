const express = require('express');
const router = express.Router();
const connection = require('connection');

// const MeetupPost = require('../models/meetupPost');

//Routes
router.get('/', (req, res) => {

    const SELECT_ALL_POSTS = SELECT * FROM posts;

    connection.query(SELECT_ALL_POSTS, () => {
        if (err) {
            return res.send(err)
        } else {
            console.log('Data: ', data);
            res.json(data);
        }
    })
    // MeetupPost.find({})
    // .then((data) => {
    //     console.log('Data: ', data);
    //     res.json(data);
    // })
    // .catch((error) => {
    //     console.log('error: ', error);
    // });
});

router.post('/save', (req, res) => {
    console.log('Body: ', req.body); // req.body returns undefined for some reason

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