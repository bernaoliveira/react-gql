import { Sequelize } from "sequelize-typescript";
import { User } from "./models/User.model";
import { Note } from "./models/Note.model";

const connection = new Sequelize({
    dialect: "sqlite",
    storage: "./db.sqlite",
    models: [User, Note],
    logging: false,
});

export default connection;
