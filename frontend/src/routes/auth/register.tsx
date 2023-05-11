import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useTogglePassword } from "../../hooks/useTogglePassword";
import { useInput } from "../../hooks/useInput";
import { useAppSelector } from "../../hooks/useAppSelector";

import {
    Box,
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
import LoadingButton from "@mui/lab/LoadingButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import register from "../../store/features/auth/thunks/register";

export default function Register() {
    const { loading, success } = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();
    const togglePassword = useTogglePassword();

    const name = useInput("");
    const email = useInput("");
    const password = useInput("");

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            register({
                name: name.value,
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
                Register
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
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <OutlinedInput
                        id="name"
                        type="text"
                        label="Name"
                        required
                        {...name}
                    />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="email">E-Mail</InputLabel>
                    <OutlinedInput
                        id="email"
                        type="email"
                        label="E-Mail"
                        required
                        {...email}
                    />
                </FormControl>

                <FormControl variant="outlined">
                    <InputLabel htmlFor="password">Password</InputLabel>
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
                        required
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
                    Sign Up
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
                            onClick={() => navigate("/auth/")}
                            variant="body2"
                            sx={{ cursor: "pointer" }}
                        >
                            Sign In
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
}
