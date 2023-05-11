import { gql } from "@apollo/client";

export const LOGIN = gql`
    query LOGIN($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;
