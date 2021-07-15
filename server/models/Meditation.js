const mongoose = require('mongoose');

const { Schema } = mongoose;

const meditationSchema = new Schema({

});

const Meditation = mongoose.model('Meditation', meditationSchema);

module.exports = Meditation;