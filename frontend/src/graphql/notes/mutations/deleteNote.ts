import { gql } from "@apollo/client";

export const DELETE_NOTE = gql`
    mutation DeleteNote($noteId: Int!) {
        deleteNote(id: $noteId)
    }
`;
