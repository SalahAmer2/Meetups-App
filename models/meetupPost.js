const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const MeetupPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const MeetupPost = mongoose.model('MeetupPost', MeetupPostSchema);

module.exports = MeetupPost;