const mongoose = require('mongoose');

const { Schema } = mongoose;

const emotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;