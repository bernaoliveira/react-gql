import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./interfaces/auth-state.interface";

import fetchUser from "./thunks/fetchUser";
import login from "./thunks/login";
import register from "./thunks/register";

const initialState: IAuthState = {
    loading: false,
    error: null,
    success: false,

    // user: null on initial load, user: false if not logged in, user: IUser if logged in
    user: null,
    token: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        clearNotifications: (state) => {
            state.error = null;
            state.success = false;
        },

        setUser: (state, { payload }) => {
            state.user = payload;
        },

        setToken: (state, { payload }) => {
            state.token = payload;
        },

        logout: (state) => {
            localStorage.removeItem("token");
            window.location.href = "/auth";
        },
    },

    extraReducers: (builder) => {
        // Fetch user
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchUser.fulfilled, (state, { payload }) => {
            state.user = payload;
            state.loading = false;
        });

        builder.addCase(fetchUser.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = String(payload);
            state.user = false;
            state.token = false;
        });

        // Login
        builder.addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.token = String(payload);
            state.loading = false;
            state.success = true;
        });

        builder.addCase(login.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = String(payload);
        });

        // Registration
        builder.addCase(register.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(register.fulfilled, (state, { payload }) => {
            state.token = String(payload);
            state.loading = false;
            state.success = true;
        });

        builder.addCase(register.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = String(payload);
        });
    },
});
export default authSlice.reducer;
export const { clearNotifications, setToken, logout } = authSlice.actions;
