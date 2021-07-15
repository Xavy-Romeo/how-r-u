
const { Activity, Book, Emotion, Meditation, User } = require('../models');


const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .select('-__v -password');
        }, 
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return { user };
        },
    }
};

module.exports = resolvers;