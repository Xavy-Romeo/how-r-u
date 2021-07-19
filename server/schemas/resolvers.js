const { AuthenticationError } = require('apollo-server-express');
const { Activity, Book, Emotion, Meditation, User } = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
        },
        emotion: async () => {
            return Emotion.find()
        }, 
        activity: async () => {
            return Activity.find()
        },
        book: async () => {
            return Book.find()
        }, 
        meditation: async () => {
            return Meditation.find()
        } 
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            return user;
        }
    }
};

module.exports = resolvers;