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

    type Query {
        users: [User]
        user(username: String!): User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): User
    }

`;

module.exports = typeDefs;