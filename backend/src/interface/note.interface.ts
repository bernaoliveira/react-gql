import { IUser } from "./user.interface";

export interface INote {
    id: number;
    title: string;
    text: string;
    createdAt: Date;
    user: IUser;
}
