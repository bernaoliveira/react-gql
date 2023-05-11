import { gql } from "@apollo/client";

export const CREATE_NOTE = gql`
    mutation CreateNote($title: String!, $text: String!) {
        createNote(title: $title, text: $text) {
            title
            text
            createdAt
        }
    }
`;
