const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date
    },
    description: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    emotion: {
        type: Schema.Types.ObjectId,
        ref: 'Emotion',
        required: true
    }

});

const Activity = model('Activity', activitySchema);

module.exports = Activity;