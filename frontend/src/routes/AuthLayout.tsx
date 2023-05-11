import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";

import { Navigate, Outlet } from "react-router-dom";
import { Alert, Container, Snackbar } from "@mui/material";
import { clearNotifications } from "../store/features/auth/authSlice";

export default function AuthLayout() {
    const token = localStorage.getItem("token") || "";

    const { error, success } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const onSnackbarClose = () => {
        dispatch(clearNotifications());
    };

    if (token) {
        return <Navigate to="/" />;
    }

    return (
        <Container
            maxWidth="xs"
            sx={{
                mt: 32,
            }}
        >
            <Outlet />
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={Boolean(error || success)}
                autoHideDuration={6000}
                onClose={onSnackbarClose}
            >
                <Alert severity={success ? "success" : "error"}>
                    {success ? "Success!" : error}
                </Alert>
            </Snackbar>
        </Container>
    );
}
