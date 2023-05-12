import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../routes/RootLayout";
import ErrorLayout from "../routes/ErrorLayout";
import AuthLayout from "../routes/AuthLayout";

import Home from "../routes/home/Index";
import Login from "../routes/auth/Login";
import Register from "../routes/auth/Register";
import Restore from "../routes/auth/Restore";
import Reset from "../routes/auth/Reset";
import ProtectedRoute from "../routes/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                path: "/",
                element: <ProtectedRoute />,
                children: [
                    {
                        index: true,
                        element: <Home />,
                    },
                ],
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

export default router;
