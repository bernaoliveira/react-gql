import { createAsyncThunk } from "@reduxjs/toolkit";

import { REGISTER } from "../../../../graphql/auth/mutations/register";
import { IRegisterPayload } from "../interfaces/payloads/register.payload.interface";
import client from "../../../../setup/apollo";

export default createAsyncThunk(
    "auth/register",
    async (
        { name, email, password }: IRegisterPayload,
        { rejectWithValue, fulfillWithValue }
    ) => {
        try {
            const result = await client.mutate({
                mutation: REGISTER,
                variables: {
                    name,
                    email,
                    password,
                },
            });
            const token = result.data?.register;

            if (!token) {
                rejectWithValue(result.errors);
            }

            localStorage.setItem("token", token);

            return fulfillWithValue(token);
        } catch (error: any) {
            return rejectWithValue("Failed to register");
        }
    }
);
