import {
    Box,
    Button,
    FormControl,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

export default function AddNoteForm() {
    return (
        <Paper
            elevation={1}
            sx={{
                py: 4,
                px: 4,
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
            >
                <Box display="flex" flex-direction="column" gap={2}>
                    <FormControl>
                        <TextField
                            variant="outlined"
                            placeholder="Note title"
                        />
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField
                            variant="outlined"
                            placeholder="Note content"
                            fullWidth
                        />
                    </FormControl>
                </Box>

                <Button variant="contained" size="large" sx={{ mt: 4 }}>
                    Add Note
                </Button>
            </Box>
        </Paper>
    );
}
