import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";
import { INote } from "../interfaces/note.interface";

interface IProps {
    note: INote;
    deleteNote: (id: number) => void;
}

export default function NoteListCard({ note, deleteNote }: IProps) {
    return (
        <Box sx={{ mt: 3 }}>
            <Card elevation={1} sx={{ px: 2, py: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {note.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {note.text}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Note time:{" "}
                        {new Date(Number(note.createdAt)).toLocaleString()}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => deleteNote(note.id)} size="small">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}
