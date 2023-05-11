import { Box, Collapse, List, Typography } from "@mui/material";
import { TransitionGroup } from "react-transition-group";
import NoteListCard from "./NoteListCard";
import { INote } from "../interfaces/note.interface";

interface IProps {
    styles?: any;
    notes: INote[];
    deleteNote: (id: number) => void;
}

export default function NoteList({ styles, notes, deleteNote }: IProps) {
    return (
        <Box sx={styles}>
            <Typography variant="h4" component="h2">
                Note List
            </Typography>

            <List>
                <TransitionGroup>
                    {notes.map((note) => (
                        // Avoiding "Cannot read properties of null (reading 'scrollTop') Material UI bug"
                        // by adding div
                        <Collapse key={note.id}>
                            <div>
                                <NoteListCard
                                    note={note}
                                    deleteNote={deleteNote}
                                />
                            </div>
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
}
