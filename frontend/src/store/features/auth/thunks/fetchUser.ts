import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../../setup/apollo";
import { GET_USER } from "../../../../graphql/auth/queries/getUser";

export default createAsyncThunk(
    "auth/fetch",
    async (_, { rejectWithValue, fulfillWithValue }) => {
        try {
            const result = await client.query({
                query: GET_USER,
            });

            const user = result.data?.user;

            if (!user) {
                rejectWithValue(result.errors);
                localStorage.removeItem("token");
            }

            return fulfillWithValue(user);
        } catch (error: any) {
            localStorage.removeItem("token");
            return rejectWithValue("Failed to fetch user. Logging out...");
        }
    }
);
