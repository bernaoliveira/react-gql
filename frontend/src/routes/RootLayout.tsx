import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppDispatch } from "../hooks/useAppDispatch";
import fetchUser from "../store/features/auth/thunks/fetchUser";
import { setToken } from "../store/features/auth/authSlice";

import { Container } from "@mui/material";

export default function RootLayout() {
    const dispatch = useAppDispatch();
    const token = localStorage.getItem("token") || "";

    // Fetch user on mount
    // Initially user is null, so we need to fetch it
    // If user === false (that mean user is not authenticated), we redirect it in ProtectedRoute
    useEffect(() => {
        dispatch(setToken(token));
        dispatch(fetchUser());
    });

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
