const mongoose = require('mongoose');

const { Schema } = mongoose;

const activitySchema = new Schema({

});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;