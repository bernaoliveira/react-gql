import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginPayload } from "../interfaces/payloads/login.payload";
import client from "../../../../setup/apollo";
import { LOGIN } from "../../../../graphql/auth/queries/login";

export default createAsyncThunk(
    "auth/login",
    async (
        { email, password }: ILoginPayload,
        { rejectWithValue, fulfillWithValue }
    ) => {
        try {
            const result = await client.query({
                query: LOGIN,
                variables: {
                    email,
                    password,
                },
            });
            const token = result.data?.login;

            if (!token) {
                rejectWithValue(result.errors);
            }

            localStorage.setItem("token", token);

            return fulfillWithValue(token);
        } catch (error: any) {
            return rejectWithValue("Failed to login");
        }
    }
);
