import { IUser } from "./user.interface";

export interface IAuthState {
    loading: boolean;
    error: null | string;
    success: boolean;
    user: boolean | null | IUser;
    token: boolean | null | string;
}
