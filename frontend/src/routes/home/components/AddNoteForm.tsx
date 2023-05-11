import { useInput } from "../../../hooks/useInput";

import {
    Box,
    Button,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import { FormEvent } from "react";

interface IProps {
    styles?: any;
    addNote: (title: string, text: string) => void;
}

export default function AddNoteForm({ styles, addNote }: IProps) {
    const title = useInput("");
    const text = useInput("");

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (title.value && text.value) {
            addNote(title.value, text.value);
        }
    };

    return (
        <Paper
            elevation={1}
            sx={{
                py: 4,
                px: 4,
                ...styles,
            }}
        >
            <Typography variant="h5" component="h2">
                Add Note
            </Typography>

            <Box
                component="form"
                sx={{
                    mt: 3,
                }}
                onSubmit={onFormSubmit}
            >
                <Box display="flex" flex-direction="column" gap={2}>
                    <FormControl>
                        <TextField
                            variant="outlined"
                            placeholder="Note title"
                            {...title}
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            placeholder="Note content"
                            fullWidth
                            {...text}
                        />
                    </FormControl>
                </Box>

                <Button
                    variant="contained"
                    size="large"
                    sx={{ mt: 4 }}
                    type="submit"
                    disabled={!title.value || !text.value}
                >
                    Add Note
                </Button>
            </Box>
        </Paper>
    );
}
