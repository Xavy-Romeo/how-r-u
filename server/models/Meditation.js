const mongoose = require('mongoose');

const { Schema } = mongoose;

const meditationSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    authors: [
        {
            type: String
        }
    ],
    description: {
        type: String,
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

const Meditation = mongoose.model('Meditation', meditationSchema);

module.exports = Meditation;