import { gql } from "@apollo/client";

export const GET_NOTES = gql`
    query GetNotes {
        user {
            notes {
                id
                title
                text
                createdAt
            }
        }
    }
`;
