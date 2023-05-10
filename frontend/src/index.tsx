import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./routes/RootLayout";
import ErrorLayout from "./routes/ErrorLayout";
import AuthLayout from "./routes/AuthLayout";

import Home from "./routes/home";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import Restore from "./routes/auth/restore";
import Reset from "./routes/auth/reset";

import theme from "./theme";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },

    {
        path: "/auth",
        element: <AuthLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                path: "",
                element: <Login />,
            },

            {
                path: "register",
                element: <Register />,
            },

            {
                path: "restore",
                element: <Restore />,
            },

            {
                path: "reset",
                element: <Reset />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
);
