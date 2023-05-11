import { FormEvent, useEffect } from "react";
import { useTogglePassword } from "../../hooks/useTogglePassword";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";

import {
    Box,
    Button,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useInput } from "../../hooks/useInput";
import LoadingButton from "@mui/lab/LoadingButton";

import login from "../../store/features/auth/thunks/login";

export default function Login() {
    const { loading, success } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const togglePassword = useTogglePassword();

    const email = useInput("");
    const password = useInput("");

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            login({
                email: email.value,
                password: password.value,
            })
        );
    };

    useEffect(() => {
        if (success) navigate("/");
    }, [navigate, success]);

    return (
        <Paper
            elevation={1}
            sx={{
                p: 4,
            }}
        >
            <Typography variant="h5" component="h1">
                Login
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

                <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                        id="password"
                        type={togglePassword.showPassword ? "text" : "password"}
                        autoComplete="no"
                        required
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
                        label="Password"
                        {...password}
                    />
                </FormControl>

                <LoadingButton
                    sx={{
                        mt: 4,
                        width: "100%",
                    }}
                    variant="contained"
                    loading={loading}
                    type="submit"
                >
                    Sign In
                </LoadingButton>

                <Grid container>
                    <Grid item xs>
                        <Link
                            onClick={() => navigate("/auth/restore")}
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            onClick={() => navigate("/auth/register")}
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}
