const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    authors: [
        {
            type: String,
        },
    ],
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

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;