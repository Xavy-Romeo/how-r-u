import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $username: String!, $password: String!, $email: String!) {
        addUser(firstName: $firstName, lastName: $lastName, username: $username, password: $password, email: $email) {  
            token
            user {
                _id
                firstName
                lastName
                email
                username
            }          
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginMutation($loginUsername: String!, $loginPassword: String!) {
        login(username: $loginUsername, password: $loginPassword) {
            token
            user {
                _id
                firstName
                lastName
                email
                username
            }   
        }
    }
`;