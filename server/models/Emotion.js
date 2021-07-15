const mongoose = require('mongoose');

const { Schema } = mongoose;

const emotionSchema = new Schema({

});

const Emotion = mongoose.model('Emotion', emotionSchema);

module.exports = Emotion;