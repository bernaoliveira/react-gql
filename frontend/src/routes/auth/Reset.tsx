import { FormEvent, useState } from "react";
import { useTogglePassword } from "../../hooks/useTogglePassword";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useInput } from "../../hooks/useInput";

import {
    Alert,
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Snackbar,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { RESET_PASSWORD } from "../../graphql/auth/mutations/resetPassword";

export default function Reset() {
    const navigate = useNavigate();
    const [reset] = useMutation(RESET_PASSWORD);
    const [searchParams] = useSearchParams();

    const password = useInput("");
    const togglePassword = useTogglePassword();

    const [notification, setNotification] = useState<{
        shown: boolean;
        type: "success" | "error";
        message: string;
    }>({
        shown: false,
        type: "success",
        message: "",
    });

    const closeNotification = () => {
        setNotification({
            shown: false,
            type: "success",
            message: "",
        });
    };

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        reset({
            variables: {
                password: password.value,
                restoreToken: searchParams.get("token"),
            },
        })
            .then(() => {
                setNotification({
                    shown: true,
                    type: "success",
                    message: "Password successfully reset!",
                });

                setTimeout(() => {
                    navigate("/auth");
                }, 3000);
            })
            .catch(() => {
                setNotification({
                    shown: true,
                    type: "error",
                    message: "Something went wrong :(",
                });
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
                Reset password
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
                    <InputLabel htmlFor="password">New password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={togglePassword.showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={togglePassword.togglePassword}
                                    onMouseDown={togglePassword.handleMouseDown}
                                    edge="end"
                                >
                                    {togglePassword.showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="New Password"
                        {...password}
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
                    Reset password
                </Button>
            </Box>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={notification.shown}
                autoHideDuration={3000}
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
