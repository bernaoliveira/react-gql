import { INote } from "./note.interface";

export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    notes: INote[];
}
