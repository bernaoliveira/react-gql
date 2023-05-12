import { useAppSelector } from "../../hooks/useAppSelector";
import { useMutation, useQuery } from "@apollo/client";

import { Typography } from "@mui/material";

import AddNoteForm from "./components/AddNoteForm";
import AboutUser from "./components/AboutUser";
import NoteList from "./components/NoteList";

import { CREATE_NOTE } from "../../graphql/notes/mutations/createNote";
import { GET_NOTES } from "../../graphql/notes/queries/getNotes";
import { DELETE_NOTE } from "../../graphql/notes/mutations/deleteNote";

export default function Home() {
    const { user } = useAppSelector((state) => state.auth);

    const { data, refetch } = useQuery(GET_NOTES);
    const [createNoteMutation] = useMutation(CREATE_NOTE);
    const [deleteNoteMutation] = useMutation(DELETE_NOTE);

    const addNote = (title: string, text: string) => {
        createNoteMutation({
            variables: {
                title,
                text,
            },
        }).then(refetch);
    };

    const deleteNote = (id: number) => {
        deleteNoteMutation({
            variables: {
                noteId: id,
            },
        }).then(refetch);
    };

    if (!user || typeof user !== "object") return <>No user data</>;

    return (
        <>
            <Typography variant="h3" component="h1">
                Welcome to the Home page!
            </Typography>

            <AboutUser styles={{ mt: 4 }} user={user} />
            <AddNoteForm styles={{ mt: 4 }} addNote={addNote} />
            {data && (
                <NoteList
                    styles={{ mt: 4 }}
                    notes={data.user.notes}
                    deleteNote={deleteNote}
                />
            )}
        </>
    );
}
