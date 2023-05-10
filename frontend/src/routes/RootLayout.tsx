import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function RootLayout() {
    return (
        <Container
            sx={{
                mt: 8,
            }}
            maxWidth="md"
        >
            <Outlet />
        </Container>
    );
}
