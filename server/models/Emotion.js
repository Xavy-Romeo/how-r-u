const { Schema, model } = require('mongoose');

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

const Emotion = model('Emotion', emotionSchema);

module.exports = Emotion;