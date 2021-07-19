// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`

    type User {
        _id: ID!
        firstName: String
        lastName: String
        username: String
        email: String
        password: String
    }

    type Emotion {
        name: String
        description: String
    }

    type Activity {
        title: String
        date: String
        description: String
        location: String
        image: String
        link: String
        emotion: Emotion
    }

    type Book {
        title: String
        description: String
        authors: [String]
        image: String
        link: String
        emotion: Emotion
    }
   
    type Meditation {
        title: String
        authors: [String]
        description: String
        image: String
        link: String
        emotion: Emotion
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        emotion: Emotion
        activity: Activity
        book: Book
        meditation: Meditation
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
    }

`;

module.exports = typeDefs;