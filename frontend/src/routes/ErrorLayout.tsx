import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorLayout() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h3" component="h1">
                Oops! Something went wrong.
            </Typography>

            <Button
                sx={{ mt: 4 }}
                variant="contained"
                onClick={() => navigate("/")}
            >
                Go back to the home page
            </Button>
        </Box>
    );
}
