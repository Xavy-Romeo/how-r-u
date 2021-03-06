import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password) {  
            user {
                _id
                firstName
                lastName
                email
                username
            }
            token          
        }
    }
`;

export const LOGIN_USER = gql`
    mutation LoginMutation($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            user {
                _id
                firstName
                lastName
                email
                username
            }
            token   
        }
    }
`;