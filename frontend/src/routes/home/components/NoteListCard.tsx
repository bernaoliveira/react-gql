import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from "@mui/material";

export default function NoteListCard() {
    return (
        <Box sx={{ mt: 3 }}>
            <Card elevation={1} sx={{ px: 2, py: 2 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Delete</Button>
                </CardActions>
            </Card>
        </Box>
    );
}
