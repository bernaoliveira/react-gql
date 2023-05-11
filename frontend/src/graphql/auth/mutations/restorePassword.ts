import { gql } from "@apollo/client";

export const RESTORE_PASSWORD = gql`
    mutation Restore($email: String!) {
        restore(email: $email)
    }
`;
