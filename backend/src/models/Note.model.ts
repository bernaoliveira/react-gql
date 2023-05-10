import {
    Model,
    Column,
    Table,
    PrimaryKey,
    AutoIncrement,
} from "sequelize-typescript";
@Table
export class Note extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    userId: number;

    @Column
    title: string;

    @Column
    text: string;

    @Column
    createdAt: Date;
}
