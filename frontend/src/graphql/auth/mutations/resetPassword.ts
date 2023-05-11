import { gql } from "@apollo/client";

export const RESET_PASSWORD = gql`
    mutation Reset($password: String!, $restoreToken: String!) {
        reset(password: $password, restoreToken: $restoreToken)
    }
`;
