import { FormEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import {
    Alert,
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    Link,
    OutlinedInput,
    Paper,
    Snackbar,
    Typography,
} from "@mui/material";

import { RESTORE_PASSWORD } from "../../graphql/auth/mutations/restorePassword";

export default function Restore() {
    const navigate = useNavigate();
    const [restore] = useMutation(RESTORE_PASSWORD);

    const [notification, setNotification] = useState<{
        shown: boolean;
        type: "success" | "error";
        message: string;
    }>({
        shown: false,
        type: "success",
        message: "",
    });
    const email = useInput("");

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        restore({
            variables: {
                email: email.value,
            },
        })
            .then(() => {
                setNotification({
                    shown: true,
                    type: "success",
                    message: "Restore link sent to your console :)",
                });
            })
            .catch(() => {
                setNotification({
                    shown: true,
                    type: "error",
                    message: "Something went wrong :(",
                });
            });
    };

    const closeNotification = () => {
        setNotification({
            shown: false,
            type: "success",
            message: "",
        });
    };

    return (
        <Paper
            elevation={1}
            sx={{
                p: 4,
            }}
        >
            <Typography variant="h5" component="h1">
                Restore password
            </Typography>

            <Box
                component="form"
                sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                onSubmit={onFormSubmit}
            >
                <FormControl variant="outlined">
                    <InputLabel htmlFor="email">E-Mail</InputLabel>
                    <OutlinedInput
                        id="email"
                        type="email"
                        label="E-Mail"
                        autoComplete="no"
                        required
                        {...email}
                    />
                </FormControl>

                <Button
                    variant="contained"
                    sx={{
                        mt: 4,
                        width: "100%",
                    }}
                    type="submit"
                >
                    Send restore link
                </Button>

                <Grid container>
                    <Grid item>
                        <Link
                            onClick={() => navigate("/auth/")}
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Box>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={notification.shown}
                autoHideDuration={6000}
                onClose={closeNotification}
            >
                <Alert
                    severity={
                        notification.type === "success" ? "success" : "error"
                    }
                >
                    {notification?.message}
                </Alert>
            </Snackbar>
        </Paper>
    );
}
