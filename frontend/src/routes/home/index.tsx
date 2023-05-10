import { Box, Typography } from "@mui/material";
import AddNoteForm from "./components/AddNoteForm";
import AboutUser from "./components/AboutUser";
import NoteList from "./components/NoteList";

export default function Home() {
    return (
        <>
            <Typography variant="h3" component="h1">
                Welcome to the Home page!
            </Typography>

            <Box sx={{ mt: 4 }}>
                <AboutUser />
            </Box>

            <Box sx={{ mt: 4 }}>
                <AddNoteForm />
            </Box>

            <Box sx={{ mt: 4 }}>
                <NoteList />
            </Box>
        </>
    );
}
